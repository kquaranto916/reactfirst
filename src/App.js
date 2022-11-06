import logo from './rwulogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Advising Assistant
        </h1>
      <header>
        <subheading className="subheader">
            Welcome!
        </subheading>
      </header>
      </header>
    <div class="dropdown">
      <button class="dropbtn">Majors</button>
      <div class="dropdown-content">
        <a href="#">CM</a>
        <a href="#">COSMC</a>
        <a href="#">ENG</a>
      </div>
    </div>
  </div>
  );
}

export default App;
