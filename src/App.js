import logo from './rwulogo.png';
import './App.css';
import './myFunction.js'; 

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
      <button onclick="myFunction()" class="dropbtn">Majors</button>
      <div id = "myDropdown" class="dropdown-content">
        <a href="#">CM</a>
        <a href="#">COSMC</a>
        <a href="#">ENG</a>
      </div>
    </div>

    <div class="dropdown2">
      <button onclick="myFunction()" class="dropbtn2">Minors</button>
      <div id = "myDropdown" class="dropdown-content2">
        <a href="#">MATH</a>
        <a href="#">COSMC</a>
        <a href="#">MANAGEMENT</a>
        <a href="#">BUSINESS ANALYTICS</a>
      </div>
    </div>

  </div>
  );
}
export default App;