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

function generateRandomHouse(){
 var randNum = Math.random() * 5;
    //this will correlate to an index in our list of keys (houses)   
    var randIndex = Math.floor(randNum);
    //randomly pick a house 
    var randHouse = listOfHouses[randIndex];
    return randHouse;
}

function sortStudents() {
    var originalStudentCount = studentCount;
    console.log("this is the original student count" + originalStudentCount);
    var studentName = document.getElementById("student_name");
    var capacity = originalStudentCount/listOfHouses.length;
    console.log("This is the capacity: " + capacity);

    if (originalStudentCount > 1){
        var randHouse = generateRandomHouse();
        console.log("This is the length of the random house" + randHouse.length);
        while (randHouse.length == capacity) {
            randHouse = generateRandomHoue();
        }
        //add the student to the house in HTML      
        var studentNode = document.getElementById(randHouse);
        studentNode.innerHTML += "<br>" + studentName.value;
        //add the student to the dictionary list for that house
        houses[randHouse].push(studentName.value);
        //decrease the student count by one
        studentCount -= 1;
    }

//     var studentName = document.getElementById("student_name");
//     var randHouse = generateRandomHouse();
//     //define the capacity of the house
//     var capacity = studentCount/listOfHouses.length;
//     console.log(capacity);
//     //check if the capacity of the house is full
//     // set a while loop to run until the studentCount is 0
//     if (studentCount !== 0){
//         // if the randomly generated house is not at capacity,
//         // add the student to the house in HTML and to the value in the house
//         // dictionary
//         // Then break the loop.
//         if (houses[randHouse].length < capacity){
//             //add the student to the house in HTML
//             var studentNode = document.getElementById(randHouse);
//             studentNode.innerHTML += "<br>" + studentName.value;
//             //add the student to the dictionary list for that house
//             houses[randHouse].push(studentName.value);
//             //decrease the student count by one
//             studentCount -= 1;
//         } else if (houses[randHouse].length === capacity){
//             randHouse = generateRandomHouse();
//         }
//     }
// }
}

sortButton.addEventListener("click", sortStudents);