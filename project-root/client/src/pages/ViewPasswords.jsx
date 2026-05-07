import { useEffect, useState } from 'react';import Navbar from '../components/Navbar';import Sidebar from '../components/Sidebar';import PasswordCard from '../components/PasswordCard';import api from '../services/api';
export default function ViewPasswords(){const [data,setData]=useState([]);const [q,setQ]=useState('');
const load=()=>api.get('/passwords').then(r=>setData(r.data.passwords));
useEffect(()=>{load();},[]);
const filtered=data.filter(x=>x.website.toLowerCase().includes(q.toLowerCase())||x.username.toLowerCase().includes(q.toLowerCase()));
return <main className='p-4 md:p-8'><Navbar/><div className='grid md:grid-cols-[220px_1fr] gap-4'><Sidebar/><section className='space-y-3'><input className='input' placeholder='Search by website or username...' value={q} onChange={e=>setQ(e.target.value)}/><div className='grid md:grid-cols-2 gap-3'>{filtered.map(item=><PasswordCard key={item._id} item={item} onDelete={async()=>{await api.delete(`/passwords/${item._id}`);load();}}/>)}</div></section></div></main>}
