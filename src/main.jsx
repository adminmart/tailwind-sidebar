import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Sidebar } from './components/Sidebar.jsx';
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { Submenu } from './components/Submenu';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


export { Sidebar };
export { Logo };
export { Menu };
export { MenuItem };
export { Submenu };