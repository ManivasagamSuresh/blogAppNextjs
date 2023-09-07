"use client"
import React, { useContext } from 'react'
import styles from "./ThemeToggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/themeContext'

function ThemeToggle() {
const {theme, toggle} = useContext(ThemeContext);
console.log(theme)

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ?{background:"white"}
    :{background:"#0f172a"}}>
    <Image src="/moon.png" alt="moon" width={14} height={14} />
    <div className={styles.ball} style={
      theme==="dark"
      ?{left:"2px",background:"#0f172a"}
      :{right:"2px",background:"white"}}></div>
    <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle