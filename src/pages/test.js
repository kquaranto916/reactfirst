import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import importExcel from './importExcel';
import logo from './rwulogo.png';
import download from './download.png';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


importExcel('Computer Science BS');

class App extends React.Component {
    state = initialData;
    render() {

        return this.state.columnOrder.map((columnID) => {
            const semester = this.state.semesters[id];
            const classes = semester.classIds.map(taskID => this.state.classes[id]);

            return semester.id;


        });

    }
}

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



ReactDOM.render(<App />, document.getElementById('root'));
export default Test;

