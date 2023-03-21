import './styles/main.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactElement } from 'react';
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { HomePage } from './pages/HomePage';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Page404 } from './pages/Page404';

type PageProps = { page: ReactElement }

const Body = ({ page }: PageProps) => {
  return (
    <div className="body">
      <div className="container" />
      <Header />
      <main className="body-content">
        {page}
      </main>
      <Footer />
    </div>
  )
}

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Body page={<HomePage />} />} />
          <Route path="/projects" element={<Body page={<Projects />} />} />
          <Route path="/contact" element={<Body page={<Contact />} />} />
          <Route path="/*" element={<Body page={<Page404 />} />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </>
)

export default App;
