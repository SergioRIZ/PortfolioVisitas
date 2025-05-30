import './App.css';
import Header from './assets/Componentes/Header';
import Navbar from './assets/Componentes/Navbar';
import About from './assets/Componentes/About';
import Projects from './assets/Componentes/Project';
import Contact from './assets/Componentes/Contact';

function App() {
  return (
    <>
      {/* Header principal */}
      <Header/>
      
      {/* Navbar fijo que aparece al hacer scroll */}
      <Navbar/>
      
      {/* Componentes existentes */}
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App;