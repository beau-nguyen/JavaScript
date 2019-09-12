// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Console.log the table data from data.js
console.log(data);

 // build table
// table report values (date, city, state, country, shape, duration, comments)
function displaytable(data){
 tbody.html("");
 data.forEach(function(Table) {
     console.log(Table);
     var row = tbody.append("tr");
     Object.entries(Table).forEach(function([key, value]) {
       console.log(key, value);
       // Append a cell to the row for each value
       // in the weather report object
       var cell = row.append("td");
       cell.text(value);
     });
   });
}
//call a function name clickme

function clickme(){
 d3.event.preventDefault();
 var userdate= d3.select("#datetime").property("value");
 let filterrecord= tableData;
 if (userdate){
   filterrecord= filterrecord.filter(element=>element.datetime === userdate);
 }
 displaytable(filterrecord);
}
d3.selectAll("#filter-btn").on("click",clickme);
displaytable(tableData);