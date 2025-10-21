import React from "react";


export default function Signup(){
return (
<div className="max-w-md mx-auto card p-6">
<h2 className="text-2xl font-bold mb-4">회원가입</h2>
<input className="input mb-3" placeholder="이메일"/>
<input className="input mb-3" placeholder="비밀번호" type="password"/>
<input className="input mb-4" placeholder="비밀번호 확인" type="password"/>
<button className="btn btn-primary w-full">계정 만들기</button>
</div>
);
}
