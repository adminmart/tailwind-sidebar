import React, { createContext, useState, useContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  // Add other global settings like themeColor, user, etc. if needed
  const toggleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <SidebarContext.Provider value={{ isCollapse, toggleCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};


