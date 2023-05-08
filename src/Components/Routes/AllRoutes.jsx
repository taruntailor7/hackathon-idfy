import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Dashboard } from '../../Pages/Dashboard/Dashboard';
import { Home } from '../../Pages/Home/Home';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  )
}
