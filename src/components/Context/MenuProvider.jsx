import { useState } from "react";
import { menuContext } from "./menuContext";

const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <menuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </menuContext.Provider>
  );
};
export default MenuProvider;
