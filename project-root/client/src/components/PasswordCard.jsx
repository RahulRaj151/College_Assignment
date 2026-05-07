import { useState } from 'react';
export default function PasswordCard({item,onDelete}){const [show,setShow]=useState(false);return <div className='glass p-4 hover:-translate-y-1 transition'>
<h3 className='font-semibold'>{item.website}</h3><p className='text-slate-300'>User: {item.username}</p><p className='text-slate-300 break-all'>Password: {show?item.password:'••••••••••'}</p>
<div className='flex gap-2 mt-3'>
<button className='btn-secondary' onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
<button className='btn-primary' onClick={()=>navigator.clipboard.writeText(item.password)}>Copy</button>
<button className='btn-danger' onClick={onDelete}>Delete</button>
</div></div>}
