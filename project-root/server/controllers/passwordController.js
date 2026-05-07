import Password from '../models/Password.js';
export const addPassword=async(req,res,next)=>{try{
  const {website,username,password}=req.body;
  if(!website||!username||!password) return res.status(400).json({message:'All fields required'});
  const data=await Password.create({website,username,password,userId:req.user.id});
  res.status(201).json({message:'Password saved',data});
}catch(e){next(e);}};

export const getPasswords=async(req,res,next)=>{try{
  const passwords=await Password.find({userId:req.user.id}).sort({createdAt:-1});
  res.json({passwords});
}catch(e){next(e);}};

export const deletePassword=async(req,res,next)=>{try{
  const item=await Password.findOneAndDelete({_id:req.params.id,userId:req.user.id});
  if(!item) return res.status(404).json({message:'Record not found'});
  res.json({message:'Deleted successfully'});
}catch(e){next(e);}};
