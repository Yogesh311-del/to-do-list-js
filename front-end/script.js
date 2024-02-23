const inputBox = document.getElementById("input-box");
const inptBox = document.getElementById("inpt-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(inputBox.value === '' || inptBox.value === ''){
        alert("You must write something!");
        return;
    }

    const listItem = document.createElement("li");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    // taskDiv.setAttribute('class','task');

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("del-btn");
    // btnDiv.setAttribute('class','del-btn');

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = inputBox.value;

    const taskDescription = document.createElement("span");
    taskDescription.textContent = inptBox.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-"; 
    deleteButton.onclick = function() {
        listItem.remove();
        saveData(); // Save data after deletion
    };

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);
    btnDiv.appendChild(deleteButton);

    listItem.appendChild(taskDiv);
    listItem.appendChild(btnDiv);

    taskList.appendChild(listItem);  

    inputBox.value = "";
    inptBox.value = "";
    saveData(); // Save data after addition
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");

    // Reattach event listeners to delete buttons
    const deleteButtons = document.querySelectorAll("#task-list li button");
    deleteButtons.forEach(button => {
        button.onclick = function() {
            button.parentNode.parentNode.remove();
            saveData(); // Save data after deletion
        };
    });
}

showTask();

// localStorage.clear();







// const inputBox = document.getElementById("input-box");
// const inptBox = document.getElementById("inpt-box");
// const taskList = document.getElementById("task-list");

// function addTask(){
//     if(inputBox.value === '' || inptBox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let divi=document.createElement("div");
//         let divj=document.createElement("div");

//         divi.setAttribute('class','divi')
//         divj.setAttribute('class','divj')



//         let listItem = document.createElement("li");

//         let head = document.createElement("h3");
//         head.textContent = inputBox.value;
                
//         let span = document.createElement("span");
//         span.textContent = inptBox.value;


//         divi.appendChild(head);
//         divi.appendChild(span);



//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "-"; 

//         divj.appendChild(deleteButton);
//         deleteButton.onclick = function() {
//             listItem.remove();
            
//         };

//         listItem.appendChild(divi);
//         listItem.appendChild(divj);

//         taskList.appendChild(listItem);  

//         inputBox.value = "";
//         inptBox.value = "";
//         saveData();  
//     }     
// }

// function saveData(){
//     localStorage.setItem("data", taskList.innerHTML);

// }
// function showTask(){
//     taskList.innerHTML = localStorage.getItem("data");
//     deleteButton.onclick = function() {
//         listItem.remove();
//     }   
// }
// showTask();


    