import Link from 'next/link'
import React from 'react'
import styles from "./logo.module.css"
export default function () {
  return (
    <div>
          <Link href="/" className={styles.logo}>
        HEXASHOP
      </Link>
    </div>
  )
}
