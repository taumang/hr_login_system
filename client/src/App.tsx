import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/login';
import Register from './components/register';


function App() {
  
  return (
    <>

    <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>

    </>
  )
}

export default App
