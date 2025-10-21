import React, { useState } from "react";

export default function App() {
  const [userType, setUserType] = useState(null);
  const [sellerInfo, setSellerInfo] = useState(null);
  const [tradeOption, setTradeOption] = useState(null);

  const Button = ({ label, onClick, color }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200 ${color}`}
    >
      {label}
    </button>
  );

  if (!userType) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-green-50">
        <h1 className="text-5xl font-extrabold mb-6 text-emerald-600">
          🌿 Becoming Farmer
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          먼저 재배자 유형을 선택해주세요
        </p>
        <div className="flex gap-6">
          <Button
            label="🏡 식물재배기 사용자"
            color="bg-emerald-500 hover:bg-emerald-600"
            onClick={() => setUserType("home")}
          />
          <Button
            label="👨‍🌾 전문 농부"
            color="bg-amber-500 hover:bg-amber-600"
            onClick={() => setUserType("pro")}
          />
        </div>
        <p className="mt-6 text-sm text-gray-400">
          인증된 사용자만 판매자로 등록할 수 있습니다.
        </p>
      </div>
    );
  }

  if (!sellerInfo) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="bg-white shadow-xl rounded-3xl p-8 w-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            ✅ 셀러 등록
          </h2>
          <input
            id="crop"
            placeholder="작물명 (예: 바질)"
            className="border w-full mb-3 rounded-xl p-3 focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            id="desc"
            placeholder="재배 과정 설명"
            className="border w-full mb-4 rounded-xl p-3 focus:ring-2 focus:ring-emerald-400"
            rows={4}
          ></textarea>
          <input type="file" multiple className="mb-4" />
          <Button
            label="등록하기"
            color="bg-emerald-500 hover:bg-emerald-600 w-full"
            onClick={() =>
              setSellerInfo({
                crop: document.getElementById("crop").value,
                desc: document.getElementById("desc").value,
              })
            }
          />
        </div>
      </div>
    );
  }

  if (!tradeOption) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 to-white">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-[400px] text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-600">
            🌱 {sellerInfo.crop}
          </h2>
          <p className="text-gray-500 mb-8">{sellerInfo.desc}</p>
          <div className="flex gap-4">
            <Button
              label="🤝 교환"
              color="bg-emerald-400 hover:bg-emerald-500 flex-1"
              onClick={() => setTradeOption("exchange")}
            />
            <Button
              label="💰 판매"
              color="bg-orange-400 hover:bg-orange-500 flex-1"
              onClick={() => setTradeOption("sell")}
            />
          </div>
        </div>
      </div>
    );
  }

  if (tradeOption === "exchange") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <div className="bg-white shadow-lg rounded-3xl p-8 w-[400px]">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">🤝 교환 등록</h2>
          <input
            placeholder="교환 희망 작물"
            className="border w-full mb-3 rounded-xl p-3"
          />
          <input
            placeholder="교환 수량"
            className="border w-full mb-6 rounded-xl p-3"
          />
          <Button
            label="등록 완료"
            color="bg-emerald-500 hover:bg-emerald-600 w-full"
            onClick={() => alert("교환 등록 완료!")}
          />
        </div>
      </div>
    );
  }

  if (tradeOption === "sell") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-amber-50">
        <div className="bg-white shadow-lg rounded-3xl p-8 w-[400px]">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">💰 판매 등록</h2>
          <input
            placeholder="판매 희망가 (원)"
            className="border w-full mb-6 rounded-xl p-3"
          />
          <Button
            label="판매 등록 완료"
            color="bg-orange-500 hover:bg-orange-600 w-full"
            onClick={() => alert("판매 등록 완료!")}
          />
        </div>
      </div>
    );
  }
}
