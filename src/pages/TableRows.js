function TableRows({ rowsData, deleteTableRows, handleChange }) {
    return rowsData.map((data, index) => {
      const { courseName} = data;
      return (
        <tr key={index}>
          <td>
            <input
              type="text"
              value={courseName}
              onChange={(evnt) => handleChange(index, evnt)}
              courseName="courseName"
              className="form-control"
            />
          </td>
          <td>
            <button className="btn btn-outline-danger" onClick={() => deleteTableRows(index)} >
              x
            </button>
          </td>
          
        </tr>
      );
    });
  }
  
  export default TableRows;
  