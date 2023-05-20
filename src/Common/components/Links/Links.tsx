import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export default function CommonLinks() {
  return (
    <div className={styles.container}>
      <NavLink
        to="/a"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link} ${styles.non_active}`
        }
      >
        OSRS Gold
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link} ${styles.non_active}`
        }
      >
        RS3 Gold
      </NavLink>
      <NavLink
        to="/b"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link} ${styles.non_active}`
        }
      >
        Sell RS Gold
      </NavLink>
      <NavLink
        to="/c"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link} ${styles.non_active}`
        }
      >
        OSRS Items
      </NavLink>
      <NavLink
        to="/d"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link} ${styles.non_active}`
        }
      >
        OSRS Accounts
      </NavLink>
      <NavLink
        to="/e"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link} ${styles.non_active}`
        }
      >
        Reward Chests
      </NavLink>
    </div>
  );
}
