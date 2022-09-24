import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Work/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
