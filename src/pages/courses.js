import React from "react";
import logo from './rwulogo.png';
import download from './download.png';
import './Courses.css';
import { useState, useEffect } from "react";
import TableRows from "./TableRows.js";
import './Row.css';
import { utils, writeFile } from "xlsx";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//https://www.youtube.com/watch?v=F7dQLO5Jhp4

function Courses() {
  const [rowsData, setRowsData] = useState([]);

  //add 'course' to table 
  const addTableRows_one = () => {
    const rowsInput = {
      fullName: "",
    };
    console.log('clicked');
    setRowsData([...rowsData, rowsInput]);
  };
  const addTableRows_two = () => {
    const rowsInput = {
      fullName: "",
    };
    console.log('clicked');
    setRowsData([...rowsData, rowsInput]);
  };

  //deletes previous course added, 4 courses are required 
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    console.log('clicked');
  };

  const handleChange = (index, evnt) => {
    const { courseName, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][courseName] = value;
    setRowsData(rowsInput);
  };
  //downloads to excel 
  const handleClick = () => {
    console.log("Submitted", rowsData);
    //rowsData has table info as object array
    var wb = utils.book_new(),
      ws = utils.json_to_sheet(rowsData);
    utils.book_append_sheet(wb, ws, "MySheet1");
    writeFile(wb, `./MyExcel.xlsx`);
    var fd = new FormData();
    fd.append("data", new File([rowsData], "sheetjs.xlsx"));

    /* send data */
    var req = new XMLHttpRequest();
    req.open("POST", `http://localhost:8000/upload`, true);
    req.send(fd);
  };

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
      <div className="one-fa">
        <div className="row1">
          <thead>
            <div className="Fall">
              <tr>Fall</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>
          </thead>
          <div className='one'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>

          <th>
            <button className="btn btn-add-one" onClick={addTableRows_one}>
              +
            </button>
          </th>

          <tbody>
            <TableRows
              rowsData={rowsData}
              deleteTableRows={deleteTableRows}
              handleChange={handleChange}
            />
          </tbody>
        </div>


        <div className="one-sp">
          <thead>
            <div className="Spring">
              <tr>Spring</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>

          </thead>

          <div className='oneSPR'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two-sp">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three-sp">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four-sp">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>

          </div>
          <th>
            <button className="btn btn-add-two" onClick={addTableRows_two}>
              +
            </button>
          </th>
        </div>
      </div>
      <div className="Year">
        <h2>Year 2</h2>
      </div>
      <div className="one-fa">
        <div className="row1">
          <thead>
            <div className="Fall">
              <tr>Fall</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>
          </thead>

          <div className='one'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>

          <th>
            <button className="btn btn-add-one" onClick={addTableRows_one}>
              +
            </button>
          </th>

          <tbody>
            <TableRows
              rowsData={rowsData}
              deleteTableRows={deleteTableRows}
              handleChange={handleChange}
            />
          </tbody>
        </div>

        <div className="one-sp">
          <thead>
            <div className="Spring">
              <tr>Spring</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>

          </thead>

          <div className='oneSPR'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two-sp">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three-sp">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four-sp">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>

          </div>
          <th>
            <button className="btn btn-add-two" onClick={addTableRows_two}>
              +
            </button>
          </th>
        </div>
      </div>


      <div className="Year">
        <h2>Year 3</h2>
      </div>
      <div className="one-fa">
        <div className="row1">
          <thead>
            <div className="Fall">
              <tr>Fall</tr>
              <th>Course &nbsp;</th>
              <th>Credits</th>
            </div>
          </thead>

          <div className='one'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>

          <th>
            <button className="btn btn-add-one" onClick={addTableRows_one}>
              +
            </button>
          </th>

          <tbody>
            <TableRows
              rowsData={rowsData}
              deleteTableRows={deleteTableRows}
              handleChange={handleChange}
            />
          </tbody>

        </div>


        <div className="one-sp">
          <thead>
            <div className="Spring">
              <tr>Spring</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>
          </thead>

          <div className='oneSPR'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two-sp">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three-sp">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four-sp">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>

          </div>
          <th>
            <button className="btn btn-add-two" onClick={addTableRows_two}>
              +
            </button>
          </th>
        </div>
      </div>
      <div className="Year">
        <h2>Year 4</h2>
      </div>
      <div className="one-fa">
        <div className="row1">
          <thead>
            <div className="Fall">
              <tr>Fall</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>
          </thead>

          <div className='one'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four">
            <td>
              <input
                type="text"
                placeholder="comsc 110"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>

          <th>
            <button className="btn btn-add-one" onClick={addTableRows_one}>
              +
            </button>
          </th>

          <tbody>
            <TableRows
              rowsData={rowsData}
              deleteTableRows={deleteTableRows}
              handleChange={handleChange}
            />
          </tbody>

        </div>


        <div className="one-sp">

          <thead>
            <tr className="Spring">

            </tr>

          </thead>
          <thead>
            <div className="Spring">
              <tr>Spring</tr>
              <th>Course&nbsp;</th>
              <th>Credits</th>
            </div>

          </thead>

          <div className='oneSPR'>
            <td>
              <input
                type="text"
                placeholder="comsc 110 lab 01"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="two-sp">
            <td>
              <input
                type="text"
                placeholder="math 136"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="three-sp">
            <td>
              <input
                type="text"
                placeholder="core 103"
                //value={courseName}
                //onChange={(evnt) => handleChange(index, evnt)}
                name="salary"
                className="form-control"
              />{" "}
            </td>
          </div>
          <div className="four-sp">
            <table id='Courses'>
            <td>
              <th>comsc 100</th>
            </td>
            </table>
          </div>
          <th>
            <button className="btn btn-add-two" onClick={addTableRows_two}>
              +
            </button>
          </th>
          
        </div>
      </div>
      <div className="Submit-btn">
      <ReactHTMLTableToExcel 
      className='btnSubmit'
      table='Courses'
      filename='Course Schedule'
      sheet='Sheet'
      buttonText='Submit'
      />      
      <img src={download} alt="download" height='40px' width='40px'/>

      </div>

      
    </div>
  );

};

export default Courses;