import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
     <div className={styles.info}>
       <div className={styles.logo}>
        <Image src={"/logo.png"} alt='logo' width={50} height={50} className={styles.image}/>
        <h1 className={styles.logotext}>MB Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga et iste expedita
           eveniet! Consectetur obcaecati quae eligendi facere autem magnam dignissimos? Vel, 
           aperiam laboriosam similique consequatur quibusdam pariatur repellat.
           </p>

        <div className={styles.icons}>
        <Image src="/facebook.png" alt='facebook' width={18} height={18}/>
        <Image src="/instagram.png" alt='instagram' width={18} height={18}/>   
        <Image src="/linkedIn.png" alt='linkedIn' width={18} height={18}/>
       </div>
     </div>

     <div className={styles.links}>
     <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href={"/"}>Homepage</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href={"/"}>Style</Link>
        <Link href={"/"}>fashion</Link>
        <Link href={"/"}>Coding</Link>
        <Link href={"/"}>Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href={"/"}>Facebook</Link>
        <Link href={"/"}>Instagram</Link>
        <Link href={"/"}>LinkedIn</Link>
        
      </div>
     </div>
    </div>
  )
}

export default Footer