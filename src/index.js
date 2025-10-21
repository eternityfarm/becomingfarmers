import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"; // Vercel 환경에서도 흰 화면 없이 안정적

// React 앱을 root 엘리먼트에 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


{/* About */}
<Route path="/about/overview" element={<Overview />} />
<Route path="/about/mission" element={<Mission />} />


{/* Market */}
<Route path="/market/regions" element={<RegionSelect />} />
<Route path="/market/category" element={<CategorySelect />} />
<Route path="/market/list" element={<ProductList />} />
<Route path="/market/detail/:id" element={<ProductDetail />} />


{/* Register */}
<Route path="/register" element={<RegisterForm />} />


{/* Auth */}
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />


{/* Redirects */}
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
<Footer />
</div>
);
}
