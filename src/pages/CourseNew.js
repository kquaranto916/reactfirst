import React from 'react';
import logo from './rwulogo.png';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import initialDataCSBA from './initial-data-CSBA';
import Column from './columns';
import './Courses.css';
import { DragDropContext } from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
`;
const Courses1 = () => {
class App extends React.Component {
    state = initialDataCSBA;

  onDragEnd = result => {
    const {destination, source, draggableId} = result;
  
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

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

    //Moving from one list to another
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
        <div className="Year">
          <h2>Year 1</h2>
        </div>
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

ReactDOM.render(<App />, document.getElementById('root'));
}
export default Courses1;