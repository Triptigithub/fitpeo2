import React from 'react';
import styles from './BreakDown.module.css';

const BreakDown = () => {
  return (
    <section className={styles.sectionBreakdown}>
      <div className={styles.wrapper}>
        <div className={styles.layoutGrid}>
          
          <div className={styles.columnLeft}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.title}>This is Breakdown</h2>
            </div>
          </div>

          <div className={styles.columnRight}>
            <div className={styles.contentWrapper}>
              
              <h2 className={styles.subheading}>
                The science is settled. We are in an emergency of climate and nature.
                The world is past breaking point. The breakdown has begun...
              </h2>

              <div className={styles.accordionGroup}>
                <div className="accordion-item">
                  <button className={styles.accordionToggle}>
                    <h3 className={styles.accordionLabel}>The Role of Design</h3>
                    <span className={styles.icon}>▼</span>
                  </button>
                </div>

                <div className="accordion-item">
                  <button className={styles.accordionToggle}>
                    <h3 className={styles.accordionLabel}>Time for Change</h3>
                    <span className={styles.icon}>▼</span>
                  </button>
                </div>

                <div className="accordion-item">
                  <button className={styles.accordionToggle}>
                    <h3 className={styles.accordionLabel}>Act with Urgency</h3>
                    <span className={styles.icon}>▼</span>
                  </button>
                </div>
              </div>

              <div className={styles.videoLinkContainer}>
                <a 
                  href="https://youtu.be/XpnOe94eXdM" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.videoLink}
                >
                  View our D! Intro Video
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BreakDown;
