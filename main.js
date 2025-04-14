class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
    this.taskList = document.getElementById("task-container");
    this.button = document.getElementById("ajouterTache");
    this.input = document.getElementById("taskInput");

    this.button.addEventListener("click", () => {
      const taskName = this.input.value;
      if (taskName !== "") {
        this.addTask(taskName);
        this.input.value = ""; // Réinitialiser l'input
      } else {
        alert("Veuillez entrer une tâche !");
      }
    });
  }

  addTask(taskName) {
    const task = new Task(taskName);
    this.tasks.push(task);
    const taskElement = this.createTaskElement(task, this.tasks.length - 1);
    this.taskList.append(taskElement);
  }

  createTaskElement(task) {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item";
    if (task.completed) taskElement.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.toggle();
      taskElement.classList.toggle("completed", task.completed);
    });

    const label = document.createElement("label");
    label.textContent = task.name;

    const button = document.createElement("button");
    button.className = "btnSupprimer";
    button.textContent = "x";
    button.addEventListener("click", (e) => {
      const i = parseInt(e.target.dataset.index);
      this.tasks.splice(i, 1); // on enlève la tâche du tableau
      const taskElement = e.target.parentElement; // on récupère le <div>
      this.taskList.removeChild(taskElement); // on le supprime du DOM

      this.refreshTaskIndices(); // on met à jour les index des autres

    });

    taskElement.append(checkbox, label, button);
    return taskElement;
  }

  render() {
      this.taskList.innerHTML = ""; // Vider la liste avant de la remplir à nouveau

      this.tasks.forEach((task) => {
          const taskElement = this.createTaskElement(task); // Créer un élément de tâche
          this.taskList.append(taskElement);
      });

      this.refreshTaskIndices(); // Appeler la méthode refreshTaskIndices
  }

  refreshTaskIndices() {
      const taskItems = this.taskList.querySelectorAll(".task-item");
  
      taskItems.forEach((taskEl, newIndex) => {
          const deleteBtn = taskEl.querySelector("button.btnSupprimer");
          if (deleteBtn) {
              deleteBtn.dataset.index = newIndex;
          }
      });
  }
}

// Initialiser la todo list
const taskList = new TaskList();
