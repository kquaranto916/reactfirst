//This should be able to import excel files so that they can be read through and create objects from
//type nmd install read-excel-file if need be
// for now the function just prints to the command line until later use
import initialData from './initial-data';

function importExcel(major){

const xlsxFile = require('read-excel-file/node');

var semesterCount = 0;
var i = 0;
xlsxFile('./src/Requirements.xlsx', {sheet: major})
.then((rows) => {
    rows.forEach((row) => {
      row.forEach((cell) => {
        
        if (cell!= null && cell.includes("Year")){
            //while listing column headers create semester set up
            semesterCount ++;
            initialData.semesters(current => [...current, {id: cell, count:semesterCount, classIds: []}])
            initialData.SemesterOrder(current => [...current, cell])


        } else {
            if (cell != null){
              if (cell.includes(",")){
                //if it has data validation create with drop down in semester i
                //cell.split(",");
                
              } 
                //create drag and drop object in semester i
                initalData.classes(current => [...current,{id: cell, count: semesterCount}])




              
                

            
                
            }
            

            //increment i so that obbjects are put in correct semester
            i++;
            //reset i at semester max so it goes back to beginning 
            if (i > semesterCount)
                i = 0;
        }
        
        
        //console.log(cell);
      });
    });
  }); 
}

/*cases for later use

var major;
//Should be value of dropdown
var dropdownValue = document.getElementByID("myDropdown");
console.log(dropdownValue.options[dropdownValue.selectedIndex].text);


switch(dropdownValue){
  case 'COMSC BA':
    major = 'Computer Science BA';
  case 'COMSC BS':
    major = 'Computer Science BS';
  case 'ENGR': 
    major = 'Engineering'
  case 'CM':
    major = 'Construction Management'
}

importExcel(major);

*/

//importExcel('Engineering');


