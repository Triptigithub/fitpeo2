import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.wrapper}>
        <div className={styles.layoutGrid}>

          <div className={styles.sidebar}>
            <h2 className={styles.sectionHeading}>
              The Design Declares Newsletter and Toolkit
            </h2>
          </div>

          <div className={styles.contentArea}>
            <img
              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png%3Fmax-w%3D1440&w=1920&q=75"
              alt="Toolkit"
              className={styles.toolkitImage}
            />

            <p className={styles.description}>
              Subscribe to the Design Declares UK newsletter to receive the latest news and updates...
            </p>
            <p className={styles.description}>
              Every signatory to Design Declares will receive an access link to the Toolkit...
            </p>

            <form className={styles.subscriptionForm}>
              <div className={styles.inputWrapper}>
                <label>Email:</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={styles.emailInput}
                />
              </div>

              <div className={styles.consentGroup}>
                <label className={styles.consentLabel}>
                  <input type="checkbox" required />
                  <span>I would like to be added to the newsletter...</span>
                </label>
              </div>

              <a href="/privacy-policy" className={styles.privacyPolicyLink}>
                View our Privacy Policy
              </a>

              <div className={styles.submitArea}>
                <button type="submit">Subscribe</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
