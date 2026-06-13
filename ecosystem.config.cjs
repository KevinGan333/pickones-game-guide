module.exports = {
  apps: [
    {
      name: "pickones-game-guide",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/pickones-game-guide",
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
      error_file: "/var/log/pm2/pickones-error.log",
      out_file: "/var/log/pm2/pickones-out.log",
      merge_logs: true,
    },
  ],
};
