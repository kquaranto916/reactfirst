import logo from './rwulogo.png';
import './Course.css';

const Course = () => {
  return (
    <div className="Course">
      <header className="Course-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Courses
        </h1>
      </header>
      <subheading className="subheader">
            Plan Your Schedule Here!
      </subheading>
  </div>
  );
}
export default Course;