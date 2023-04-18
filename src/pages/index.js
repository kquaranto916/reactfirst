import React, { useState } from 'react';
import logo from './RWUlogo.png';
import './index.css';
//import { Confetti } from 'react-dom-confetti';

const Home = () => {
    
//this code allows for the major dropdown to select the major the user picks 
const [major, setMajor] = useState("Select");

function changeMajor(event) {
  console.log(event.target.value);
  setMajor(event.target.value);
}

//this code does the same as major but with minor
const [minor, setMinor] = useState("Select");

function changeMinor(event){
  console.log(event.target.value);
  setMinor(event.target.value);
}

//same as major but with core concentration 
const [core, setCore] = useState("Select");

function changeCore(event){
  console.log(event.target.value);
  setCore(event.target.value);
}

//same as above but with specializations
const [spec, setSpec] = useState("Select");

function changeSpec(event){
  console.log(event.target.value);
  setSpec(event.target.value);
}

/*Upload file button. Allows users to select a file from their directory*/
const [file, setFile] = useState()

function handleChange(event) {
  setFile(event.target.files[0])
}

/*implements the heading and main layout of the website*/
return (
<div className="App">
  <header className="App-header">  
  <img src={logo} className="App-logo" alt="logo"/>
      <h1>
        Advising Assistant
      </h1>
  <header>
      <subheading className="subheader">
          Welcome!
      </subheading>
    </header>

    


    <header>
      <h1 className="dropdownHeader">
        Create New Schedule
      </h1>
    </header>
    <header>
      <p className='description1'>
        Fill in the dropdown boxes below with the appropriate information and then press save to create a new schedule!
      </p>
    </header>
    </header>

  <div className='major'>
    <p>{major}</p>
    <select value={major} onChange={changeMajor}>
      <option>Select Major</option>
      <option>COSMC BA</option>
      <option>COSMC BS</option>
      <option>CM</option>
      <option>ENGR</option>
    </select>
  </div> 

  <div className='minor'>
    <p>{minor}</p>
    <select value={minor} onChange={changeMinor}>
      <option>Select Minor</option>
      <option>MATH</option>
      <option>COMSC</option>
      <option>MANAGEMENT</option>
      <option>CM</option>
      <option>BIOMECHANICS</option>
      <option>ENVIRONMENTAL ENGR</option>
      <option>ROBOTICS</option>
      <option>STRUCTURAL ENGR</option>
      <option>BUSINESS ANALYTICS</option>
    </select>
  </div> 
  
  <div className='core'>
    <p>{core}</p>
    <select value={core} onChange={changeCore}>
      <option>Select Core</option>
      <option>COSMC</option>
      <option>MATH</option>
      <option>NONE</option>
    </select>
  </div> 

  <div className='spec'>
    <p>{spec}</p>
    <select value={spec} onChange={changeSpec}>
      <option>Select Specialization</option>
      <option>CIVIL ENGR</option>
      <option>COMPUTER ENGR</option>
      <option>CUSTOM ENGR</option>
      <option>ELECTRICAL ENGR</option>
      <option>ENVIRONMENTAL ENGR</option>
      <option>MECHANICAL ENGR</option>
      <option>CUSTOM COMSC</option>
      <option>DATA SCIENCE COMSC</option>
      <option>DIGITAL SYSTEMS COMSC</option>
      <option>HUMAN CENTERED COMPUTING COMSC</option>
      <option>MATHEMATICS COMSC</option>
      <option>NONE</option>
    </select>
  </div> 

  <div className='or'>
    <h2>
      OR
    </h2>
  </div>

   <form className='currentSchedule'>
        <h1>Load Current Schedule</h1>
        <p className='description2'>
        Click "Choose file" to upload previously saved file to continue editing and press "Upload" in the top right corner of the screen 
        </p>
        <input type="file" onChange={handleChange}/>
        <button type="submit">Upload</button>
    </form>

    <br/> 
</div>
);
};
 
export default Home;
