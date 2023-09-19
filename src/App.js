import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionDivider from './components/SectionDivider';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <div className='relative'>
        <div className="text-gray-950">
          <div className='bg-[#ea755243] absolute top-[-6rem] -z-[10] right-[11rem] h-[31.25rem] 
          w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        </div>
        <div className="text-gray-950">
          <div className='bg-[#6858e354] absolute top-[-1rem] -z-[10] left-[-35rem] h-[31.25rem] 
          w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        </div>
      </div>
      <Header />
      <Home/>
      <div className='flex items-center justify-center'>
        <SectionDivider />
      </div>
      <About/>

    </>
  );
}

export default App;
