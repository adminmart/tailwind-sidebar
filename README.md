## React Tailwind Sidebar – Easy, Customizable React.js Sidebar

Build beautiful and responsive sidebars in seconds! **React Tailwind Sidebar** is a lightweight and fully customizable sidebar component for React and Next.js projects. It comes with built-in support for **light/dark mode**, **RTL layouts**, and **easy styling options**. Change **colors**, **fonts**, **and style**s effortlessly using Tailwind classes or your own design system.

Perfect for dashboards, admin panels, and SaaS apps where you want speed, flexibility, and style — without writing repetitive code.

# [Live Demo](https://tailwind-admin-react-free.netlify.app/)

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

import {
  AMSidebar,
  AMMenuItem,
  AMMenu,
  AMSubmenu,
  AMLogo,
} from "tailwind-sidebar";
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
import "tailwind-sidebar/styles.css";

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
    <AMSidebar width={"270px"} collapsible="none" className="bg-sidebar">
      <AMLogo
        img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
        component={Link}
        href="/"
      >
        Adminmart
      </AMLogo>

      <AMMenu subHeading="HOME">
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
      </AMMenu>

      <AMMenu subHeading="APPS">
        <AMMenuItem icon={<MessageCircle size={20} />} link="#">
          Chat
        </AMMenuItem>

        <AMMenuItem icon={<Calendar size={20} />} link="#">
          Calendar
        </AMMenuItem>
      </AMMenu>

      <AMMenu subHeading="OTHER">
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
      </AMMenu>
    </AMSidebar>
  );
};

export default App;
```

## API Reference

#### Sidebar Api Reference

```http
  <AMSidebar></AMSidebar>
```

| Props                 | Type       | Default          | Description                                                                             |
| :-------------------- | :--------- | :--------------- | --------------------------------------------------------------------------------------- |
| `width`               | `string`   | `260px`          | set the width of sidebar                                                                |
| `textColor`           | `string`   | `#2b2b2b`        | set this color to all MenuItem and SubMenu of sidebar                                   |
| `isCollapse`          | `boolean`  | `false`          | set the Sidebar to mini sidebar                                                         |
| `themeColor`          | `string`   | `#5d87ff`        | set the theme primary color                                                             |
| `themeSecondaryColor` | `string`   | `#49beff`        | set the theme secondary color                                                           |
| `mode`                | `string`   | `light`          | set the mode of the Sidebar light or Dark                                               |
| `direction`           | `string`   | `ltr`            | set the direction of Sidebar ltr or rtl                                                 |
| `userName`            | `string`   | `Mathew`         | set the user name of User Profile                                                       |
| `designation`         | `string`   | `Designer`       | set the user designation of User Profile                                                |
| `showProfile`         | `boolean`  | `true`           | show the user profile true or false                                                     |
| `userimg`             | `string`   | `user image url` | set the image of user in User Profile                                                   |
| `onLogout`            | `function` | `handleLogout`   | set the logout function for user logout                                                 |
| `ClassName`           | `string`   | ` `              | set the custom CSS class for Sidebar styling                                            |
| `collapseWidth`       | `string`   | `80px`           | set the width of Sidebar when collapsed                                                 |
| `variant`             | `string`   | `sidebar`        | set the styling variant of the Sidebar — options: "sidebar", "floating" ,"inset"        |
| `side`                | `string`   | `left`           | set the position of the Sidebar on screen — options: "left", "right"                    |
| `animation`           | `boolean`  | `false`          | set whether to enable sidebar MenuItem animation effects                                |
| `collapsible`         | `string`   | `icon`           | set the collapse behavior of the Sidebar — options: "offcanvas" , "icon" , "none"       |
| `showTrigger`         | `boolean`  | `false`          | how or hide the trigger icon for toggling the Sidebar — `true` to show, `false` to hide |

#### Menu Api Reference

```http
  <AMMenu></AMMenu>
```

| Props        | Type     | Default | Description                                |
| :----------- | :------- | :------ | ------------------------------------------ |
| `subHeading` | `string` | `menu`  | menu heading title                         |
| `ClassName`  | `string` | ` `     | set the custom CSS class for each MenuItem |

#### Submenu Api Reference

```http
  <AMSubmenu></AMSubmenu>
```

| Props          | Type              | Default                   | Description                                       |
| :------------- | :---------------- | :------------------------ | ------------------------------------------------- |
| `title`        | `string`          | `blank`                   | title of the submenu                              |
| `icon`         | `React.ReactNode` | `Lucide icon - <Circle/>` | set icon of submenu                               |
| `borderRadius` | `string`          | `rounded-md`              | set border radius of Submenu                      |
| `textFontSize` | `string`          | `text-sm`                 | set text Font Size of the submenu                 |
| `disabled`     | `boolean`         | `false`                   | enable/disable the Submenu                        |
| `ClassName`    | `string`          | ` `                       | set custom Tailwind CSS class for submenu styling |

#### MenuItem Api Reference

```http
  <AMMenuItem></AMMenuItem>
```

| Props            | Type                | Default                   | Description                                                                           |
| :--------------- | :------------------ | :------------------------ | ------------------------------------------------------------------------------------- |
| `icon`           | `React.ReactNode`   | `Lucide icon - <Circle/>` | set icon of menu item                                                                 |
| `link`           | `string`            | `#`                       | pass link for component to redirect                                                   |
| `component `     | `React.ElementType` | `Link `                   | set react router link or nextjs Link to apply route                                   |
| `badge`          | `boolean`           | `false`                   | set the badge on menu items                                                           |
| `badgeColor`     | `string`            | `bg-primary`              | set badge color                                                                       |
| `badgeTextColor` | `string`            | `#ffffff`                 | set any badge text color                                                              |
| `badgeContent`   | `string`            | `New`                     | set content on badge                                                                  |
| `textFontSize`   | `string`            | `text-sm`                 | set font size of menu item                                                            |
| `borderRadius`   | `string`            | `rounded-md`              | set border radius of menu item                                                        |
| `disabled`       | `boolean`           | `false`                   | enable/disable the menu item                                                          |
| `badgeType`      | `string`            | `filled`                  | set badgeType of menu item filled or outlined                                         |
| `target`         | `string`            | ``                        | set target of menu item \_blank                                                       |
| `isSelected`     | `boolean`           | `false`                   | set selected menu item                                                                |
| `ClassName`      | `string`            | ` `                       | set custom Tailwind CSS class for the menu item                                       |
| `variant`        | `string`            | `default `                | set the visual style variant for the menu item button — options: "default", "outline" |
| `size`           | `string`            | `default `                | set the size of the menu item button — options: "default", "sm", "lg"                 |

#### Logo Api Reference

```http
  <AMLogo></AMLogo>
```

| Props        | Type                | Default    | Description                                         |
| :----------- | :------------------ | :--------- | --------------------------------------------------- |
| `img`        | `string`            | `Logo url` | set the logo of the sidebar                         |
| `href`       | `string`            | `set url`  | set any url you wanted to redirect                  |
| `component ` | `React.ElementType` | `Link `    | set react router link or nextjs Link to apply route |

## Authors

- [@adminmart](https://adminmart.com)

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.
