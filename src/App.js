import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import Navs from './components/Navbar/Navs';
import Header from './components/Home/Header';
function App() {
  return (
    <>
      <Navs />
      <Header />
      <Home />
    </>
  );
}

export default App;
