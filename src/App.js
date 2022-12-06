import logo from './rwulogo.png';
import './App.css';
import React from 'react';

// test
const App = () => {
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
  </div>
  );
}
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

export default App;