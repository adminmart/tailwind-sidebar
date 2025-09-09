## React Tailwind Sidebar

React Tailwind Sidebar helps to create side Navigation.

# Live Demo

[Demo](https://tailwind-sidebar.vercel.app)

## Authors

- [@adminmart](https://adminmart.com)

## Screenshots

![App Screenshot](https://adminmart.com/wp-content/uploads/2024/03/mui-sidebar-demo-image.jpg)

#

## Installation

To install react tailwind sidebar npm package

```bash
  npm i tailwind-sidebar
```

## Issues

For any Issues, create new issue on https://github.com/adminmart/tailwind-sidebar/issues

## Usage/Examples

```javascript
import React from "react";

import
{ Sidebar, Menu, MenuItem, Submenu, Logo
SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton,
SidebarMenuItem, SidebarProvider, SidebarTrigger
} from "tailwind-sidebar";
import {
  Home,
  ShoppingCart,
  BarChart2,
  Calendar,
  MessageCircle,
  ShieldBan,
  Command, Layers2
} from "lucide-react";

{
  /* if you are using react then import link from  */
}
import { Link } from "react-router-dom";
{
  /* if you are using nextjs then import link from  */
}
import Link from "next/link";

const App = () => {
  return (
     <SidebarProvider>
     <SidebarTrigger />
     <Sidebar width={"270px"}>
      <Logo
        component={Link}
        href="/"
        img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
      >
        AdminMart
      </Logo>
      <SidebarContent>

        <SidebarGroup>
        <Menu subHeading="HOME">
         <SidebarMenu>
         <SidebarMenuItem>
         <SidebarMenuButton asChild>
         <MenuItem
          icon={<Home size={20} />}
          component={Link}
          link="/tes"
          badge={true}
          isSelected={true}
          badgeColor={"bg-secondary"}
        >
          {" "}
          {/* Set badge to boolean true */}
          Modern
        </MenuItem>
        </SidebarMenuButton>
        </SidebarMenuItem>

       <SidebarMenuItem>
       <SidebarMenuButton asChild>
        <MenuItem icon={<ShoppingCart size={20} />/>} component={Link}link="/test">
          eCommerce
        </MenuItem>
        </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
        <SidebarMenuButton asChild>
        <MenuItem component={Link} link="/ana">
          Analytical
        </MenuItem>
         </SidebarMenuButton>
         </SidebarMenuItem>
        </SidebarMenu>
      </Menu>
      </SidebarGroup>

      <SidebarGroup>
      <Menu subHeading="APPS">
       <SidebarMenu>

       <SidebarMenuItem>
        <SidebarMenuButton asChild>
         <MenuItem icon={<MessageCircle size={20} />}>Chat</MenuItem>
        </SidebarMenuButton>
        </SidebarMenuItem>


        <SidebarMenuItem>
        <SidebarMenuButton asChild>
         <MenuItem icon={<Calendar size={20} />}>Calendar</MenuItem>
        </SidebarMenuButton>
        </SidebarMenuItem>
        </SidebarMenu>
       </Menu>
      </SidebarGroup>

     <SidebarGroup>
      <Menu subHeading="OTHERS">
        <SidebarMenu>

        <SidebarMenuItem>
        <SidebarMenuButton asChild>
         <Submenu title="Menu Level">
          <MenuItem>Post</MenuItem>
          <MenuItem>Details</MenuItem>
          <Submenu title="Level 2">
            <MenuItem>new</MenuItem>
            <MenuItem>Hello</MenuItem>
          </Submenu>
        </Submenu>
         </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
        <SidebarMenuButton asChild>
        <MenuItem>Chip</MenuItem>
        </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
        <SidebarMenuButton asChild>
        <MenuItem target="_blank" component={Link} link="https://google.com">
          External Link
        </MenuItem>
        </SidebarMenuButton>
        </SidebarMenuItem>

        </SidebarMenu>
      </Menu>
      </SidebarGroup>

     </SidebarContent>
    </Sidebar>
   </SidebarProvider>
  );
};

export default App;
```

## API Reference

#### Sidebar Api Reference

```http
  <Sidebar></Sidebar>
```

| Props                 | Type       | Default          | Description                                           |
| :-------------------- | :--------- | :--------------- | ----------------------------------------------------- |
| `width`               | `string`   | `260px`          | set the width of sidebar                              |
| `textColor`           | `string`   | `#2b2b2b`        | set this color to all MenuItem and SubMenu of sidebar |
| `isCollapse`          | `boolean`  | `false`          | set the Sidebar to mini sidebar                       |
| `themeColor`          | `string`   | `#5d87ff`        | set the theme primary color                           |
| `themeSecondaryColor` | `string`   | `#49beff`        | set the theme secondary color                         |
| `mode`                | `string`   | `light`          | set the mode of the Sidebar light or Dark             |
| `direction`           | `string`   | `ltr`            | set the direction of Sidebar ltr or rtl               |
| `userName`            | `string`   | `Mathew`         | set the user name of User Profile                     |
| `designation`         | `string`   | `Designer`       | set the user designation of User Profile              |
| `showProfile`         | `boolean`  | `true`           | show the user profile true or false                   |
| `userimg`             | `string`   | `user image url` | set the image of user in User Profile                 |
| `onLogout`            | `function` | `handleLogout`   | set the logout function for user logout               |
| `className`           | `string`   | ` `              | set the custom CSS class for Sidebar styling          |
| `collapseWidth`       | `string`   | `80px`           | set the width of Sidebar when collapsed               |

#### Menu Api Reference

```http
  <Menu></Menu>
```

| Props        | Type     | Default | Description                                |
| :----------- | :------- | :------ | ------------------------------------------ |
| `subHeading` | `string` | `menu`  | menu heading title                         |
| `className`  | `string` | ` `     | set the custom CSS class for each MenuItem |

#### Submenu Api Reference

```http
  <Submenu></Submenu>
```

| Props          | Type              | Default                   | Description                                       |
| :------------- | :---------------- | :------------------------ | ------------------------------------------------- |
| `title`        | `string`          | `blank`                   | title of the submenu                              |
| `icon`         | `React.ReactNode` | `Lucide icon - <Circle/>` | set icon of submenu                               |
| `borderRadius` | `string`          | `rounded-md`              | set border radius of Submenu                      |
| `textFontSize` | `string`          | `text-sm`                 | set text Font Size of the submenu                 |
| `disabled`     | `boolean`         | `false`                   | enable/disable the Submenu                        |
| `className`    | `string`          | ` `                       | set custom Tailwind CSS class for submenu styling |

#### MenuItem Api Reference

```http
  <MenuItem></MenuItem>
```

| Props            | Type                | Default                   | Description                                         |
| :--------------- | :------------------ | :------------------------ | --------------------------------------------------- |
| `icon`           | `React.ReactNode`   | `Lucide icon - <Circle/>` | set icon of menu item                               |
| `link`           | `string`            | `#`                       | pass link for component to redirect                 |
| `component `     | `React.ElementType` | `Link `                   | set react router link or nextjs Link to apply route |
| `badge`          | `boolean`           | `false`                   | set the badge on menu items                         |
| `badgeColor`     | `string`            | `bg-primary`              | set badge color                                     |
| `badgeTextColor` | `string`            | `#ffffff`                 | set any badge text color                            |
| `badgeContent`   | `string`            | `New`                     | set content on badge                                |
| `textFontSize`   | `string`            | `text-sm`                 | set font size of menu item                          |
| `borderRadius`   | `string`            | `rounded-md`              | set border radius of menu item                      |
| `disabled`       | `boolean`           | `false`                   | enable/disable the menu item                        |
| `badgeType`      | `string`            | `filled`                  | set badgeType of menu item filled or outlined       |
| `target`         | `string`            | ``                        | set target of menu item \_blank                     |
| `isSelected`     | `boolean`           | `false`                   | set selected menu item                              |
| `className`      | `string`            | ` `                       | set custom Tailwind CSS class for the menu item     |

#### Logo Api Reference

```http
  <Logo></Logo>
```

| Props        | Type                | Default    | Description                                         |
| :----------- | :------------------ | :--------- | --------------------------------------------------- |
| `img`        | `string`            | `Logo url` | set the logo of the sidebar                         |
| `href`       | `string`            | `set url`  | set any url you wanted to redirect                  |
| `component ` | `React.ElementType` | `Link `    | set react router link or nextjs Link to apply route |

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.
