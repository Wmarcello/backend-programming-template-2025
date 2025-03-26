const User = require('../models/user.model');

const getUsers = async (req, res) => {
  try {
    const { offset = 0, limit = 10 } = req.query;
    
    // Convert string parameters to numbers
    const offsetNum = parseInt(offset);
    const limitNum = parseInt(limit);

    // Get total count
    const total = await User.countDocuments();

    // Get paginated users
    const users = await User.find()
      .select('-password') // Exclude password field
      .skip(offsetNum)
      .limit(limitNum);

    return res.status(200).json({
      status: 'success',
      data: {
        total,
        offset: offsetNum,
        limit: limitNum,
        users
      }
    });

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

module.exports = {
  getUsers
}; 