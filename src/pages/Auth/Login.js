import React from "react";


export default function Login(){
return (
<div className="max-w-md mx-auto card p-6">
<h2 className="text-2xl font-bold mb-4">로그인</h2>
<input className="input mb-3" placeholder="이메일"/>
<input className="input mb-4" placeholder="비밀번호" type="password"/>
<button className="btn btn-primary w-full">로그인</button>
</div>
);
}
