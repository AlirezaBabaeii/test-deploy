import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>خضرچوپان</title>
        <meta name="description" content="مدرسه خضرچوپان مدرسه پر از مهر در ماهنشان است خضرچوپان منطقه ای بکر است ولی کم بر خورداز" />
        <link rel="icon" href="/favicon.ico" />
      <meta itemProp="name" content="مدرسه خضرچوپان" />
      <meta itemProp="description" content="درسه خضرچوپان مدرسه پر از مهر در ماهنشان است خضرچوپان منطقه ای بکر است ولی کم بر خورداز" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! schools v2</a>
        </h1>
        <p>
          خضرچوپان محل خوبی در ماهنشان است که مدرسه مر خضرچوپان در ان جایی گرفته
          است مدرسه مهر خضرچوپان محل خوبی برای تحصیل است
        </p>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
