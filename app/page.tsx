import Link from "next/link";
import styles from '../styles/styles.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Welcome</h1>
            <p className={styles.subtitle}>This is my webpage, disigned by Emmanuel Anguiano.</p>
            <Link href={'/about'} className="btn">Click me to start</Link>
          </div>
        <div className={styles.blob}></div>
      </div>
    </>
      
      
  );
}
