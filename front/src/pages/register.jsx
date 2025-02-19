import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
export default function Register() {
    const[name , setName] = useState("");
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("");
    const[confirmPassword , setConfirmPassword] = useState("")
    const [error , setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async(e) =>{
      e.preventDefault();
      if(password !== confirmPassword){
        setError("Passwords do not match");
      }

      try {
          const response = axios.post('http://localhost:8000/api/register', { name, email, password });


          localStorage.setItem('token' , (await response).data.token);
          navigate('/home');
      } catch (error) {
        const errorMessage =  error.response?.data?.message || "Register failed!"
        setError(errorMessage);
        console.log(error)
      }
    }






    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg  shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">Register</h1>
          <form onSubmit={handleRegister}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter your password text-white"
              />
            </div>
  
            {/* Confirm Password Field */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Confirm your password"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
  
            {/* Login Link */}
            <p className="mt-4 text-center text-sm text-white">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }