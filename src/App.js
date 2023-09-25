import './App.css';
import Header from './components/Header';
import SectionDivider from './components/SectionDivider';
import About from './Pages/About';
import Home from './Pages/Home';
import { BluerBackground } from './components/BluerBackground';

function App() {
  return (
    <>
      <BluerBackground/>
      <Header />
      <Home/>
      <SectionDivider/>
      <About/>

    </>
  );
}

export default App;
