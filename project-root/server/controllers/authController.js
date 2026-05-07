import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, masterPassword } = req.body;
    if (!username || !email || !masterPassword || !emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid input data' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Email already registered' });

    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
    const hashedPassword = await bcrypt.hash(masterPassword, saltRounds);
    const user = await User.create({ username, email, masterPassword: hashedPassword });
    return res.status(201).json({ message: 'Registration successful', userId: user._id });
  } catch (error) { next(error); }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, masterPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const isMatch = await bcrypt.compare(masterPassword, user.masterPassword);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });
    return res.json({ message: 'Login successful', userId: user._id, username: user.username });
  } catch (error) { next(error); }
};

export const revalidateMasterPassword = async (req, res, next) => {
  try {
    const { userId, masterPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    const isMatch = await bcrypt.compare(masterPassword, user.masterPassword);
    return res.json({ valid: isMatch, message: isMatch ? 'Revalidation successful' : 'Invalid master password' });
  } catch (error) { next(error); }
};
