import React from "react";
import { useNavigate } from "react-router-dom";


export default function RegionSelect(){
const navigate = useNavigate();
const go = (region) => navigate('/market/category', { state: { region } });


return (
<div className="grid md:grid-cols-2 gap-6">
<div className="card p-6 hover:shadow-lg cursor-pointer" onClick={()=>go('서울')}>
<div className="text-lg font-bold mb-2">서울</div>
<p className="text-gray-600">지도를 클릭하여 구를 선택하는 UI는 추후 SVG 맵으로 교체합니다.</p>
<div className="badge mt-3">모의 지도</div>
</div>
<div className="card p-6 hover:shadow-lg cursor-pointer" onClick={()=>go('경기도')}>
<div className="text-lg font-bold mb-2">경기도</div>
<p className="text-gray-600">지도를 클릭하여 시/군/구를 선택하는 UI는 추후 SVG 맵으로 교체합니다.</p>
<div className="badge mt-3">모의 지도</div>
</div>
</div>
);
}
