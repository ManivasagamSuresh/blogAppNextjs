import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

function singlePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar}/>
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>Mani</span>
                    <span className={styles.date}>12-09-2023</span>

                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni id consectetur, doloremque commodi fuga architecto rem aut neque eveniet eos laudantium voluptatem repellendus inventore nulla molestias alias ea quod!</p>
            <h2>hello i'm a heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni id consectetur, doloremque commodi fuga architecto rem aut neque eveniet eos laudantium voluptatem repellendus inventore nulla molestias alias ea quod!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni id consectetur, doloremque commodi fuga architecto rem aut neque eveniet eos laudantium voluptatem repellendus inventore nulla molestias alias ea quod!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni id consectetur, doloremque commodi fuga architecto rem aut neque eveniet eos laudantium voluptatem repellendus inventore nulla molestias alias ea quod!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni id consectetur, doloremque commodi fuga architecto rem aut neque eveniet eos laudantium voluptatem repellendus inventore nulla molestias alias ea quod!</p>
            </div>
         <Comments/>       
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default singlePage;
