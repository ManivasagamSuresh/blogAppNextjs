import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
        <Image src="/instagram.png" alt='instagram' width={24} height={24}/>   
        <Image src="/linkedIn.png" alt='linkedIn' width={24} height={24}/>
      </div>
      <div className={styles.logo}>MB Blog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href={"/"} className={styles.link}>Homepage</Link>
        <Link href={"/"} className={styles.link}>Contact</Link>
        <Link href={"/"} className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
      </div>
  )
}

export default Navbar