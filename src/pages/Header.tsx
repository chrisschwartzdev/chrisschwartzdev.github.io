import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const url = useLocation().pathname;
  const [navOpen, setNavOpen] = useState(false);

  const showActive = (urlMatch: string) => url === urlMatch ? styles.active : '';

  const ListLink = ({ url, className, text }: { url: string, className: string, text: string }) => (
    <li className={styles.text}><Link to={url} className={className}>{text}</Link></li>
  )

  const links = <>
    <ListLink url="/" className={showActive('/')} text="HOME" />
    <ListLink url="/projects" className={showActive('/projects')} text="PROJECTS" />
    <ListLink url="/contact" className={showActive('/contact')} text="CONTACT" />
  </>

  return (
    <div className={styles.header}>
      <div className={styles.navbarBg} />
      <div className={styles.mobileNavbar} id="nav">
        <ul className={styles.links} style={{ display: navOpen ? 'initial' : 'none' }}>
          {links}
        </ul>
        <button className={styles.icon + ' icon-button'} onClick={() => setNavOpen(!navOpen)}>&#9776;</button>
      </div>
      <div className={styles.navbar} id="nav">
        <ul className={styles.links}>
          {links}
        </ul>
      </div>
    </div >
  )
}