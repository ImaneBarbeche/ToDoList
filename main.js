 class Task {
      constructor(name, index) {
        this.name = name;
        this.completed = false;
        this.index = index;
      }

      toggle() {
        this.completed = !this.completed;
      }
    }

    class TaskList {
      constructor() {
        this.tasks = [];
        this.taskList = document.getElementById('task-container');
        this.button = document.getElementById('ajouterTache');
        this.input = document.getElementById('taskInput');

        this.button.addEventListener('click', () => {
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
        const index = this.tasks.length;
        const task = new Task(taskName, index);
        this.tasks.push(task);
        this.render();
      }

      render() {
        // Vider l'affichage actuel
        this.taskList.innerHTML = "";

        // Afficher chaque tâche
        this.tasks.forEach((task, index) => {
          const taskElement = document.createElement("div");
          taskElement.className = "task-item";
          if (task.completed) taskElement.classList.add("completed");
          
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = task.completed;
          checkbox.addEventListener("change", () => {
            task.toggle();
            this.render();
          });

          
          const label = document.createElement("label");
          label.textContent = task.name;

          
          const button = document.createElement("button");
          button.className = "btnSupprimer";
          button.textContent = "Supprimer";
          button.addEventListener("click", () => {
            this.tasks.splice(index, 1);
            this.render();
          });

          taskElement.append(checkbox, label, button);
          this.taskList.append(taskElement);
        });
      }
    }

    // Initialiser la todo list
    const taskList = new TaskList();