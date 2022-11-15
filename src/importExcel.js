//This should be able to import excel files so that they can be read through and create objects from
//type nmd install read-excel-file if need be

const xlsxFile = require('read-excel-file/node');

var semesterCount = 0;
var i = 0;
xlsxFile('./src/Requirements.xlsx')
.then((rows) => {
    rows.forEach((row) => {
      row.forEach((cell) => {
        
        if (cell.includes("Year")){
            //while listing column headers create semester set up
            semesterCount ++;

        } else {
            if (cell != null){
                //if it has data validation create with drop down in semester i

                //else create drag and drop object in semester i
                
            }
            

            //increment i so that obbjects are put in correct semester
            i++;
            //reset i at semester max so it goes back to beginning 
            if (i > semesterCount)
                i = 0;
        }
        
        
        console.log(cell);
      });
    });
  }); 

