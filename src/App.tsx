import { BrowserRouter, Link } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
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
  Command, GalleryVertical
} from "lucide-react";

function App() {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>

          <SidebarTrigger />
          <Sidebar mode="dark">
            <Logo
              img="https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg"
              component={Link}
              href="https://tailwind-admin.com"
            >TailwindAdmin</Logo>
            <SidebarContent>
              <SidebarGroup>

                <Menu subHeading="HOME" />
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem
                        icon={<Home size={20} />}
                        link="/"
                        badge={true}
                        badgeColor={"bg-secondary"}
                        isSelected={true}
                      >
                        Modern
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem icon={<ShoppingCart size={20} />} link="#">
                        eCommerce
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem icon={<BarChart2 size={20} />} link="#">
                        Analytical
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                </SidebarMenu>
              </SidebarGroup>

              <SidebarGroup>
                <Menu subHeading="APPS" />

                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem icon={<MessageCircle size={20} />} link="#">
                        Chat
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>


                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem icon={<Calendar size={20} />} link="#">
                        Calendar
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>


                </SidebarMenu>
              </SidebarGroup>


              <SidebarGroup>

                <Menu subHeading="OTHER" />
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Submenu title="Menu Level" icon={<Command size={20} />}>
                        <MenuItem>Level 1.1</MenuItem>
                        <MenuItem>Level 1.2</MenuItem>

                        <Submenu title="Level 2" icon={<Command size={20} />}>
                          <MenuItem>Level 2.1</MenuItem>
                          <MenuItem>Level 2.2</MenuItem>
                        </Submenu>
                      </Submenu>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem badge={true} badgeTextColor="text-primary" badgeContent={"outline"} badgeType={"outlined"} icon={<GalleryVertical size={20} />}>
                        Outline
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <MenuItem disabled={true} icon={<ShieldBan size={20} />}>
                        Disabled
                      </MenuItem>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

        </SidebarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
