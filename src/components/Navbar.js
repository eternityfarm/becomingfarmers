import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


export default function Navbar() {
const navigate = useNavigate();
return (
<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="text-2xl font-extrabold text-brand-600">Becoming<span className="text-gray-900">Farmer</span></Link>
<nav className="hidden md:flex items-center gap-6 text-sm">
<div className="group relative">
<button className="text-gray-700 hover:text-brand-600">About us</button>
<div className="absolute left-0 mt-2 hidden group-hover:block card p-2 w-44">
<NavLink className={({isActive}) => `block px-3 py-2 rounded-lg hover:bg-gray-50 ${isActive? 'text-brand-600' : 'text-gray-700'}`} to="/about/overview">기업개요</NavLink>
<NavLink className={({isActive}) => `block px-3 py-2 rounded-lg hover:bg-gray-50 ${isActive? 'text-brand-600' : 'text-gray-700'}`} to="/about/mission">미션과 철학</NavLink>
</div>
</div>
<NavLink to="/market/regions" className={({isActive}) => isActive? 'text-brand-600' : 'text-gray-700 hover:text-brand-600'}>Farmer’s Market</NavLink>
<NavLink to="/register" className={({isActive}) => isActive? 'text-brand-600' : 'text-gray-700 hover:text-brand-600'}>등록하기</NavLink>
</nav>
<div className="flex items-center gap-2">
<button className="btn btn-ghost" onClick={()=>navigate('/login')}>로그인</button>
<button className="btn btn-primary" onClick={()=>navigate('/signup')}>회원가입</button>
</div>
</div>
</header>
);
}
