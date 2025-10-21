import React, { useState } from "react";


export default function RegisterForm(){
const [mode, setMode] = useState('sell'); // 'exchange' | 'sell'


return (
<div className="card p-6 max-w-2xl mx-auto">
<h2 className="text-2xl font-bold mb-4">등록하기</h2>


<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="text-sm text-gray-600">카테고리</label>
<select className="input mt-1">
<option>엽채류</option>
<option>허브</option>
<option>과채류</option>
</select>
</div>
<div>
<label className="text-sm text-gray-600">상세 경작물명</label>
<input className="input mt-1" placeholder="예: 바질"/>
</div>
<div>
<label className="text-sm text-gray-600">수확일자</label>
<input type="date" className="input mt-1" />
</div>
<div>
<label className="text-sm text-gray-600">거래양</label>
<input className="input mt-1" placeholder="예: 200g 또는 10개"/>
</div>
</div>


<div className="mt-4">
<label className="text-sm text-gray-600">경작물 사진 (최대 6장)</label>
<input type="file" accept="image/*" multiple className="mt-1" />
</div>


<div className="mt-6 flex gap-3">
<button onClick={()=>setMode('exchange')} className={`btn ${mode==='exchange'?'btn-primary':'btn-ghost'}`}>교환</button>
<button onClick={()=>setMode('sell')} className={`btn ${mode==='sell'?'btn-primary':'btn-ghost'}`}>판매</button>
</div>


{mode==='exchange' ? (
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div>
<label className="text-sm text-gray-600">교환 희망 작물명</label>
<input className="input mt-1" placeholder="예: 상추"/>
</div>
<div>
<label className="text-sm text-gray-600">희망 중량</label>
<input className="input mt-1" placeholder="예: 300g"/>
</div>
</div>
) : (
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div>
<label className="text-sm text-gray-600">중량별 단가</label>
<input className="input mt-1" placeholder="예: 100g 당 2,000원"/>
</div>
<div>
<label className="text-sm text-gray-600">개수별 단가</label>
<input className="input mt-1" placeholder="예: 1개 500원"/>
</div>
</div>
)}


<div className="mt-6 flex justify-end gap-2">
<button className="btn btn-ghost">임시저장</button>
<button className="btn btn-primary">등록 완료</button>
</div>
</div>
);
}
