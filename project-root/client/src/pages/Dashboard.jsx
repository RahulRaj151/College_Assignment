import { Link } from 'react-router-dom';import { useMemo, useState } from 'react';
export default function Dashboard(){const [dark,setDark]=useState(true);const user=useMemo(()=>JSON.parse(localStorage.getItem('auth')||'{}'),[]);
return <div className={`card ${dark?'':'light'}`}><h3>Welcome {user.username||'User'}</h3><button onClick={()=>setDark(!dark)}>Toggle {dark?'Light':'Dark'} Mode</button><div className='grid'><Link to='/add-password'>Add Password</Link><Link to='/view-passwords'>View Passwords</Link></div></div>}
