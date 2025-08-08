import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JSX } from 'react';
import PageQr from './pages/PageQr.tsx';
import BitikTranslate from './pages/BitikTranslate.tsx';
import HomePage from './pages/HomePage.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bitik" element={<BitikTranslate />} />
        <Route path="/qr/:id" element={<PageQr /> as JSX.Element} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
