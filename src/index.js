// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Подключение стилей Tailwind CSS
import App from "./App"; // Убедитесь, что путь верный и компонент экспортирован правильно

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
