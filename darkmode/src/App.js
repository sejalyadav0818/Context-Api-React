// import { useState } from "react";
// import { ThemContext } from "./Components/ThemConext";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Hero from "./Components/Hero";
// import About from "./Components/About";
// import CallToAction from "./Components/CallToAction";

// function App() {
//   const {isDarkMode , setIsDarkMode} = useState(false);
//   const toggleTheme =()=>{
//     setIsDarkMode(!isDarkMode)
//   }
//   return (
//     <>
//       <div className={isDarkMode ? "App dark" : "App"}>
//         <ThemContext.Provider value={{ isDarkMode, toggleTheme }}>
//           <Header />
//           <Hero />
//           <About />
//           <CallToAction />
//           <Footer />
//         </ThemContext.Provider>
//       </div>
//     </>
//   );
// }
// export default App;
import { useState } from "react";
import { ThemContext } from "./Components/ThemConext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import CallToAction from "./Components/CallToAction";

import "../src/assets/style/index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <ThemContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Header />
        <Hero />
        <About />
        <CallToAction />
        <Footer />
      </ThemContext.Provider>
    </div>
  );
}

export default App;