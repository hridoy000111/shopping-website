import React, { Children, useState} from 'react';
  import { menuContext } from '../components/menuContext';

 const MenuProvider = ({Children}) => {
    const [menuOpen,setMenuOpen]=useState(false);
    return (
          <menuContext.Provider value={{menuOpen,setMenuOpen}}>
            {Children}
          </menuContext.Provider>
        
    
    );
};
export default MenuProvider;

