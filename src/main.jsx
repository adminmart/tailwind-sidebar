
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Sidebar } from './components/Sidebar.jsx';
import { Logo } from './components/Logo.jsx';
import { MenuLabel } from './components/MenuLabel.jsx';
import { MenuItem } from './components/MenuItem'
import { Submenu } from './components/Submenu.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)


export { Sidebar };
export { Logo };
export { MenuItem };
export { MenuLabel };
export { Submenu };