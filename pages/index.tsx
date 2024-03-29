import type { NextPage } from "next";
import Image from "next/image";

import { useEffect } from "react";

import Layout from "../components/layout";
import Work from "../components/work";
import Skills from "../components/skill";
import Projects from "../components/projects";
import Education from "../components/education";
import createObserver from "../lib/observer";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  useEffect(() => {
    createObserver();
  });

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.heroMain}>
          <section className={styles.sectPrimary}>
            <div className={styles.heroContentContainer}>
              <div className={styles.heroContent}>
                <h1 className={`${styles.headerHuge} hello`}>
                  YUSSIF MOHAMMED
                </h1>
                <p className={`${styles.text80} ${styles.textNormal}`}>
                  Hello, I am Yussif &quot;Dawkaka&quot; Mohammed, a flexible
                  hard worker with over 4 years of experience in software
                  engineering who is passionate about programming, excellent
                  problem solving skills and fast learner.
                </p>
                <ul className={styles.socialsContainer}>
                  <li className={styles.social}>
                    <a
                      aria-label="My github profile"
                      href="https://github.com/dawkaka"
                      target="__blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="var(--foreground)"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                      </svg>
                    </a>
                  </li>
                  <li className={styles.social}>
                    <a
                      aria-label="My linkedin profile"
                      href="www.linkedin.com/in/yussif-mohammed"
                      target="__blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="var(--foreground)"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </li>
                  <li className={styles.social}>
                    <a
                      aria-label="My twitter profile"
                      href="https://twitter.com/mo_yussif"
                      target="__blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="var(--foreground)"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                      </svg>
                    </a>
                  </li>
                  <li className={styles.social}>
                    <a
                      aria-label="Send me an email"
                      href="mailto:yousiph77@gmail.com"
                      target="__blank"
                    >
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="var(--foreground)"
                      >
                        <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z" />
                      </svg>
                    </a>
                  </li>
                  <li className={styles.social}>
                    <a
                      aria-label="My dev.to blog profile"
                      href="https://dev.to/mo_yussif"
                      target="__blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="var(--foreground)"
                      >
                        <path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.heroImageConatiner}>
              <div className={styles.imageContainer}>
                <div className={styles.imageContainer2}>
                  <Image
                    priority
                    className={`${styles.myImage} ${styles.popLeft}`}
                    src={"/mo-yussif.png"}
                    alt="dawkaka"
                    layout="fill"
                    onLoadingComplete={() => {}}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <Work />

        <Skills />

        <Projects />

        <Education />
      </main>
    </Layout>
  );
};

export default Home;
