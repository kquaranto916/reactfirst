import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Courses1 from './pages/CourseNew';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/CourseNew' element={<Courses1/>} />
	</Routes>
	</Router>
);
}

export default App;