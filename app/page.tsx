import styles from "@/app/ui/home.module.css";
import clsx from "clsx";


export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Dashboard Home</h1>
        <p className={styles.muted}>Chapter 2 — styled with global.css + CSS Modules.</p>
      </div>
    </main>
  );
}
