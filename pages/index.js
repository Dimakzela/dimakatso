import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Dimakatso</title>
                    {/*<link rel="icon" href="/favicon.ico"/>*/}
                </Head>

                <main>

                    <h1 className={styles.title}>
                        Dimakatso Bopape
                    </h1>

                    <div className={styles.description}>
                        <div>
                            <strong>Full Stack Developer</strong>
                        </div>
                        <code>Java, nodejs, Angular, React</code>
                    </div>

                    {/*<div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3><i>Who am i?</i> &rarr;</h3>
                        <p>Find in-depth information about me.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Skill &rarr;</h3>
                        <p>Learn about my experience and skills!</p>
                    </a>

                </div>*/}
                </main>

                <footer>
                    <p>
                        Developed by Dimaxsoftware
                    </p>
                </footer>

                <style jsx>{`
                    main {
                        padding: 5rem 0;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    footer {
                        width: 100%;
                        height: 100px;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    footer img {
                        margin-left: 0.5rem;
                    }

                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                        color: inherit;
                    }

                    code {
                        background: #fafafa;
                        border-radius: 5px;
                        padding: 0.75rem;
                        font-size: 1.1rem;
                        font-family: Menlo,
                        Monaco,
                        Lucida Console,
                        Liberation Mono,
                        DejaVu Sans Mono,
                        Bitstream Vera Sans Mono,
                        Courier New,
                        monospace;
                    }
                `}</style>

                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: -apple-system,
                        BlinkMacSystemFont,
                        Segoe UI,
                        Roboto,
                        Oxygen,
                        Ubuntu,
                        Cantarell,
                        Fira Sans,
                        Droid Sans,
                        Helvetica Neue,
                        sans-serif;
                    }

                    * {
                        box-sizing: border-box;
                    }
                `}</style>
            </div>
        </div>

    );
}
