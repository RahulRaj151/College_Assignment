import { useEffect, useState } from 'react';import api from '../services/api';
export default function ViewPasswords(){const auth=JSON.parse(localStorage.getItem('auth')||'{}');const [data,setData]=useState([]);const [q,setQ]=useState('');
useEffect(()=>{api.get(`/password/view/${auth.userId}`).then(r=>setData(r.data.passwords||[]));},[]);
const filtered=data.filter(x=>x.website.toLowerCase().includes(q.toLowerCase()));
return <div className='card'><h3>Saved Passwords</h3><input placeholder='Search website' value={q} onChange={e=>setQ(e.target.value)}/><div>{filtered.map(item=><div className='item' key={item._id}><b>{item.website}</b> | {item.username} <button onClick={()=>navigator.clipboard.writeText(item.password)}>Copy Password</button></div>)}</div></div>}
