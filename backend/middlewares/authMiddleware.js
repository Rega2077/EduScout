const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.header('Authorization');

  // Check if no token is provided
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Extract the token from the "Bearer <token>" format
  const token = authHeader.split(' ')[1];

  // Check if token is missing after splitting
  if (!token) {
    return res.status(401).json({ msg: 'Token format is invalid' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
