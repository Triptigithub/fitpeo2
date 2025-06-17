import React from 'react';
import styles from './DeclareForm.module.css';

const DeclareForm = () => {
  return (
    <section className={styles.declarationSection}>
      <div className={styles.wrapper}>
        <div className={styles.gridLayout}>
          
          <div className={styles.leftSidebar}>
            <h2 className={styles.sectionHeading}>Declare Emergency Now</h2>
          </div>
          
          <div className={styles.formContainer}>
            <p className={styles.introText}>
              Design Declares is open to individuals and institutions working in industrial,
              digital, graphic, communication and service design...
            </p>

            <form className={styles.declarationForm}>
              <h2 className={styles.formHeading}>I am Declaring Emergency</h2>

              <div className={styles.identityOptions}>
                {["As a business", "As an individual", "As a public institution", "As a team or department"].map((label, index) => (
                  <label key={index} className={styles.radioOption}>
                    <span className={styles.customRadio}></span>
                    <span>{label}</span>
                  </label>
                ))}
              </div>

              <div className={styles.formGroup}>
                <label>Website:*</label>
                <input type="url" required placeholder="https://example.com" />
              </div>

              <div className={styles.formGroup}>
                <label>Discipline:*</label>
                <select required>
                  <option value="">Select...</option>
                  <option>Communication Design</option>
                  <option>Digital Design</option>
                  <option>Service Design</option>
                  <option>Product Design</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Email:*</label>
                <input type="email" required placeholder="you@example.com" />
              </div>

              <div className={styles.formGroup}>
                <textarea placeholder="Why are you declaring?" rows="5" required></textarea>
              </div>

              <div className={styles.consentCheckboxes}>
                <label className={styles.checkboxOption}>
                  <span className={styles.customCheckbox}></span>
                  I consent for my data to be used...
                </label>
                <label className={styles.checkboxOption}>
                  <span className={styles.customCheckbox}></span>
                  I would like to be added to the newsletter...
                </label>
              </div>

              <a href="/privacy-policy" className={styles.policyLink}>View our Privacy Policy</a>

              <div className={styles.submitButtonWrapper}>
                <button type="submit">Declare Emergency Now</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeclareForm;
