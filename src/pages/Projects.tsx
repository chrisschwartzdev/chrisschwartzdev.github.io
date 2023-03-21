import { useEffect, useState } from "react";
import { LinkToNewTab } from "../components/LinkToNewTab";
import { Project } from "../types";
import { Page } from "./Page";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(r => r.json())
      .then(d => setProjects(d));
  }, [])

  return (
    <Page title="Chris Schwartz - Projects">
      <div className="text-center">
        <h1>Projects</h1>
        <h3>Below are some projects I'd like to showcase with links to their respective public git repository.</h3>
      </div>
      {projects.map((p: Project) => (
        <details>
          <summary>{p.title} - <LinkToNewTab url={p.url}>{p.url}</LinkToNewTab></summary>
          <p>{p.description}</p>
        </details>
      ))}
    </Page>
  )
}

