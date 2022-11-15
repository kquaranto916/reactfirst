import logo from './rwulogo.png';
import './App.css';
import React from 'react';

function App() {
  function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
  }
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
        <input class="text-box" type="text" placeholder="Select on" readonly></input>
        <div class="options">
          <div onclick="show('COMSC')">COMSC</div>
          <div onclick="show('CM')">CM</div>
          <div onclick="show('ENG')">ENG</div>
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