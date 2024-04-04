import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <h1 className="text-center">home page</h1>
        <div className={styles.buttons}>
          <button>notre travail</button>
          <button>notre histoire</button>
        </div>
      </div>
      <video src="/video.mp4" autoPlay muted loop className={styles.video} />
    </main>
  );
}
