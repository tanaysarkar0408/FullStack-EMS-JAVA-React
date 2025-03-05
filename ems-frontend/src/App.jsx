import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
     // This is a fragment tag
    <> 
    <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element = {<ListEmployeeComponent />}></Route>
          <Route path='/employees' element = {<ListEmployeeComponent />}></Route>

        </Routes>
        
        <FooterComponent /> 
    </BrowserRouter>
    </>
  )
}
export default App
