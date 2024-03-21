import { FunctionComponent } from "react";

import styles from "../styles/Home.module.scss";

const Work: FunctionComponent = () => {
  return (
    <div className={styles.heroMain}>
      <section id="work" className={`${styles.skewSection} ${styles.workSect}`}>
        <div>
          <div className={styles.headerCenter}>
            <h1 className={styles.headerBig}>Work</h1>
          </div>

          <div className={styles.workCotentContainer}>
            <div className={styles.lineContainer}>
              <div className={styles.line}></div>
            </div>

            <div className={styles.workContainer}>
              <div className={styles.workInfo}>
                <h2>APIToolkit, Software Engineer.</h2>
                <p>2022 - CURRENT</p>
              </div>

              <article>
                <div className={`${styles.workResp} ${styles.workLast}`}>
                  <h4>Key contributions</h4>
                  <ul className={styles.respContainer}>
                    <li className={styles.resp}>
                      Built an in-house swagger editor and generator. It
                      generates swagger doc based on a project&apos;s traffic
                      which is very reliable and up-to-date, with very nice
                      visuals that allows customers to seamlessly browse the api
                      docs
                    </li>
                    <li className={styles.resp}>
                      Built a query builder that allows our customers to easily
                      query their request logs without writing our query
                      language
                    </li>
                    <li className={styles.resp}>
                      Rebuilt the entire landing website, landing page, pricing
                      page, documentation, and blogs page.
                    </li>
                    <li className={styles.resp}>
                      Building several SDKs in various programming languages and
                      frameworks which allows our customers to integrate
                      APIToolkit into the back-end of their applications
                      seamlessly.
                    </li>
                    <li className={styles.resp}>
                      Writing clear and concise documentation for our SDKs
                    </li>
                    <li className={styles.resp}>
                      Designed and developed an on-boarding experience that
                      allows user to quickly set{" "}
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div className={styles.workContainer}>
              <div className={styles.workInfo}>
                <h2>Prime Couples, Software Engineer.</h2>
                <p>2021 - 2022</p>
              </div>

              <article>
                <div className={`${styles.workResp} ${styles.workLast}`}>
                  <h4>Key contributions</h4>
                  <ul className={styles.respContainer}>
                    <li className={styles.resp}>
                      Built the managed entire Frontend using React and
                      Typescript
                    </li>

                    <li className={styles.resp}>
                      Built the new post flow, which is a lot like
                      Instagram&apos;s and allows for cropping using
                      react-cropper, adding alt text, caption, location
                      etc.Used FFprobe and FFmpeg for video uploads and getting
                      video metadata
                    </li>
                    <li className={styles.resp}>
                      Built the real-time messaging feature using NodeJs and
                      socket.io which allows for one-to-one messaging between
                      couples and also messaging among couples.
                    </li>
                    <li className={styles.resp}>
                      Built the posts recommendation algorithms to show posts
                      users are interested in
                    </li>
                    <li className={styles.resp}>
                      Hosting and server administration using AWS EC2 and file
                      management using S3
                    </li>
                    <li className={styles.resp}>
                      Built the emailing system with is used for sending
                      transaction emails and also for email confirmation and
                      password reset using purely AWS SES
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div className={styles.workContainer}>
              <div className={styles.workInfo}>
                <h2>Toonji Lyrics, Software Developer.</h2>
                <p>2020 - 2021</p>
              </div>

              <article>
                <div className={`${styles.workResp}`}>
                  <h4>Responsibilities</h4>
                  <ul className={styles.respContainer}>
                    <li className={styles.resp}>
                      Development of the top fan quiz feature and the associated
                      fan ranking algorithm.{" "}
                    </li>
                    <li className={styles.resp}>
                      Creation of the real-time battle feature, enabling users
                      to initiate quiz competitions based on selected
                      artists&apos; song lyrics and shareable links{" "}
                    </li>
                    <li className={styles.resp}>
                      Lead the design and development of the Front-End of the
                      application using React{" "}
                    </li>
                    <li className={styles.resp}>
                      Complete development of the mobile application using React
                      Native.{" "}
                    </li>
                    <li className={styles.resp}>
                      End-to-end parsing and validation of new lyrics posted on
                      the platform.{" "}
                    </li>
                    <li className={styles.resp}>
                      Management of hosting and server operations on AWS
                      (utilizing EC2, S3 for file storage, and CloudFront as
                      CDN).{" "}
                    </li>
                    <li className={styles.resp}>
                      Integration of Spotify for seamless audio playback of
                      selected lyrics.{" "}
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div className={styles.lineContainer}>
              <div className={`${styles.line} ${styles.line2}`}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
