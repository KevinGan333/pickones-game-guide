module.exports = {
  apps: [
    {
      name: "pickones-staging",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/staging.pickones.com",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "/var/log/pm2/pickones-staging-error.log",
      out_file: "/var/log/pm2/pickones-staging-out.log",
      merge_logs: true,
    },
    // Production app (inactive until switched)
    {
      name: "pickones-production",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/www.pickones.com",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      autorestart: false,
      watch: false,
      max_memory_restart: "512M",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "/var/log/pm2/pickones-production-error.log",
      out_file: "/var/log/pm2/pickones-production-out.log",
      merge_logs: true,
    },
  ],
};
