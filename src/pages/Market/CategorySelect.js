import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const categories = [
{ key: 'leaf', name: '엽채류', emoji: '🥬' },
{ key: 'herb', name: '허브', emoji: '🌿' },
{ key: 'fruit', name: '과채류', emoji: '🍅' },
];


export default function CategorySelect(){
const { state } = useLocation();
const navigate = useNavigate();
const region = state?.region ?? '지역 미선택';


return (
<div>
<div className="mb-4 text-sm text-gray-500">선택 지역: <span className="badge">{region}</span></div>
<div className="grid md:grid-cols-3 gap-6">
{categories.map(c => (
<div key={c.key} className="card p-6 text-center hover:shadow-lg cursor-pointer"
onClick={()=>navigate('/market/list', { state: { region, category: c.name } })}>
<div className="text-5xl mb-3">{c.emoji}</div>
<div className="font-semibold">{c.name}</div>
</div>
))}
</div>
</div>
);
}
