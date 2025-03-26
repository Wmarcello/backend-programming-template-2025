const Book = require('../models/book.model');

const getBooks = async (req, res) => {
  try {
    const { offset = 0, limit = 10 } = req.query;
    
    // Convert string parameters to numbers
    const offsetNum = parseInt(offset);
    const limitNum = parseInt(limit);

    // Get total count
    const total = await Book.countDocuments();

    // Get paginated books
    const books = await Book.find()
      .skip(offsetNum)
      .limit(limitNum);

    return res.status(200).json({
      status: 'success',
      data: {
        total,
        offset: offsetNum,
        limit: limitNum,
        books
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
  getBooks
}; 