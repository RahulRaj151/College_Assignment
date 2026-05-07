import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name:{type:String,required:true,trim:true},
  registrationNumber:{type:String,required:true,trim:true,unique:true},
  marks:{type:Number,required:true,min:0,max:100},
  address:{type:String,required:true,trim:true},
  email:{type:String,required:true,trim:true,lowercase:true},
  password:{type:String,required:true}
},{timestamps:true});
export default mongoose.model('Student',schema);
