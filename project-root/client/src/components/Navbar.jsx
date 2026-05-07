import { Link } from 'react-router-dom';
export default function Navbar() {
  return <nav className='navbar'><h2>🔐 Password Manager</h2><div>
    <Link to='/register'>Register</Link><Link to='/login'>Login</Link><Link to='/dashboard'>Dashboard</Link><Link to='/student-form'>Student Form</Link>
  </div></nav>;
}
