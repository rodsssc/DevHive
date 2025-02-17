import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {



const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
        const response = await axios.post("/login", {
        email,
        password,
        });

        // Store token and redirect
        localStorage.setItem("token", response.data.token);
        navigate("/home"); // Redirect to protected route
        } // Login.jsx
        catch (err) {
          const errorMessage = err.response?.data?.message || "Login failed";
          setError(errorMessage);
        }

      
return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
            {/* Email and Password fields (keep your existing JSX) */}
            {/* ... */}
        </form>
    </div>
</div>
);
}


return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>
        <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                </label>
                <input type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter your email"
                />
            </div>

            {/* Password Field */}
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                    Password
                </label>
                <input type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter your password"
                />
            </div>

            {/* Submit Button */}
            <button type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white">
                Login
            </button>

            {/* Register Link */}
            <p className="mt-4 text-center text-sm text-white">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                    Register here
                </a>
            </p>
        </form>
    </div>
</div>
);
}
