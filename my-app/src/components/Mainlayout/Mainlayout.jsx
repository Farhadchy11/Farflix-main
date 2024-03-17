import React from "react";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import "./Mainlayout.css";

export const ThemeContext = createContext(null);

const Mainlayout = ({ children }) =>   {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App"  id={theme} >
      <Header />

      <div className="app_page">
        <Sidebar />
        <div>{children}</div>
      </div>

     {/* This switch is for dark & light mode    */}

      <div className="switch">
        <ReactSwitch
          className="React_Switch"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </div>

    {/* ---- */}

       

    </div>
    </ThemeContext.Provider> 
  );
}


  export default Mainlayout;

