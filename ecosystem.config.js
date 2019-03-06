module.exports = {
  apps : [{
    name: 'fluttering-ssr',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run server',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '122.152.219.175',
      ref  : 'origin/master',
      repo : 'git@github.com:lourain/fluttering.git',
      path : '/root/fluttering/flutter-ssr',
      'post-deploy' : 'git pull && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
