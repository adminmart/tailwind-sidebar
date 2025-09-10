import { BrowserRouter, Link } from "react-router-dom";
import { AMMenu } from "./components/Menu";
import { AMSidebar } from "./components/Sidebar";
import { AMMenuItem } from "./components/MenuItem";
import { AMSubmenu } from "./components/Submenu";
import { AMLogo } from "./components/Logo";
import {
  Home,
  ShoppingCart,
  BarChart2,
  Calendar,
  MessageCircle,
  ShieldBan,
  Command,
  Layers2,
} from "lucide-react";

function App() {
  return (
    <>
      <BrowserRouter>
        <AMSidebar isCollapse={false}>
          <AMLogo
            img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
            component={Link}
            href="/"
          >
            Adminmart
          </AMLogo>

          <AMMenu subHeading="HOME" />

          <AMMenuItem
            icon={<Home size={20} />}
            link="/"
            badge={true}
            badgeType="default"
            badgeColor={"bg-secondary"}
            isSelected={true}

          >
            Modern
          </AMMenuItem>

          <AMMenuItem icon={<ShoppingCart size={20} />} link="#">
            eCommerce
          </AMMenuItem>

          <AMMenuItem icon={<BarChart2 size={20} />} link="#">
            Analytical
          </AMMenuItem>

          <AMMenu subHeading="APPS" />

          <AMMenuItem icon={<MessageCircle size={20} />} link="#">
            Chat
          </AMMenuItem>

          <AMMenuItem icon={<Calendar size={20} />} link="#">
            Calendar
          </AMMenuItem>

          <AMMenu subHeading="OTHER" />

          <AMSubmenu title="Menu Level" icon={<Command size={20} />}>
            <AMMenuItem>Level 1.1</AMMenuItem>
            <AMMenuItem>Level 1.2</AMMenuItem>

            <AMSubmenu title="Level 2" icon={<Command size={20} />}>
              <AMMenuItem>Level 2.1</AMMenuItem>
              <AMMenuItem>Level 2.2</AMMenuItem>
            </AMSubmenu>
          </AMSubmenu>

          <AMMenuItem
            badge={true}
            badgeContent={"outline"}
            badgeType="outline"
            icon={<Layers2 size={20} />}
          >
            Outline
          </AMMenuItem>

          <AMMenuItem disabled={true} icon={<ShieldBan size={20} />}>
            Disabled
          </AMMenuItem>
        </AMSidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
