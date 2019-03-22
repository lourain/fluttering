module.exports = {
  apps : [{
    name: 'fluttering-ssr',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run server',
    // instances: 1,
    autorestart: true,
    watch: true,
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
      user : 'root',
      host : '122.152.219.175',
      ref  : 'origin/master',
      repo : 'https://github.com/lourain/fluttering.git',
      path : '/root/fluttering/flutter-ssr',
      'post-deploy' : 'git pull && pm2 reload ecosystem.config.js --env production'
    }
  }
};
