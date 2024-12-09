import React from "react";
import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.formTitle}>Get in Touch</h2>
      <form className={styles.contactForm}>
        <label htmlFor="name" className={styles.label}>
          Full Name:
        </label>
        <input
          type="text"
          id="name" 
          name="name"
          className={styles.input}
          placeholder="John Doe"
          required
        />

        <label htmlFor="email" className={styles.label}>
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="example@example.com"
          required
        />

        <label htmlFor="phone" className={styles.label}>
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={styles.input}
          placeholder="+123 456 7890"
        />

        <label htmlFor="subject" className={styles.label}>
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={styles.input}
          placeholder="Subject of your message"
        />

        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Write your message here..."
          rows="6"
          required
        ></textarea>

        <label className={styles.labelCheckbox}>
          <input
            type="checkbox"
            name="subscribe" 
            id="subscribe"
            className={styles.checkbox}
          />
          Subscribe to our newsletter
        </label>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      <div style={{height:"7vh"}}>
      </div>
    </div>
  );;
}
