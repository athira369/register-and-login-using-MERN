import { useState } from 'react'
import SignUp from './components/SignUp'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'

import  Class from "./pages/admin/Class";
import Student from './pages/admin/Student'




import AdminDashboard from './pages/admin/AdminDashboard'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} ></Route>
      <Route path='/register' element={<SignUp/>}> </Route>
      <Route path='/login' element={<Login/>}></Route>




      <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
      <Route path='/admin/class' element={<Class/>}></Route>
      <Route path='/admin/student' element={<Student/>}></Route>
   </Routes>
    </Router>
  )
}

export default App
