import Image from "next/image";
import styles from "./page.module.css";
import tv from '../images/tv.png'

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.col}>
      <h1 className={styles.title}>your best online shop destination</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias?</p>
      <button className={styles.button}>Shop now</button>
      </div>
     <div className={styles.col}>
     <Image src={tv} alt="ss"  className={styles.img} />
     </div>
    </div>
  );
}
