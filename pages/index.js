import Head from "next/head";
import Image from "next/image";
import header from "../assets/images/header.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Texas Chicken®</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header__image} >
      <Image layout="responsive" quality={100} src={header} alt="header" /></div>
    </div>
  );
}


