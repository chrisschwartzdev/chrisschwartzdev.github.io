import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <span>© {new Date().getFullYear()} Chris Schwartz</span>
  </footer>
)