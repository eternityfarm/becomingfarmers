import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-green-50">
        {/* 상단 메뉴 */}
        <Navbar />

        {/* 본문 */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About us */}
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/about/mission" element={<Mission />} />

            {/* Farmer’s Market */}
            <Route path="/market/regions" element={<RegionSelect />} />
            <Route path="/market/categories" element={<CategorySelect />} />
            <Route path="/market/products" element={<ProductList />} />
            <Route path="/market/products/:id" element={<ProductDetail />} />

            {/* 등록 */}
            <Route path="/register" element={<RegisterForm />} />

            {/* 로그인/회원가입 */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* 하단 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
