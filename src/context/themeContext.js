"use client"
import { createContext, useEffect, useState } from "react";

export const ThemeContext =  createContext();
const getFromStorage = ()=>{
    // at begining it will be ssr so until it convert to csr there shouldn't be any error so below condition
    if(typeof window !== "undefined"){
        const value = localStorage.getItem("blogApptheme");
        console.log(value);
        return value || "light"
    }
}

export const ThemeContextProvider  = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return getFromStorage();
    });

    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
       
    }

    useEffect(()=>{
    localStorage.setItem("blogApptheme",theme);
    console.log(theme);
    },[theme])

return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}
