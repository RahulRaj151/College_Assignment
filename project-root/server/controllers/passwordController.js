import Password from '../models/Password.js';

export const addPassword = async (req, res, next) => {
  try {
    const { website, username, password, userId } = req.body;
    if (!website || !username || !password || !userId) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const entry = await Password.create({ website, username, password, userId });
    res.status(201).json({ message: 'Password saved successfully', entry });
  } catch (error) { next(error); }
};

export const viewPasswords = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const passwords = await Password.find({ userId }).sort({ createdAt: -1 });
    res.json({ passwords });
  } catch (error) { next(error); }
};
