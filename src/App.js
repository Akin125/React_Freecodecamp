import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

export default function App(){
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        return setDarkMode((prevState) => !prevState)
    }

   return(
           <>
               <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
               />
               <Main
                darkMode={darkMode}
               />
               <Footer
                darkMode={darkMode}
               />
           </>
       );
}
