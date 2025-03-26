const User = require('../models/user.model');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ 
        status: 'error',
        message: 'INVALID_PASSWORD'
      });
    }

    // Check password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(403).json({ 
        status: 'error',
        message: 'INVALID_PASSWORD'
      });
    }

    // Return success response
    return res.status(200).json({
      status: 'success',
      message: 'Login successful'
    });

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

module.exports = {
  login
}; 