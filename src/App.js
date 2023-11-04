import './App.css';
import Header from './components/Header';
import SectionDivider from './components/SectionDivider';
import About from './Pages/About';
import Home from './Pages/Home';
import { BluerBackground } from './components/BluerBackground';
import { Projects } from './Pages/Projects';
import { Skills } from './Pages/Skills';
import { Contact } from './Pages/Contact';
import { ThemeSwitch } from './components/ThemeSwitch';
import { GitHubCalendarSec } from './components/GitHubCalendarSec';


function App() {
  return (
    <>
      <BluerBackground />
      <Header />
      <Home />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <GitHubCalendarSec/>
      <ThemeSwitch/>
    </>
  );
}

export default App;
