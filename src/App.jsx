import "./App.css";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import Conact from './components/contact/Conact';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skill/>
      <Project/>
      <Conact/>
      <Footer/>
    </>
  );
}

export default App;
