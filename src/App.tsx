import { BrowserRouter, Link } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";
import { MenuItem } from "./components/MenuItem";
import { Submenu } from "./components/Submenu";
import { Logo } from "./components/Logo";
import {
  Home,
  ShoppingCart,
  BarChart2,
  Calendar,
  MessageCircle,
  ShieldBan,
} from "lucide-react";

function App() {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>

          <SidebarTrigger />
          <Sidebar isCollapse={false} mode="light">
            <Logo
              img="https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg"
              component={Link}
              href="https://github.com/adminmart/tailwind-sidebar/blob/main/src/App.jsx"
            />
            <SidebarContent>
              <SidebarGroup>
                <Menu subHeading="HOME" />
                <MenuItem
                  icon={<Home size={20} />}
                  component={Link}
                  link="https://tailwindadmin-nextjs-main.vercel.app/"
                  badge={true}
                  badgeColor={"bg-secondary"}
                  isSelected={true}
                >
                  Modern
                </MenuItem>

                <MenuItem icon={<ShoppingCart size={20} />} link="/">
                  eCommerce
                </MenuItem>

                <MenuItem icon={<BarChart2 size={20} />} link="/">
                  Analytical
                </MenuItem>
              </SidebarGroup>
              <SidebarGroup>
                <Menu subHeading="APPS" />
                <MenuItem icon={<MessageCircle size={20} />} link="/">
                  Chat
                </MenuItem>
                <MenuItem icon={<Calendar size={20} />} link="/">
                  Calendar
                </MenuItem>
              </SidebarGroup>
              <SidebarGroup>
                <Menu subHeading="Others" />
                <Submenu title="Menu Level">
                  <MenuItem>Level 1.1</MenuItem>
                  <MenuItem>Level 1.2</MenuItem>

                  <Submenu title="Level 2">
                    <MenuItem>Level 2.1</MenuItem>
                    <MenuItem>Level 2.2</MenuItem>
                  </Submenu>
                </Submenu>
                <MenuItem disabled={true} icon={<ShieldBan size={20} />}>
                  Disabled
                </MenuItem>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

        </SidebarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
