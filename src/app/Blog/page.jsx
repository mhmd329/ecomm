import Link from "next/link";
import family from "@/images/family.png";
import Image from "next/image";
import styles from "./blog.module.css";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products/");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function Blog() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((product) => (
        <Link
          href={`/Blog/${product.id}`}
          className={styles.post}
          key={product.id}
        >
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={product.thumbnail}
              alt="post image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
