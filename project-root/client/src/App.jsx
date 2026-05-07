import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddPassword from './pages/AddPassword';
import ViewPasswords from './pages/ViewPasswords';
import UserRegistrationForm from './pages/UserRegistrationForm';

export default function App() {
  return <><Navbar /><Routes>
    <Route path='/' element={<Navigate to='/login' />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/add-password' element={<AddPassword />} />
    <Route path='/view-passwords' element={<ViewPasswords />} />
    <Route path='/student-form' element={<UserRegistrationForm />} />
  </Routes></>;
}
