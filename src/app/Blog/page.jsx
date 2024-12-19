import Link from "next/link";
import family from "@/images/family.png";
import Image from "next/image";
import styles from "./blog.module.css";
import React from "react";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="Blog/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={family}
            width={350}
            height={250}
            alt="post image"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>post title</h1>
          <p className={styles.text}>post text</p>
        </div>
      </Link>
    </div>
  );
};
export default Blog;
