"use client"
import React from 'react'
import styles from "./Comments.module.css"
import Link from 'next/link'
import Image from 'next/image'

function Comments() {
    const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
       {
        status === "authenticated" ? (<div className={styles.write}>
            <textarea placeholder="write a comment..." className={styles.input} />
            <button className={styles.button}>send</button>
        </div>)
        
        : <Link href={"/login"}>Login to write a comment</Link>
       }
       <div className={styles.comments}>
         <div className={styles.comment}>
            <div className={styles.user}>
                <Image  src={"/p1.jpeg"} className={styles.image} width={50} height={50}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Mani</span>
                    <span className={styles.date}>12-09-2023</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ex quo nulla dolore officiis facere quae aliquam necessitatibus nam! Earum consectetur natus labore sint amet, pariatur culpa neque itaque possimus?</p>
         </div>
       </div>




       <div className={styles.comments}>
         <div className={styles.comment}>
            <div className={styles.user}>
                <Image  src={"/p1.jpeg"} className={styles.image} width={50} height={50}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Mani</span>
                    <span className={styles.date}>12-09-2023</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ex quo nulla dolore officiis facere quae aliquam necessitatibus nam! Earum consectetur natus labore sint amet, pariatur culpa neque itaque possimus?</p>
         </div>
       </div>






    </div>
  )
}

export default Comments