import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PageQr from "./pages/PageQr.tsx";
import {JSX} from "react";
import BitikTranslate from "./pages/BitikTranslate.tsx";
import {Button} from "@chakra-ui/react";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/qr/:id" element={<PageQr /> as JSX.Element} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/" element={
        <div>
          Welcome to the QR Code App
          <Navigate to={'/bitik'} replace>
            <Button title='Переводчик в Битик' />
          </Navigate>
        </div>} />
      <Route path="/bitik" element={<BitikTranslate />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;