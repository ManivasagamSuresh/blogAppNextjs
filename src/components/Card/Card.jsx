import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <div className={styles.container}>
         <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt='' fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>11.03.2023 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
         <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing eler</h1>
        </Link>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur accusantium esse a reiciendis doloribus adipisci quia earum? Culpa, impedit. Ipsa rerum temporibus dicta molestias unde? Sunt voluptatem perferendis numquam! Natus!
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card