import logo from './rwulogo.png';
import './App.css';
import React from 'react';

const App = () => {
  /*opens major dropdown*/
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };

  const handleMenuThree = () => {
    console.log('clicked three');
  };

  const handleMenuFour = () => {
    console.log('clicked four');
  };

  /*opens minor dropdown*/
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(!open2);
  };

  const handleMinor1 = () => {
    console.log('clicked one');
  };

  const handleMinor2 = () => {
    console.log('clicked one');
  };

  const handleMinor3 = () => {
    console.log('clicked one');
  };

  const handleMinor4 = () => {
    console.log('clicked one');
  };

  const handleMinor5 = () => {
    console.log('clicked one');
  };

  const handleMinor6 = () => {
    console.log('clicked one');
  };

  const handleMinor7 = () => {
    console.log('clicked one');
  };

  const handleMinor8 = () => {
    console.log('clicked one');
  };

  const handleMinor9 = () => {
    console.log('clicked one');
  };

  /*opens core concentration dropdown*/
  const [open3, setOpen3] = React.useState(false);

  const handleOpen3 = () => {
    setOpen3(!open3);
  };

  const handleCore1 = () => {
    console.log('clicked one');
  };

  const handleCore2 = () => {
    console.log('clicked one');
  };

  const handleCore3 = () => {
    console.log('clicked one');
  };

  /*opens specialization dropdown*/
  const [open4, setOpen4] = React.useState(false);

  const handleOpen4 = () => {
    setOpen4(!open4);
  };

  const handleSpec1 = () => {
    console.log('clicked one');
  };

  const handleSpec2 = () => {
    console.log('clicked one');
  };

  const handleSpec3 = () => {
    console.log('clicked one');
  };

  const handleSpec4 = () => {
    console.log('clicked one');
  };

  const handleSpec5 = () => {
    console.log('clicked one');
  };

  const handleSpec6 = () => {
    console.log('clicked one');
  };

  const handleSpec7 = () => {
    console.log('clicked one');
  };

  const handleSpec8 = () => {
    console.log('clicked one');
  };

  const handleSpec9 = () => {
    console.log('clicked one');
  };

  const handleSpec10 = () => {
    console.log('clicked one');
  };

  const handleSpec11 = () => {
    console.log('clicked one');
  };

  const handleSpec12 = () => {
    console.log('clicked one');
  };

  const handleSpec13 = () => {
    console.log('clicked one');
  };

  /*implements the heading and main layout of the website*/
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

    <Dropdown
      open={open}
      trigger={<button onClick={handleOpen}>Majors</button>}
      menu={[
        <button onClick={handleMenuOne}>COMSC BA</button>,
        <button onClick={handleMenuTwo}>COSMC BS</button>,
        <button onClick={handleMenuThree}>CM</button>,
        <button onClick={handleMenuFour}>ENGR</button>
      ]}
    />
    
    <Dropdown2
      open2={open2}
      trigger2={<button onClick={handleOpen2}>Minors</button>}
      minor={[
        <button onClick={handleMinor1}>MATH</button>,
        <button onClick={handleMinor2}>COSMC</button>,
        <button onClick={handleMinor3}>MANAGEMENT</button>,
        <button onClick={handleMinor4}>CM</button>,
        <button onClick={handleMinor5}>BIOMECHANICS</button>,
        <button onClick={handleMinor6}>ENVIRONMENTAL ENGR</button>,
        <button onClick={handleMinor7}>ROBOTICS</button>,
        <button onClick={handleMinor8}>STRUCTURAL ENGR</button>,
        <button onClick={handleMinor9}>BUSINESS ANALYTICS</button>
      ]}
    />

    <Dropdown3
      open3={open3}
      trigger3={<button onClick={handleOpen3}>Core Concentration</button>}
      core={[
        <button onClick={handleCore1}>MATH</button>,
        <button onClick={handleCore2}>COSMC</button>,
        <button onClick={handleCore3}>NONE</button>
      ]}
    /> 
    <Dropdown4
      open4={open4}
      trigger4={<button onClick={handleOpen4}>Specialization</button>}
      spec={[
        <button onClick={handleSpec1}>CIVIL ENGR</button>,
        <button onClick={handleSpec2}>COMPUTER ENGR</button>,
        <button onClick={handleSpec3}>CUSTOM ENGR</button>,
        <button onClick={handleSpec4}>ELECTRICAL ENGR</button>,
        <button onClick={handleSpec5}>ENVIRONMENTAL ENGR</button>,
        <button onClick={handleSpec6}>MECHANICAL ENGR</button>,
        <button onClick={handleSpec7}>CUSTOM COMSC</button>,
        <button onClick={handleSpec8}>DATA SCIENCE COMSC</button>,
        <button onClick={handleSpec9}>DIGITAL SYSTEMS COMSC</button>,
        <button onClick={handleSpec10}>HUMAN CENTERED COMPUTING COMSC</button>,
        <button onClick={handleSpec11}>INTELLIGENT AND AUTONOMOUS SYSTEMS COMSC</button>,
        <button onClick={handleSpec12}>MATHEMATICS COMSC</button>,
        <button onClick={handleSpec13}>NONE</button>
      ]}
    /> 
  </div>
  );
}
/*major dropdown*/
const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

/*minor dropdown*/
const Dropdown2 = ({ open2, trigger2, minor }) => {
  return (
    <div className="dropdown2">
      {trigger2}
      {open2 ? (
        <ul className="minor">
          {minor.map((minorItem, index) => (
            <li key={index} className="minor-item">{minorItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

/*core concentration dropdown*/
const Dropdown3 = ({ open3, trigger3, core }) => {
  return (
    <div className="dropdown3">
      {trigger3}
      {open3 ? (
        <ul className="core">
          {core.map((coreItem, index) => (
            <li key={index} className="core-item">{coreItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

/*specialization dropdown*/
const Dropdown4 = ({ open4, trigger4, spec }) => {
  return (
    <div className="dropdown4">
      {trigger4}
      {open4 ? (
        <ul className="spec">
          {spec.map((specItem, index) => (
            <li key={index} className="spec-item">{specItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;