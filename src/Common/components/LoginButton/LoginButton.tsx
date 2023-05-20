import styles from "./styles.module.scss";

export default function CommonLoginButton() {
  return (
    <button type="button" className={styles.login}>
      Log In
    </button>
  );
}
