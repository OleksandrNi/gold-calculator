import { useEffect, useState } from "react";
import CommonLoginButton from "../components/LoginButton";
import CommonLinks from "../components/Links";
import CommonCurrency from "../components/Currency";
import CommonSigninButton from "../components/SigninButton";

import { ReactComponent as BurgerClose } from "./images/Burger_Close.svg";
import { ReactComponent as BurgerOpen } from "./images/Burger_Open.svg";
import logo from "./images/logo.png";

import styles from "./styles.module.scss";

export default function CommonNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWideScreen) {
      setIsMenuOpen(false);
    }
  }, [isWideScreen]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {!isMenuOpen ? (
          <BurgerClose
            onClick={() => setIsMenuOpen(true)}
            className={styles.burger}
          />
        ) : (
          <BurgerOpen
            onClick={() => setIsMenuOpen(false)}
            className={styles.burger}
          />
        )}
        {!isMenuOpen && (
          <div className={styles.navigation}>
            <img src={logo} alt="logo" className={styles.logo} />
            {isWideScreen && <CommonLinks />}
          </div>
        )}
        {!isMenuOpen && (
          <div className={styles.buttons} style={{ width: "auto" }}>
            {isWideScreen && <CommonCurrency />}
            {isWideScreen && <CommonSigninButton />}
            <CommonLoginButton />
          </div>
        )}
      </div>
      {!isMenuOpen && !isWideScreen && <div className={styles.line}></div>}
      {isMenuOpen && !isWideScreen && <CommonLinks />}
      {isMenuOpen && !isWideScreen && <CommonCurrency />}

      {isMenuOpen && !isWideScreen && (
        <div className={styles.buttons}>
          <CommonSigninButton />
          <CommonLoginButton />
        </div>
      )}
    </div>
  );
}
