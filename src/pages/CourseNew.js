import React from 'react';
import logo from './RWUlogo.png';
import logo2 from './AdvA.png';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import initialData from './initial-data-CSBA';
import Column from './columns';
import './Courses.css';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactConfetti from 'react-confetti';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {BrowserRouter as Router} from 'react-router-dom';
const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
  width: 40%;
  padding-left: 30%;
  display: inline-block;
  align-items: center;
`;
function Courses1() {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/');    
  }

//confetti 
const [windowDim, setDim] = useState({width: window.innerWidth, height:window.innerHeight});
const detectSize=()=>{
  setDim({width: window.innerWidth, height: window.innerHeight});
}

useEffect(()=>{
    window.addEventListener('resize', detectSize);
    return()=>{
        window.removeEventListener('resize', detectSize);
    }
}, [windowDim]);

const [Btn, setBtn] = useState(false);

//confetti


class App extends React.Component {
    //This is where we state the initial state from the 4 majors
    state = initialData;

  onDragEnd = result => {
    const {destination, source, draggableId} = result;
  
    // if the drog location isn't a droppable, don't change anything
    if (!destination) {
      return;
    }

    /// if the drag location is the same droppable and same index, don't change anything
    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    //if the drag ends in the same droppable, but different index, change the index
    if(start === finish){

    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };
 

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
    return;
    } 

    //Moving from one droppable to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
        <div className="Course">
          <header className='header'>
{/*confetti*/}
<div className='confetti'>
        <button className='Btn-Con' onClick={()=> setBtn(!Btn)}>Download!</button>
        {Btn && 
    <ReactConfetti
        height={2900}
        width={windowDim.width}
        />}
    {/*resetBTN*/}    
    <button className='Btn-Reset' onClick={() => navigate(0)}>Reset Schedule</button>
    </div>      
{/*confetti*/}
          </header>
        <header className="Course-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
          <img src={logo2} className="AdvA-logo" alt="logo2" />
          </h1>
        </header>
      <DragDropContext onDragEnd = {this.onDragEnd}>
        <Container>
      {this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key = {column.id} column = {column} tasks = {tasks} />;
    })}
    </Container>
    </DragDropContext>
    </div>
    
    );
  }
 }
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

};
export default Courses1;
