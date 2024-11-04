import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from './components/SayHello';
import StudentID from './components/StudentID';
import College from './components/College';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>

      
      <h1>Welcome to Fullstack Development - I</h1>

      <h2>React JS Programming Week09 Lab Exercise</h2>

      <Welcome></Welcome>
      <SayHello fname="Liz" lname="Cruz"/>
      <StudentID number="101470163"/>
      <College name="George Brown"/>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
      </a>
      </header>
    </div>
  );
}

export default App;
//</header><img src={logo} alt='App Logo'/>