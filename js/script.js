//You can get elements by class name
// Get element by ID's
let getName = document.getElementById("getName").addEventListener("click", function () {
    // Call funtion to generate word
    randomNameGenerator();
});

let selectedName = "";
let nameDisplay = document.getElementById("nameDisplay");

// Create a Name Bank
let students = ["Adrian Segura", "AJay Olmos", "Alex Ato", "Anothay Chansy", "Bryan Stewart", "Carlos Gonzalez",
    "Christy Eang", "Demitrius Ovro", "Dylan McFarlin", "Hugo Mejia", "John Shamoon", "Jorge lopez", "Joseph Racca",
    "Juan Morales", "Kenneth Martinez", "Leopoldo Manzo", "Matthew Mendoza", "Sean Chandler", "Trevor Womack Jr.",
    "Tyler Rose", "Victor Maldonado"];


function randomNameGenerator() {
    // We are grabbing a random name from the array
    selectedName = students[Math.floor(Math.random() * students.length)];
    // alert(selectedWord);
    nameDisplay.innerText = selectedName;
};


// DOM Manipulation Notes


let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");

let classroom = [];



inputText.addEventListener("keypress", function (e) {
    // console.log(e);
    if (e.code == "Enter") {
        // console.log(inputText.value)
        appendElements(inputText.value);
    }
});

function appendElements(studentList) {
    console.log(studentList);
    // let ulElement = document.createElement("ul");
    let liElement = document.createElement("li");

    students.splice(0, 0, studentList);

    liElement.innerText = studentList + " was added to the student list.";
    // outputText.setAttribute("class", " d-flex justify-content-center");
    liElement.addEventListener("click", function (e) {
        e.target.remove();
    })


    // ulElement.appendChild(liElement);
    outputText.appendChild(liElement);
    inputText.value = "";

    classroom.push(studentList);

    localStorage.setItem("Students", JSON.stringify(classroom));
}

