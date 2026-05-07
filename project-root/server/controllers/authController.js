import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const tokenFor=(user)=>jwt.sign({id:user._id,email:user.email,username:user.username},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||'7d'});

export const register=async(req,res,next)=>{try{
  const {username,email,masterPassword}=req.body;
  if(!username||!email||!masterPassword||!emailRegex.test(email)) return res.status(400).json({message:'Invalid input'});
  if(await User.findOne({email})) return res.status(409).json({message:'Email already exists'});
  const hash=await bcrypt.hash(masterPassword,Number(process.env.BCRYPT_SALT_ROUNDS||12));
  const user=await User.create({username,email,masterPassword:hash});
  const token=tokenFor(user);
  res.status(201).json({message:'Registered successfully',token,user:{id:user._id,username:user.username,email:user.email}});
}catch(e){next(e);}};

export const login=async(req,res,next)=>{try{
  const {email,masterPassword}=req.body;
  const user=await User.findOne({email});
  if(!user) return res.status(404).json({message:'User not found'});
  const ok=await bcrypt.compare(masterPassword,user.masterPassword);
  if(!ok) return res.status(401).json({message:'Invalid credentials'});
  const token=tokenFor(user);
  res.json({message:'Login successful',token,user:{id:user._id,username:user.username,email:user.email}});
}catch(e){next(e);}};

export const revalidate=async(req,res,next)=>{try{
  const {masterPassword}=req.body;
  const user=await User.findById(req.user.id);
  const valid=await bcrypt.compare(masterPassword,user.masterPassword);
  if(!valid) return res.status(401).json({message:'Master password mismatch',valid:false});
  res.json({message:'Revalidated',valid:true});
}catch(e){next(e);}};
