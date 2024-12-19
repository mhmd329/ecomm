import React from "react";
import styles from "./page.module.css";
import family from "@/images/family.png";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

async function Post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.decription}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            width={400}
            height={300}
            alt="post image"
          />
          <span className={styles.auther}>
            <a href="/Blog">go to all category</a>{" "}
          </span>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>${product.price}</p>
        </div>
      </header>
      <div className={styles.gallery}></div>
    </div>
  );
}
export default Post;
