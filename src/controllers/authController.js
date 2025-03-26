const User = require('../models/User');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Cari user berdasarkan email
    const user = await User.findOne({ email });

    // 2. Jika user tidak ditemukan atau password salah
    if (!user || user.password !== password) {
      return res.status(403).json({
        error: 'INVALID_PASSWORD',
        message: 'Email atau password salah',
      });
    }

    // 3. Response sukses
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    res.json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'SERVER_ERROR' });
  }
};

module.exports = { login };
