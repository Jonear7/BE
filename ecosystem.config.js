module.exports = {
    apps: [
      {
        name: 'eby',
        script: './index.js',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development', // Set to development for local testing
        },
        env_production: {
          NODE_ENV: 'production',
          DB_HOST: '192.168.1.10',
          DB_USERNAME: 'postgres',
          DB_PASSWORD: '1234',
          DB_NAME: 'employee_db',
          DB_PORT: '5433',
        },
      },
    ],
  };
  