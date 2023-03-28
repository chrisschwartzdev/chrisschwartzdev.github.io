import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import inIcon from '../assets/images/in.png';
import githubIcon from '../assets/images/github.png';

export const Header = () => {
  const url = useLocation().pathname;
  const [navOpen, setNavOpen] = useState(false);

  const showActive = (urlMatch: string) => url === urlMatch ? styles.active : '';

  const ListLink = ({ url, className, text }: { url: string, className: string, text: string }) => (
    <li className={styles.text}><Link to={url} className={className}>{text}</Link></li>
  )

  const ListLinkIcon = ({ url, img, title, alt }: { url: string, img: string, title: string, alt: string }) => (
    <li className={styles.sm}>
      <a href={url} title={title} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} />
      </a>
    </li>
  )

  const links = <>
    <ListLink url="/" className={showActive('/')} text="HOME" />
    <ListLink url="/projects" className={showActive('/projects')} text="PROJECTS" />
    <ListLink url="/contact" className={showActive('/contact')} text="CONTACT" />
    <li className={styles.br} />
    <ListLinkIcon url="https://www.linkedin.com/in/chris-schwartz-dev/" img={inIcon} title="LinkedIn" alt="linkedin" />
    <ListLinkIcon url="https://github.com/chrisschwartzdev/" img={githubIcon} title="GitHub" alt="github" />
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