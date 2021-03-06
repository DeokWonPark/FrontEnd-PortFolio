import './app.css';
import Edu from './components/edu/edu';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Introduce from './components/introduce/introduce';
import OtherProjects from './components/otherProjects/otherProjects';
import Paper from './components/paper/paper';
import Project from './components/project/project';
// import Seminar from './components/seminar/seminar';
import Skills from './components/skills/skills';

function App() {
  return <section className="inner">
    <Header></Header>
    <Introduce></Introduce>
    <Skills></Skills>
    <Project></Project>
    <OtherProjects></OtherProjects>
    <Paper></Paper>
    <Edu></Edu>
    {/* <Seminar></Seminar> */}
    <Footer></Footer>
  </section>;
}

export default App;
