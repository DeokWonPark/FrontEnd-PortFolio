import './app.css';
import Header from './components/header/header';
import Introduce from './components/introduce/introduce';
import Skills from './components/skills/skills';

function App() {
  return <section className="inner">
    <Header></Header>
    <Introduce></Introduce>
    <Skills></Skills>
  </section>;
}

export default App;
