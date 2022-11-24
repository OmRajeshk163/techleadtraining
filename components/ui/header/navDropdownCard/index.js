import Link from 'next/link';
import React from 'react';

import styles from '../header.module.css';

const NavDropdownCard = ({
  data,
  containerClassName = '',
  handleLinkClick,
}) => {
  const onLinkCLick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  if (data.link) {
    return (
      <div className={`${styles.navDropdownContainer}`}>
        <Link href={data.link} passHref>
          <a>
            <h1 className={styles.navLink}>{data.name}</h1>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styles.navDropdownContainer}`}>
      <h1 className={styles.navLink}>{data.name}</h1>
      <div
        className={`${
          data.sections?.length
            ? styles.navDropdownContent
            : styles.navDropdownContentHidden
        }`}
      >
        <div className={`${containerClassName || styles.dropdownCard}`}>
          {data.sections?.map((section, idx) => {
            return (
              <div key={idx}>
                {section.renderDescription ? (
                  <div className={styles.dropdownCardItem}>
                    <div className={styles.dropdownCardContent}>
                      <div className={styles.dropdownCardItemTitle}>
                        {section.renderTitle}
                      </div>
                      <div
                        onClick={onLinkCLick}
                        className={styles.dropdownCardItemDescription}
                      >
                        {section.renderDescription}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={section.link || '/'} passHref>
                    <a onClick={onLinkCLick}>
                      <div className={styles.dropdownCardItem}>
                        <div className={styles.dropdownCardContent}>
                          <div className={styles.dropdownCardItemTitle}>
                            {section.title}
                          </div>
                          <div className={styles.dropdownCardItemDescription}>
                            {section.description}
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavDropdownCard;
