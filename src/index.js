import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Pages
import Home from "./pages/Home";
import Overview from "./pages/About/Overview";
import Mission from "./pages/About/Mission";
import RegionSelect from "./pages/Market/RegionSelect";
import CategorySelect from "./pages/Market/CategorySelect";
import ProductList from "./pages/Market/ProductList";
import ProductDetail from "./pages/Market/ProductDetail";
import RegisterForm from "./pages/Register/RegisterForm";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-green-50">
<Navbar />
<main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
<Routes>
<Route path="/" element={<Home />} />


{/* About */}
<Route path="/about/overview" element={<Overview />} />
<Route path="/about/mission" element={<Mission />} />


{/* Market */}
<Route path="/market/regions" element={<RegionSelect />} />
<Route path="/market/category" element={<CategorySelect />} />
<Route path="/market/list" element={<ProductList />} />
<Route path="/market/detail/:id" element={<ProductDetail />} />


{/* Register */}
<Route path="/register" element={<RegisterForm />} />


{/* Auth */}
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />


{/* Redirects */}
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
<Footer />
</div>
);
}
