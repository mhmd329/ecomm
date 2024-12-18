import Image from "next/image"
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <div className={styles.container}>
<div>2023 Hexashop. all rights reserved</div>
<div className={styles.social}>
<Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
</div>
    </div>
  )
}
