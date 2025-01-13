import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";
import {useState} from "react";
import About from "../components/about";
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "../constant/constants";
import Skills from "../components/skills";

export default function Home() {

    const [showAbout, setShowAbout] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const handleShowAbout = () => setShowAbout(true);
    const handleShowSKills = () => setShowSkills(true);

    const handleClose = () => {
        setShowAbout(false)
        setShowSkills(false)
    };

    return (
        <div>
            <About show={showAbout} handleClose={handleClose}/>
            <Skills show={showSkills} handleClose={handleClose}/>

            <div className={styles.container}>
                <Head>
                    <title>Dimakatso</title>
                    {/*<link rel="icon" href="/favicon.ico"/>*/}
                </Head>

                <main>

                    <h1 className={styles.title}>
                        Dimakatso Bopape
                        <span onClick={handleShowAbout}>
                            <i>
                                {Content.DETAILS}
                            </i>
                        </span>
                    </h1>

                    <div className={styles.description}>
                        <div>
                            <strong>Full Stack Developer</strong>
                        </div>
                        <code>Java, nodejs, Angular, React, React-native</code>
                        <span onClick={handleShowSKills}>
                            <i>
                                {Content.DETAILS}
                            </i>
                        </span>
                    </div>

                    <div className={styles.contact}>

                        <a href='https://github.com/Dimakzela' target="_blank">
                            <FaGithub/>
                        </a>
                        <a href='https://www.linkedin.com/in/dimakatso-bopape-b8b403b6/' target="_blank">
                            <FaLinkedin/>
                        </a>
                        <a href='mailto:dimakzela@gmail.com' target="_blank">
                            <MdOutlineMailOutline/>
                        </a>
                    </div>
                </main>

                <footer>
                    <p>
                        Developed by <i style={{textDecoration: "underline"}}>Dimaxsoftware</i>
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
