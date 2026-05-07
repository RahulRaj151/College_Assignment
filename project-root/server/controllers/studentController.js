import bcrypt from 'bcryptjs';
import Student from '../models/Student.js';
export const registerStudent=async(req,res,next)=>{try{
  const {name,registrationNumber,marks,address,email,password}=req.body;
  const hashed=await bcrypt.hash(password,10);
  const student=await Student.create({name,registrationNumber,marks,address,email,password:hashed});
  res.status(201).json({message:'Student registered',student:{...student.toObject(),password:undefined}});
}catch(e){next(e);}};

export const getAggregation=async(req,res,next)=>{try{
  const grouped=await Student.aggregate([
    {$group:{_id:{$switch:{branches:[{case:{$lte:['$marks',40]},then:'0-40'},{case:{$and:[{$gte:['$marks',41]},{$lte:['$marks',70]}]},then:'41-70'},{case:{$and:[{$gte:['$marks',71]},{$lte:['$marks',100]}]},then:'71-100'}],default:'other'}},count:{$sum:1}}},
    {$sort:{_id:1}}
  ]);
  const sorted=await Student.aggregate([{$sort:{marks:-1}},{$project:{_id:0,name:1,marks:1}}]);
  res.json({groupedCounts:grouped,sortedProjected:sorted});
}catch(e){next(e);}};
