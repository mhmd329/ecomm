import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { Links } from "./data";
import Button from "../../elements/Button/Button";
import Logo from "@/elements/logo/Logo";
import Darkmode from "../darkmode/Darkmode";
export default function () {
  return (
    <div className={styles.container}>
     <Logo/>

      <div className={styles.links}>
        <Darkmode/>
        {Links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.logo}>
            {link.title}
          </Link>
        ))}
        <Button/>
      </div>
    </div>
  );
}
