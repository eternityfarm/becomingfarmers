import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


export default function ProductDetail(){
const { state } = useLocation();
const navigate = useNavigate();
const { id } = useParams();
const item = state?.item ?? {
id,
name: "바질",
weight: "100g",
date: "2025-10-20",
price: 3500,
type: "판매",
image: `https://picsum.photos/seed/detail${id}/800/500`,
desc: "집에서 식물재배기로 키운 바질입니다. 무농약, 매일 수경 재배로 신선합니다.",
};


return (
<article className="grid md:grid-cols-2 gap-6">
<div className="card overflow-hidden">
<img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
</div>
<div className="card p-6">
<h2 className="text-2xl font-bold">{item.name}</h2>
<div className="mt-2 text-sm text-gray-500">업로드: {item.date}</div>
<div className="mt-2"><span className="badge">{item.weight}</span></div>
<div className="mt-4 text-2xl font-extrabold">{item.price.toLocaleString()}원</div>
<div className="mt-4 flex gap-2">
<button className="btn btn-ghost">{item.type}하기</button>
<button className="btn btn-ghost">장바구니</button>
<button className="btn btn-orange">바로구매</button>
</div>
<p className="mt-6 text-gray-700 leading-7">{item.desc}</p>
<button onClick={()=>navigate(-1)} className="mt-6 btn btn-ghost">목록으로</button>
</div>
</article>
);
}
