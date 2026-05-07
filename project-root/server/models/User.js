import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  username:{type:String,required:true,trim:true,minlength:2,maxlength:40},
  email:{type:String,required:true,unique:true,lowercase:true,trim:true},
  masterPassword:{type:String,required:true,minlength:8}
},{timestamps:true});
export default mongoose.model('User',schema);
