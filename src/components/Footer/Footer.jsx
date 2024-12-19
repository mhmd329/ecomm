import Image from "next/image"
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className={styles.container}>
<div>2023 Hexashop. all rights reserved</div>
<div className={styles.social}>
<FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2', backgroundColor:"#fff"}} className={styles.icon}  />
<FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F',  backgroundColor:"#fff" }} className={styles.icon}  />
<FontAwesomeIcon icon={faTelegram} style={{ color: '#0088CC',  backgroundColor:"#fff" }} className={styles.icon}  />
<FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2',  backgroundColor:"#fff" }} className={styles.icon}  />
<FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} className={styles.icon}  />
            
</div>
    </div>
  )
}
