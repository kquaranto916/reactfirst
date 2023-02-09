import { useState, useEffect } from "react";
import TableRows from "./TableRows";
import './Row.css';
import { utils, writeFile } from "xlsx";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
//https://www.youtube.com/watch?v=F7dQLO5Jhp4

 function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      fullName: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
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
    <>

<div className="one-fa">
  <tr>
  	<th>Year 1 Fall</th>
  </tr>
  <DragDropContext>
  <Droppable droppableid="droppable">
    {(provided) => (
      <ul className="list"{...provided.droppableProps} ref={provided.innerRef}>
        <li {...provided.droppableProps} {...provided.dragHandleProps}> 
    <div className ='one'>
        <td>
          <input
            type="text"
            placeholder="comsc 110 lab 01"
            //value={salary}
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
            //value={salary}
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
            //value={salary}
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
            //value={salary}
            //onChange={(evnt) => handleChange(index, evnt)}
            name="salary"
            className="form-control"
          />{" "}
        </td>  
    </div>
    </li>
    </ul>
    )}
    </Droppable>
    </DragDropContext>
    <th>
        <button className="btn btn-outline-success" onClick={addTableRows}>
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
<tr>
  	<th>Year 1 Spring</th>
  </tr>
    <div className ='oneSPR'>
        <td>
          <input
            type="text"
            placeholder="comsc 110 lab 01"
            //value={salary}
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
            //value={salary}
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
            //value={salary}
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
            //value={salary}
            //onChange={(evnt) => handleChange(index, evnt)}
            name="salary"
            className="form-control"
          />{" "}
        </td>
        
    </div>
    <th>
      <button className="btn btn-outline-success" onClick={addTableRows}>
        +
      </button>
    </th>
</div>
      <span>
        <button onClick={handleClick} className="btn btn-danger btn-sm">
          Submit
        </button>
      </span>
    </>
  );
}

export default AddDeleteTableRows;