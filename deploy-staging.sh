#!/usr/bin/env bash
# ============================================================
# PickONEs — Staging Deployment Script
# Domain: staging.pickones.com
# ============================================================
set -e

APP_DIR="/var/www/staging.pickones.com"
REPO_URL="${1:-git@github.com:user/pickones-game-guide.git}"  # Update with actual repo URL

echo "=============================================="
echo " PickONEs Staging Deploy"
echo " Domain: staging.pickones.com"
echo "=============================================="

# 1. Create directory
if [ ! -d "$APP_DIR" ]; then
  echo "[1/8] Creating $APP_DIR..."
  sudo mkdir -p "$APP_DIR"
  sudo chown "$USER:$USER" "$APP_DIR"
else
  echo "[1/8] $APP_DIR exists"
fi

# 2. Clone or pull
if [ -d "$APP_DIR/.git" ]; then
  echo "[2/8] Pulling latest code..."
  cd "$APP_DIR" && git pull origin master
else
  echo "[2/8] Cloning repository..."
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

# 3. Install dependencies
echo "[3/8] Installing dependencies..."
npm ci --production=false

# 4. Build
echo "[4/8] Building Next.js..."
npm run build

# 5. Stop existing PM2 process
echo "[5/8] Stopping existing PM2 process..."
pm2 stop pickones-staging 2>/dev/null || true
pm2 delete pickones-staging 2>/dev/null || true

# 6. Start with PM2
echo "[6/8] Starting with PM2..."
pm2 start ecosystem.config.cjs --only pickones-staging
pm2 save

# 7. Nginx
echo "[7/8] Setting up Nginx..."
sudo cp nginx-staging.conf /etc/nginx/sites-available/pickones-staging
if [ ! -L /etc/nginx/sites-enabled/pickones-staging ]; then
  sudo ln -s /etc/nginx/sites-available/pickones-staging /etc/nginx/sites-enabled/
fi
sudo nginx -t && sudo systemctl reload nginx

# 8. HTTPS (first time only)
if [ ! -d "/etc/letsencrypt/live/staging.pickones.com" ]; then
  echo "[8/8] Obtaining SSL certificate..."
  sudo certbot --nginx -d staging.pickones.com --non-interactive --agree-tos -m admin@pickones.com
else
  echo "[8/8] SSL certificate exists"
fi

echo ""
echo "=============================================="
echo " ✅ Staging deployment complete!"
echo " https://staging.pickones.com"
echo "=============================================="
