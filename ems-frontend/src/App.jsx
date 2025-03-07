import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
  return (
     // This is a fragment tag
    <> 
    <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element = {<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/add-employee*/}
          <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
          {/* // http://localhost:3000/edit-employee/1*/}
          <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
        </Routes>
        
        <FooterComponent /> 
    </BrowserRouter>
    </>
  )
}
export default App
