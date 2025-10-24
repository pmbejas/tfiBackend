import { verifyAccessToken } from "./authToken.js";

export const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized - Token Invalido" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);

    return res.status(403).json({
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};
