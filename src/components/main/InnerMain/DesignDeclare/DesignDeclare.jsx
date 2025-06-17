import styles from './DesignDeclare.module.css';
import '@fontsource/anton';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const DesignDeclare = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showDExclam, setShowDExclam] = useState(false);
  const [showDesignTitle, setShowDesignTitle] = useState(false);
  const [isDAnimationComplete, setIsDAnimationComplete] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowDExclam(true), 1000),
      setTimeout(() => setShowDesignTitle(true), 2000),
      setTimeout(() => setShowParagraph(true), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.wrapper}>
        <div className={styles.gridLayout}>
          
          <div className={styles.headingWrapper}>
            <h1 className={styles.mainTitle}>
              <div className={styles.logoContainer}></div>
              <span className={styles.titleBlock}>
                
                <AnimatePresence
                  mode="wait"
                  onExitComplete={() => setIsDAnimationComplete(true)}
                >
                  {!showDesignTitle && (
                    <motion.div
                      className={styles.clippedText}
                      initial={showDExclam ? { clipPath: 'inset(100% 0 0 0)' } : false}
                      animate={showDExclam ? { clipPath: 'inset(0% 0 0 0)' } : false}
                      exit={{ clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.titleLine}>
                        {showDExclam ? 'D!' : 'D'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {showDesignTitle && isDAnimationComplete && (
                  <>
                    <motion.div
                      className={styles.clippedText}
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      animate={{ clipPath: 'inset(0% 0 0 0)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.titleLine}>DESIGN</span>
                    </motion.div>

                    <motion.div
                      className={styles.clippedText}
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      animate={{ clipPath: 'inset(0% 0 0 0)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.titleLine}>DECLARES</span>
                    </motion.div>

                    <motion.div
                      className={styles.clippedText}
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      animate={{ clipPath: 'inset(0% 0 0 0)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={`${styles.titleLine} ${styles.highlightRed}`}>
                        UK
                      </span>
                    </motion.div>
                  </>
                )}
              </span>
            </h1>
          </div>

          {showParagraph && (
            <motion.div
              className={styles.descriptionText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignDeclare;
