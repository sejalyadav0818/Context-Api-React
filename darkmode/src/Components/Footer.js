import { useContext } from "react";
import { ThemContext } from "./ThemConext";

function Footer() {
  const { isDarkMode } = useContext(ThemContext);
  return (
    <>
      <footer className={`${isDarkMode ? "footer footer--dark" : "footer"}`}>
        <div className="container">
          <p>&copy; 2023 React Project. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
