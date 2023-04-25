import React from 'react';
import logo from './rwulogo.png';
import './Courses.css';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import initialData1 from './initial-data-CSBA';
import initialData2 from './initial-data-CSBS';
import initialData3 from './initial-data-CM';
import initialData4 from './initial-data-E';
import Column from './columns';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactConfetti from 'react-confetti';
import {useEffect, useState} from 'react';

const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
  width: 40%;
  padding-left: 30%;
  display: inline-block;
  align-items: center;
`;


//will have to use window.location.origin for actual deployment but also switch depedning in the intial data file being used
const CM_FILE = 'http://localhost:3000/CourseNew/initial-data-CM.js'

const Courses1 = () =>{
  //will likely have to download as JSON and convert on re-upload, heres a source: https://www.geeksforgeeks.org/how-to-save-new-state-to-local-json-using-reactjs/
  //This one too: https://plainenglish.io/blog/how-to-create-download-and-upload-files-in-react-apps
  

//download file
const downloadFileAtURL = (url) => {
  // used this tutorial: https://www.youtube.com/watch?v=IPEqb_AJbAQ
  fetch(url).then(respons=> Response.blob()).then(blob=> {
    const blobURL = window.URL.createObjectURL(new Blob([blob]))
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href=blobURL;
    aTag.setAttrubute("dowload",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  })
  
};

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
    state = initialData3;

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
        <header className="Course-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Advising Assistant
          </h1>
        </header>
      {/*confetti*/}
      <div className='confetti'>
        <button onClick={()=> {setBtn(!Btn); downloadFileAtURL(CM_FILE);}}>Download!</button>
        {Btn && 
        <ReactConfetti
        height={windowDim.height}
        width={windowDim.width}
        />}
    </div>
    {/*confetti*/}
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

//ReactDOM.render(<App />, document.getElementById('root'));

};
export default Courses1;

