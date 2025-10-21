import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


// 더미 데이터 (15개 채우기)
const mock = Array.from({length: 15}).map((_,i)=>({
id: i+1,
name: ["바질","방울토마토","로메인","적상추"][i%4],
weight: ["100g","200g","300g"][i%3],
date: "2025-10-20",
price: (3000 + (i%5)*1000),
image: `https://picsum.photos/seed/farm${i}/400/300`,
type: (i%2===0? '판매':'교환'),
}));


export default function ProductList(){
const { state } = useLocation();
const navigate = useNavigate();
const region = state?.region ?? '서울';
const category = state?.category ?? '엽채류';


return (
<section>
<div className="mb-4 text-sm text-gray-500">{region} · {category}</div>
<div className="grid md:grid-cols-3 gap-6">
{mock.map(item => (
<article key={item.id} className="card overflow-hidden hover:shadow-lg">
<img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold">{item.name}</h3>
<span className="badge">{item.weight}</span>
</div>
<div className="text-xs text-gray-500 mt-1">업로드: {item.date}</div>
<div className="mt-3 flex items-center gap-2">
<button className="btn btn-ghost">{item.type}하기</button>
<button className="btn btn-ghost">장바구니</button>
<button className="btn btn-orange">바로구매</button>
</div>
<button onClick={()=>navigate(`/market/detail/${item.id}`, { state: { item } })}
className="mt-3 w-full btn btn-primary">상세보기</button>
</div>
</article>
))}
</div>


{/* 간단한 페이지네이션 UI (더미) */}
<div className="mt-8 flex justify-center gap-2">
{[1,2,3,4].map(p=> (
<button key={p} className={`btn ${p===1? 'btn-primary' : 'btn-ghost'}`}>{p}</button>
))}
</div>
</section>
);
}
