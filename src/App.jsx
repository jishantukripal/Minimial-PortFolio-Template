import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center w-full antialiased'>
      <main className='min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:py-20 sm:px-10'>
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Project />
        <Contact />
        <Navbar />
        </main>
    </div>
  )
}

export default App
