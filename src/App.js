import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Features from './components/Features/Features';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div>
     <NavBar />
     <Header />
     <Register />
     <Features />
     <Clients />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
