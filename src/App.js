import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Courses from './pages/courses';
//save function new elements
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/courses' element={<Courses/>} />
	</Routes>
	</Router>
);
}

export default App;
