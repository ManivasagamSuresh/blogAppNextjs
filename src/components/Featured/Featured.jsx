import React from 'react'
import styles from "./Featured.module.css"
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>
      <b  className={styles.bold}>Hey, Mani here!  </b>
        Discover my stories and creative ideas.
    </h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
      <h1 className={styles.postTile}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <p className={styles.postDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea tempore ut nobis
         ipsum quidem hic libero iste impedit recusandae nam ullam veniam sint labore, 
         dolores soluta vero est illum.
      </p>
      <button className={styles.postButton}> Read More </button>
      </div>
    </div>
    </div>
  )
}

export default Featured