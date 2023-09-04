import React, { useState, createContext } from "react";
//create context
export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  //sidebar state setOpen
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
