import styles from './LoginRegister.module.css';

export function LoginRegister() {
  return (
    <div className={styles.loginWrapper}>
      <button className={`${styles.button} ${styles.loginButton}`}>Login</button>
      <button className={styles.button}>Register</button>
    </div>
  );
}
