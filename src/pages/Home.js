import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-10">
      <div className="card p-8 text-center bg-gradient-to-br from-white to-green-50">
        <h1 className="text-4xl font-extrabold text-brand-700">
          도시 농부를 위한 Farmer’s Market
        </h1>
        <p className="text-gray-600 mt-3">
          식물재배기 인증 재배자 중심의 안전한 교환·판매 플랫폼
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/market/regions" className="btn btn-primary">
            Farmer’s Market 가기
          </Link>
          <Link to="/register" className="btn btn-ghost">
            내 작물 등록하기
          </Link>
        </div>
      </div>
    </section>
  );
}
