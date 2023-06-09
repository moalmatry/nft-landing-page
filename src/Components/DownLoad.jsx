import React from 'react';
import styles from '../Styles/Global';
import assets from '../assets';

const DownLoad = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText} `}>
            DownLoad The source code
          </h1>
          <p className={`${styles.pText} ${styles.blackText} `}>
            Get The Code on Github
          </p>
        </div>
        <button className={styles.btnPrimary}>Source Code</button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download" className={styles.fullImg} />
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
