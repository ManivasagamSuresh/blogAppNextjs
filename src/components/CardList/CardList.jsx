import React from 'react'
import styles from "./CardList.module.css"
import Pagination from '../Pagination/Pagination'
import Image from 'next/image'
import Card from '../Card/Card'

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
      <div className={styles.post}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      </div>
      <Pagination/>
      </div>
  )
}

export default CardList