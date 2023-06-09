import React from 'react';
import styles from '../Styles/Global';

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={`${styles.btnBlack}`}
      onClick={() => window.open(link, '_blank')}
    >
      <img src={assetUrl} alt="expo-icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-bold text-sm`}>View it on </p>
        <p className={`${styles.btnText} font-bold text-sm`}>expo Store </p>
      </div>
    </div>
  );
};

export default Button;
