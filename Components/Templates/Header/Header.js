import styles from "./Header.module.css";
import Link from "next/link";
import clsx from "clsx";

import Vector from "../../SVGs/Vector";

const Header = () => {
  const navItems = [
    { href: "/home", label: "Become a renter" },
    { href: "/about", label: "Rental deal" },
    { href: "/services", label: "How it works" },
    { href: "/contact", label: "Why choose us" },
  ];

  return (
    <header className={styles.header}>
      <nav
        className={clsx("container", styles.nav)}
        aria-label="Main navigation"
      >
        <Link href="/" className={styles.navLogo}>
            <Vector />
          CAR MARKET
        </Link>
        <ul className={styles.navList}>
          {navItems.map(({ href, label }) => (
            <li key={href} className={styles.navItem}>
              <Link href={href} className={styles.navLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.navLog}>
          <Link href="/login" className={styles.navLogin}>
            Sign in
          </Link>
          <button type="button" className={clsx(styles.navButton, "button")}>
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
