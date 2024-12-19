import { useState, } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate()
    const handleSubmit= (e) =>
    {
        e.preventDefault()
        axios.post("http://localhost:5000/register",{name,email,password})
        .then(result=>{console.log(result)
        navigate("/login")
    })
        .catch((err=>console.log(err)))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
      <div className="bg-white p-3 rounded w-50">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            SignUp
          </button>
          <p>Already have an account </p>
          <Link to ="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            LOGIN
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
