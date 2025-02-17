import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";
import { Route,Routes } from "react-router-dom";
export default function MyRoute(){
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            
        </Routes>
    );
}