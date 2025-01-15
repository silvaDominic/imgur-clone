import { createRoot } from 'react-dom/client'

import './normalize.css';
import './index.css';
import { App } from "@/presentation/app";

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <App/>
  );
} else {
  console.error('Root element not found');
}
