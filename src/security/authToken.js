import jwt from 'jsonwebtoken';
import crypto  from 'crypto';
import config from '../config.js';

export const refreshCookieOptions = {
  httpOnly: true,
  secure: true,            
  sameSite: 'Strict',      
  path: '/auth/refresh',   
};

export const signAccessToken = (user) => {
  const datosToken = {
    sub: String(user.id),
    type: 'access',
  };

  return jwt.sign(datosToken, config.jwtAccessTokenSecretWord, {
    expiresIn: config.jwtAccessTokenExpiresIn,
    issuer: config.jwtIssuer,
    audience: config.jwtAudience,
  });
}

export const signRefreshToken = (user) => {
  const jti = crypto.randomUUID();
  const datosToken = {
    sub: String(user.id),
    ver: user.tokenVersion ?? 0,
    type: 'refresh',
    jti,
  };

  const refreshToken = jwt.sign(datosToken, config.jwtRefreshTokenSecretWord, {
    expiresIn: config.jwtRefreshTokenExpiresIn,
    issuer: config.jwtIssuer,
    audience: config.jwtAudience,
  });

  return { refreshToken, jti };
}

export const generateTokens = (user) => {
  const accessToken = signAccessToken(user);
  const { refreshToken, jti } = signRefreshToken(user);
  return { accessToken, refreshToken, jti };
}


export function verifyAccessToken(token) {
  return jwt.verify(token, JWT_ACCESS_SECRET, {
    issuer: ISSUER,
    audience: AUDIENCE,
  });
}
