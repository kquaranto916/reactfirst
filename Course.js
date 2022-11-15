import logo from './rwulogo.png';
import './Course.css';

function Course() {
  return (
    <div className="Course">
      <header className="Course-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Advising Assistant
        </h1>
      </header>
  </div>
  );
}
export default Course;