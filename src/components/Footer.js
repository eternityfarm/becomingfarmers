import React from "react";
import { Link } from "react-router-dom";


export default function Footer(){
return (
<footer className="border-t border-gray-100 bg-white">
<div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 grid md:grid-cols-3 gap-6">
<div>
<div className="text-lg font-bold text-brand-600">BecomingFarmer</div>
<p className="mt-2">도시 농부를 위한 교환·판매 커뮤니티 플랫폼</p>
</div>
<div className="space-y-2">
<div className="font-semibold text-gray-700">About</div>
<Link to="/about/overview" className="block hover:text-brand-600">기업개요</Link>
<Link to="/about/mission" className="block hover:text-brand-600">미션과 철학</Link>
</div>
<div className="space-y-2">
<div className="font-semibold text-gray-700">Market</div>
<Link to="/market/regions" className="block hover:text-brand-600">지역별</Link>
<Link to="/register" className="block hover:text-brand-600">등록하기</Link>
</div>
</div>
<div className="text-center text-xs text-gray-400 py-3 border-t">© 2025 Eternity8 Co., Ltd.</div>
</footer>
);
}
