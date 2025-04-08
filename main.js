let myBtn = document.getElementById("ajouterTache");
let inputAdd = document.getElementById("taskInput");
let inputTitle = document.getElementById("titreListe");
let taskContainer = document.getElementById("task-container");
let listTitle = document.getElementById("titredeliste");




myBtn.addEventListener("click", function () {
    let inputValue = inputAdd.value;
    if (inputValue !== "" && inputTitle.value !== "") {
        newTask = document.createElement("input");
        newTask.type = "checkbox";
        newTask.className = "checkbox";
        newTask.value = inputValue; 
        newTask.id = inputValue;
        
        newLabel = document.createElement("label");
        newLabel.innerHTML = inputValue;
        newLabel.className = "label";
        newLabel.setAttribute("for", inputValue);
        
        
        taskContainer.append(newTask, newLabel);
        listTitle.innerHTML = inputTitle.value;
    } else if (inputTitle.value === "") {
        alert("Veuillez entrer un titre de liste.");

        } else {

        alert("Veuillez entrer une tâche.");
        }

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                checkbox.parentNode.style.textDecoration = "line-through";
            } else {
                checkbox.parentNode.style.textDecoration = "none";
            }
        });
    });


