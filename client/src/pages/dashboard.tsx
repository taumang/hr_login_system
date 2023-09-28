import React from 'react'
import Navbar from '../components/Navbar';
import FilterBox from '../components/filter';
import { Routes,Route } from 'react-router-dom';
import Dashboard1 from '../pages/dashboard';

export const dashboard = () => {
  return (
    <div>
        <Navbar/>
        <FilterBox/>
        <Routes>
            <Route path="/dashboard" element={<Dashboard1/>}/>
        </Routes>

        
     
    </div>
  )
}
