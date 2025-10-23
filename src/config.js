import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  defaultRoute: process.env.DEFAULT_ROUTE,
  secretJWTKey: process.env.JWT_SECRET,
  database_name: process.env.DB_NAME,
  database_user: process.env.DB_USER,
  database_pass: process.env.DB_PASS,
  database_host: process.env.DB_HOST,
  database_port: process.env.DB_PORT,
  database_logging: process.env.DB_LOGGING,
  database_dialect: process.env.DB_DIALECT,
  jwtSecret: process.env.JWT_SECRET,
  jwtAccessTokenSecretWord: process.env.JWT_ACCESS_TOKEN_SECRET_WORD,
  jwtRefreshTokenSecretWord: process.env.JWT_REFRESH_TOKEN_SECRET_WORD,
  jwtAccessTokenExpiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  jwtRefreshTokenExpiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  jwtIssuer: process.env.JWT_ISSUER,
  jwtAudience: process.env.JWT_AUDIENCE,
};