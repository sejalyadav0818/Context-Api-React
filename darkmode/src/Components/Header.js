import React, { useContext } from "react";
import { ThemContext } from "./ThemConext";
 function Header() {
    const { isDarkMode, toggleTheme } = useContext(ThemContext);
    return (
      <>
        <header className={`${isDarkMode ? "header header--dark" : "header"} `}>
          <button className="header__button" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
      </>
    );
    
 }
 export default Header;