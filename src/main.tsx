import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'

const container = document.querySelector('#root');

if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
