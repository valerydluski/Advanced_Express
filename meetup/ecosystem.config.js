// The purpose of this file is covered in CH 05, Video 06
module.exports = {
  apps: [
    {
      name: 'meetup',
      script: 'bin/www',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'nodejs',
      host: 'meetup.demo.dluski.io',
      ref: 'origin/master',
      repo: 'https://github.com/valerydluski/Advanced_Express',

      // Make sure this directory exists on your server or change this entry to match your directory structure
      path: '/home/nodejs/deploy',

      'post-deploy':
        'cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
