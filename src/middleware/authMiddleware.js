// // src/middleware/auth.js
// const jwt = require('jsonwebtoken');
// const User = require('../../models/User');

// const auth = async (req, res, next) => {
//     try {
//         const token = req.header('Authorization').replace('Bearer ', '');
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findByPk(decoded.id);

//         if (!user) {
//             throw new Error();
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(401).json({ error: 'Please authenticate.' });
//     }
// };

// module.exports = auth;
// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = authenticateJWT;
