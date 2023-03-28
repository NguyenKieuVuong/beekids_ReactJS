import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "@icon/icofont/icofont.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contests from "./pages/Contests";
import Beexu from "./pages/Beexu";
import Cart from "./pages/Cart";
import AmbassadorList from "./pages/Ambassadors";
import FAQs from "./pages/FAQs";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cuoc-thi" element={<Contests />} />
          <Route path="khoa-hoc" element={<Courses />} />
          <Route path="goi-beexu" element={<Beexu />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="gio-hang" element={<Cart />} />
          <Route path="dai-su" element={<AmbassadorList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
