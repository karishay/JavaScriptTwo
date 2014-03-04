var studentCount = 0;
var capacity = 0;
var totalStudents = 0;

var button = document.getElementById("set_student_count");

function countEvent() {
    // retrieving the current count (if blank, studentCount has been set to 0 )
    var countVar = document.getElementById("count");
    // retrieving the value of form
    var inputVal = document.getElementById("student_count").value;
    // updating studentCount by inputVal. Passed through parseInt so that it's a number!
    totalStudents += Number(inputVal);
    studentCount += Number(inputVal);
    console.log(studentCount);
    capacity = Math.floor(totalStudents/5);
    console.log(capacity);
    // Updating the HTML (the div id of count) so the current count displays. 
    countVar.innerHTML = "The current amount of students that need to be sorted: " + Number(studentCount);
    // resetting the value of the form to 0
    document.getElementById("student_count").value = 0;
}

button.addEventListener("click", countEvent);

var sortButton = document.getElementById("sort_student");
var houses = {"Gryffindor":[], "Hufflepuff":[], "Ravenclaw":[], "Slytherin": [], "DeathEaters":[]};
console.log(houses);
var listOfHouses = Object.keys(houses);
console.log(listOfHouses);

function generateRandomHouse(){
 var randNum = Math.random() * 5;
    //this will correlate to an index in our list of keys (houses)   
    var randIndex = Math.floor(randNum);
    //randomly pick a house 
    var randHouse = listOfHouses[randIndex];
    return randHouse;
}

//Now, for reals it works. 
function sortStudents() {
    console.log("this is the new student count" + studentCount);
    var studentName = document.getElementById("student_name");

    console.log("This is the capacity: " + capacity);

    if (studentCount !== 0){
        var randHouse = generateRandomHouse();
        
        console.log("The house we selected is: " + randHouse);
        while (houses[randHouse].length == capacity) {
            console.log("The " + randHouse + " was full");
            randHouse = generateRandomHouse();
            console.log("The new random house is: " + randHouse);
        }
        //add the student to the house in HTML      
        var studentNode = document.getElementById(randHouse);
        studentNode.innerHTML += "<br>" + studentName.value;
        //add the student to the dictionary list for that house
        houses[randHouse].push(studentName.value);
        //decrease the student count by one
        studentCount -= 1;
        console.log("The number of students in the house should be: " + houses[randHouse].length);
    } else {
        var sortNode = document.getElementById("sort");
        sortNode.innerHTML += "There are no more students to sort. Waaa Waaaah.";
    }
}

sortButton.addEventListener("click", sortStudents);