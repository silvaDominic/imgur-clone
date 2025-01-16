import { createRoot } from 'react-dom/client'
import { App } from "@/presentation/app";
import { AlbumPage } from "@/presentation/pages/album/album.page";
import { BrowserRouter, Route, Routes } from "react-router";

import './normalize.css';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/album/:id' element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error('Root element not found');
}
