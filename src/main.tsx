import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App/App.tsx'
import "modern-normalize/modern-normalize.css";
import './index.css'

const container = document.querySelector('#root');
if (!container) {
    throw new Error('Root container not found');
}
const root = createRoot(container);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
