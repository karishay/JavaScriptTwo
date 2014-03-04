var studentCount = 0;
var button = document.getElementById("set_student_count");

function countEvent() {
    // retrieving the current count (if blank, studentCount has been set to 0 )
    var countVar = document.getElementById("count");
    // retrieving the value of form
    var inputVal = document.getElementById("student_count").value;
    // updating studentCount by inputVal. Passed through parseInt so that it's a number!
    studentCount += Number(inputVal);
    // Updating the HTML (the div id of count) so the current count displays. 
    countVar.innerHTML = Number(studentCount);
    // resetting the value of the form to 0
    document.getElementById("student_count").value = 0;
}

button.addEventListener("click", countEvent);

var sortButton = document.getElementById("sort_student");
var houses = {"Gryffindor":[], "Hufflepuff":[], "Ravenclaw":[], "Slytherin": [], "DeathEaters":[]};
console.log(houses);
var listOfHouses = Object.keys(houses);
console.log(listOfHouses);



function sortStudents() {
    var studentName = document.getElementById("student_name");
    var randNum = Math.random() * 5;
    //this will correlate to an index in our list of keys (houses)   
    var randIndex = Math.floor(randNum);
    //randomly pick a house 
    var randHouse = listOfHouses[randIndex];
    console.log(randHouse);
    //define the capacity of the house
    var capacity = studentCount/listOfHouses.length;
    console.log(capacity);
    //check if the capacity of the house if full
    if (houses[randHouse].length < capacity){
        //add the student to the house in HTML
        var studentNode = document.getElementById(randHouse);
        studentNode.innerHTML += "<br>" + studentName.value;
        //add the student to the dictionary list for that house
        houses[randHouse].push(studentName.value);
        //decrease the student count by one
        studentCount -= 1;
    } else {
        sortStudents();
    }
}

sortButton.addEventListener("click", sortStudents);