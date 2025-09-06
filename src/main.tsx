import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import { Logo } from './components/Logo.tsx'
import { MenuItem } from './components/MenuItem.tsx'
import { MenuLabel } from './components/MenuLabel.tsx'
import { Submenu } from './components/Submenu.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


export { Sidebar };
export { Logo };
export { MenuItem };
export { MenuLabel };
export { Submenu };