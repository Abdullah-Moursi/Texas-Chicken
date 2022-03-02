import Image from "next/image";
import React from "react";
import logo from "../assets/images/logo.png";
import halal from "../assets/images/halal.png";
import styles from "../styles/Footer.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerContents = [
  {
    title: "DISCOVER TEXAS",
    subtitles: [
      {
        title: "Our Story",
        link: "https://texas-psdigital.vercel.app/story",
      },
      {
        title: "HALAL",
        link: "https://texas-psdigital.vercel.app/halal",
      },
    ],
  },
  {
    title: "WORK WITH US",
    subtitles: [
      {
        title: "Careers",
        link: "https://texas-psdigital.vercel.app/careers",
      },
      {
        title: "Franchising",
        link: "https://texas-psdigital.vercel.app/franchising",
      },
    ],
  },
  {
    title: "TEXAS WAY",
    subtitles: [
      {
        title: "Birthday Package",
        link: "https://texas-psdigital.vercel.app/birthday",
      },
    ],
  },
  {
    title: "LET'S TALK",
    subtitles: [
      {
        title: "Contact Us",
        link: "https://texas-psdigital.vercel.app/contact",
      },
      {
        title: "FAQs",
        link: "https://texas-psdigital.vercel.app/faq",
      },
    ],
  },
  {
    title: "TEXAS CHICKEN",
    span: " | UAE",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contents}>
        {footerContents.map((content) => (
          <div key={content.title} className={styles.footer__contents__column}>
            <ul>
              <h3>
                {content.title}
                <span>{content.span ? content.span : ""}</span>
              </h3>

              {content.subtitles?.map((subtitle) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={subtitle.link}
                  key={subtitle.title}
                >
                  <li className={styles.footer__element}>{subtitle.title}</li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footer__contents}>
        <div className={styles.footer__contents__column}>
          <h3>JOIN OUR COMMUNITY</h3>
        </div>
        <div className={styles.footer__contents__column}>
          <div className={styles.footer__image}>
            <Image width={80} height={80} src={halal} alt="logo" />
          </div>
        </div>
        <div className={styles.footer__contents__column}>
          <div className={styles.footer__image}>
            <Image
              width={80}
              height={80}
              onClick={() => window.scrollTo(0, 0)}
              src={logo}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.footer__contents__column}>
          <h3>CONNECT WITH</h3>

          <div className={styles.social__icons}>
            <div className={styles.social__icon}>
              <TwitterIcon />
            </div>
            <div className={styles.social__icon}>
              <FacebookIcon />
            </div>{" "}
            <div className={styles.social__icon}>
              <InstagramIcon />
            </div>{" "}
            <div className={styles.social__icon}>
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__end}>
        <p>All rights reserved. | Developed & Designed byPSdigital.</p>

      </div>
    </footer>
  );
};

export default Footer;
