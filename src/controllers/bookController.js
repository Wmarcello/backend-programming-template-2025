const getAllBooks = async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const books = await Book.find().skip(offset).limit(limit);

    res.json({
      count: books.length,
      offset,
      limit,
      data: books,
    });
  } catch (error) {
    res.status(500).json({ error: 'SERVER_ERROR' });
  }
};
