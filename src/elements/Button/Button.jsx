"use client"
import React from 'react'
import styles from "./Button.module.css"
export default function Button() {
  return (
    <button className={styles.logout} onClick={()=>{console.log("a7a")}}>log out</button>

  )
}
