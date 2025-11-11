import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'; 

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* O componente App.jsx é o container de todos os outros componentes */}
        <App />
    </StrictMode>
);