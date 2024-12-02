import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import carMarketImg from "../../../public/Images/car-market.jpg";
import styles from "./Hero.module.css";
import Location from "../../SVGs/Location";
import Calender from "../../SVGs/Calender";

const Hero = () => {
  return (
    <section className="section" id="hero">
      <div className={clsx(styles.heroContainer, "container")}>
        <div className={styles.heroImg}>
          <Image src={carMarketImg} alt="Car Market" />
        </div>
        <div>
          <h1 className={styles.heroTitle}>
            Find, buy and sell a car{" "}
            <span className={styles.heroTitleSpan}>Easily</span>
          </h1>
          <p className={styles.heroDesc}>
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
          <button className={clsx(styles.heroButton1, "button", "button-flex")}>
            <Link href="">Buy</Link>
          </button>
          <button className={clsx(styles.heroButton2, "button", "button-flex")}>
            <Link href="">Sell</Link>
          </button>{" "}
        </div>
        <div className={clsx(styles.heroSearch, "container")}>
          <ul className={styles.heroSearchList}>
            <li className={styles.heroSearchItem}>
              <div className={styles.heroIcon}>
                <Location />
              </div>
              <div className={styles.heroSearchData}>
                <h3 className={styles.heroSearchTitle}>Location</h3>
                <span className={styles.heroSearchSub}>
                  Search your location
                </span>
              </div>
            </li>
            <li className={styles.heroSearchItem}>
              <div className={styles.heroIcon}>
                <Calender />
              </div>
              <div className={styles.heroSearchData}>
                <h3 className={styles.heroSearchTitle}>Pickup date</h3>
                <span className={styles.heroSearchSub}>Tue 15 Feb, 09:00 </span>
              </div>
            </li>
            <li className={styles.heroSearchItem}>
              <div className={styles.heroIcon}>
                <Calender />
              </div>
              <div className={styles.heroSearchData}>
                <h3 className={styles.heroSearchTitle}>Return date</h3>
                <span className={styles.heroSearchSub}>
                Thu 16 Feb, 11:00                </span>
              </div>
            </li>
            <li className={styles.heroSearchButton}>
              <button
                className={clsx(styles.heroButton, "button", "buttonFlex")}
              >
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Hero;
