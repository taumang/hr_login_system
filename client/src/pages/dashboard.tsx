import React from 'react'
import Navbar from '../components/Navbar';
import { Routes,Route } from 'react-router-dom';
import {DashboardLink} from '../pages/dashboard_link';
import FilterBox from '../components/filter';

export const dashboard = () => {
  return (
    <div>
        <Navbar/>
          <Routes>
            <Route path="/dashboard" element={<DashboardLink/>}/>
            <Route path="/filter" element={<FilterBox/>}/>
          </Routes>
          <DashboardLink/>

    </div>
  )
}
