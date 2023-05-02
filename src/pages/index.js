//inital interface display, drop downs, etc, ReactJS above 
import React, { useState } from 'react';
import logo from './RWUlogo.png';
import './index.css';
import logo2 from './AdvA.png';

  //new save functions
  /*this code is using controlled instead of uncontrolled components
  in order to print out the values for clicked dropdown values.
  Still needs to write console log or handlechange to a variable
  if variable == COMSC BS -> import this excel sheet
  */

  const variable = "";

  export default class App extends React.Component {
      constructor() {  
       super();  
       this.state = {selectValue: ''};  // initial state value
       this.variable = variable;
    }  


    //const [message, setMessage] = useState('');

    //const [updated, setUpdated] = useState(message);

    // Handles state change
    handleChange = (event) => {
      //this.setState({selectValue: event.target.value}, ()=> {alert(`Value: ${this.state.selectValue}`)});
      this.setState({variable: event.target.value})
      } 
    handleChange1 = (event) => {
      this.setState({selectValue: event.target.files[0]}, ()=> {alert(`Value: ${this.state.selectValue}`)});
    }
    

    render() {
      return (
        <div className="App">
          <header className="App-header">  
          <img src={logo} className="App-logo" alt="logo"/>
            <h1>
              <img src={logo2} className="AdvA-logo" alt="logo2" />
            </h1>
          <header>
            <subheading className="subheader">
              Welcome!
            </subheading>
          </header>
          <header>
            <p className='description1'>
              Fill in the dropdown boxes below with the appropriate information and then press save to create a new schedule!
            </p>
          </header>
          </header>
{/*drop downs*/}
          <div className='major'>
            <select onChange={this.handleChange}  id="major">
            <option value="Select Major">Select Major</option>
              <option value="COMSC BA">COMSC BA</option>
              <option value="COMSC BS">COMSC BS</option>
              <option value="CM">CM</option>
              <option value="ENGR">ENGR</option>
            </select>
          </div>

          <div className='minor'>
            <select onChange={this.handleChange}  id="minor">
              <option value="Select Minor">Select Minor</option>
              <option value="MATH">MATH</option>
              <option value="COMSC">COMSC</option>
              <option value="MANAGEMENT">MANAGEMENT</option>
              <option value="CM">CM</option>
              <option value="BIOMECHANICS">BIOMECHANICS</option>
              <option value="ENVIRONMENTAL ENGR">ENVIRONMENTAL ENGR</option>
              <option value="ROBOTICS">ROBOTICS</option>
              <option value="STRUCTURAL ENGR">STRUCTURAL ENGR</option>
              <option value="BUSINESS ANALYTICS">BUSINESS ANALYTICS</option>
            </select>
          </div>

          <div className='core'>
            <select onChange={this.handleChange}  id="core">
              <option value="Select Core Concentration">Select Core Concentration</option>
              <option value="COMSC">COMSC</option>
              <option value="MATH">MATH</option>
              <option value="NONE">NONE</option>
            </select>
          </div>

          <div className='spec'>
            <select onChange={this.handleChange}  id="spec">
              <option value="Select Specialization">Select Specialization</option>
              <option value="CIVIL ENGR">CIVIL ENGR</option>
              <option value="COMPUTER ENGR">COMPUTER ENGR</option>
              <option value="CUSTOM ENGR">CUSTOM ENGR</option>
              <option value="ELECTRICAL ENGR">ELECTRICAL ENGR</option>
              <option value="ENVIRONMENTAL ENGR">ENVIRONMENTAL ENGR</option>
              <option value="MECHANICAL ENGR">MECHANICAL ENGR</option>
              <option value="CUSTOM COMSC">CUSTOM COMSC</option>
              <option value="DATA SCIENCE COMSC">DATA SCIENCE COMSC</option>
              <option value="DIGITAL SYSTEMS COMSC">DIGITAL SYSTEMS COMSC</option>
              <option value="HUMAN CENTERED COMPUTING COMSC">HUMAN CENTERED COMPUTING COMSC</option>
              <option value="MATHEMATICS COMSC">MATHEMATICS COMSC</option>
              <option value="NONE">NONE</option>
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
          <input type="file" onChange={this.handleChange1}/>
        </form>
        </div>
      );
    }
  }
  //export default Home;
