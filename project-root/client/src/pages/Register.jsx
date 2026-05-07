import { useState } from 'react';import api from '../services/api';
export default function Register(){const [form,setForm]=useState({username:'',email:'',masterPassword:''});const[msg,setMsg]=useState('');
const submit=async(e)=>{e.preventDefault();try{const r=await api.post('/register',form);setMsg(r.data.message);}catch(err){setMsg(err.response?.data?.message||'Error');}};
return <form className='card' onSubmit={submit}><h3>Register</h3>{['username','email','masterPassword'].map(f=><input key={f} type={f.includes('Password')?'password':'text'} placeholder={f} value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})} required/>) }<button>Register</button><p>{msg}</p></form>}
