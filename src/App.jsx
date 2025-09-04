import React from 'react';
import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import './index.css'

import { Logo } from './components/Logo'

import { BrowserRouter, Link } from "react-router-dom";
import {

  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Home, ShoppingCart, BarChart2, Calendar, MessageCircle } from "lucide-react";
import { MenuLabel } from './components/MenuLabel'
import { Sidebar } from "./components/Sidebar";
import { MenuItem } from './components//MenuItem'
import { Submenu } from './components/Submenu'
function App() {




  return (

    <BrowserRouter>
      <SidebarProvider>

        <main>
          <SidebarTrigger />
          <Sidebar isCollapse={false}>
            <SidebarHeader className="flex items-center justify-center">
              <Logo img="https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg" component={Link} href="https://github.com/adminmart/tailwind-sidebar/blob/main/src/App.jsx" />
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>

                <MenuLabel subHeading="HOME" />

                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>

                        <MenuItem
                          icon={<Home size={18} />}
                          link="/"
                          badge
                          badgeContent="3"
                          badgeColor="bg-red-500"
                          isSelected={true}
                        >
                          Modern
                        </MenuItem>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>

                        <MenuItem
                          icon={<ShoppingCart size={18} />}
                          link="/"
                          badge
                          badgeContent="3"
                          badgeColor="bg-red-500"
                          isSelected={false}
                        >
                          eCommerce
                        </MenuItem>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>

                        <MenuItem
                          icon={<BarChart2 size={18} />}
                          link="/"
                          badge
                          badgeContent="3"
                          badgeColor="bg-red-500"
                          isSelected={false}
                        >
                          Analytical
                        </MenuItem>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>

                <MenuLabel subHeading="APPS" />


                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MessageCircle size={18} />
                        Chat
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Calendar size={18} />
                        Calendar
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <MenuLabel subHeading="Others" />
              <SidebarGroupContent>
                <SidebarMenu>
                  <Submenu title="Menu Level" borderRadius="200px">
                    <MenuItem>Post</MenuItem>
                    <MenuItem>Details</MenuItem>

                    <Submenu title="Level 2">
                      <MenuItem link="/new">New</MenuItem>
                      <MenuItem link="/hello">Hello</MenuItem>
                    </Submenu>
                  </Submenu>


                </SidebarMenu>
              </SidebarGroupContent>


            </SidebarContent>
          </Sidebar>
        </main>
      </SidebarProvider >

    </BrowserRouter >

  )
}

export default App



