import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";
import Resume from "../../../assets/profile/Shrinath_ReactJS_3.3yrs.pdf";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shrinath Suryawanshi</h1>
        <p className={styles.description}>
          I'm a Frontend Engineer with 3+ years of experience using React.js{" "}
          <br></br>Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
          <a href='mailto:shrinath0156@email.com' className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={Resume} download className={styles.resumeBtn}>
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("profile/professional-vector-image.png")}
        alt='Profile image of me'
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
