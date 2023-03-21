import { Link } from 'react-router-dom';
import { LinkToNewTab } from '../components/LinkToNewTab';
import { Page } from './Page';

export const HomePage = () => (
  <Page title="Chris Schwartz - Home">
    <div className="text-center">
      <h1>Hello!</h1>
      <h3>My name is Chris Schwartz, and this is my portfolio website. Here I will showcase the main technical things I do.</h3>
    </div>
    <div style={{ maxWidth: "50vw" }}>
      <br />
      <h2>Software Development</h2>
      <p>Software development / engineering has been my main career for the past several years. To see what personal projects I've worked on, check out the <Link to="projects">projects</Link> page.</p>
      <h2>Game Development</h2>
      <p>
        Game development has been a strong hobby of mine since I was a child, as video games are what inspired me to learn programming.
        I've worked on a handful of projects over the years, but my most notable are <LinkToNewTab url="https://store.steampowered.com/app/679300/PATHOS/?">PATHOS</LinkToNewTab> (with Accordion Games), and my solo project <LinkToNewTab url="https://accidentalcube.com/">Avalice</LinkToNewTab>.
      </p>
      <h2>Music Production</h2>
      <p>I have been pursuing music production as a hobby since 2010. You can hear most of my stuff <LinkToNewTab url="https://kraedt.com/">here</LinkToNewTab>.</p>
    </div>
  </Page >
)
