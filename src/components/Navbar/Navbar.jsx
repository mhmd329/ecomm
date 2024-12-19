import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { Links } from "./data";
import Button from "../../elements/Button/Button";
import Logo from "@/elements/logo/Logo";
import DarkMode from "../DarkMode/DarkMode";
export default function () {
  return (
    <div className={styles.container}>
     <Logo/>

      <div className={styles.links}>
        <DarkMode/>
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
