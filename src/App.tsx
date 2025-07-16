import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageQr from "./pages/PageQr.tsx";
import {JSX} from "react";
import BitikTranslate from "./pages/BitikTranslate.tsx";

function App() {
  console.log('App component loaded');
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/qr/:id" element={<PageQr /> as JSX.Element} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/" element={<div>Welcome to the QR Code App</div>} />
      <Route path="/bitik" element={<BitikTranslate />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;