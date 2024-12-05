import { DOMSelectors } from "./dom.js";
import "../css/style.css";

const ToDoItems = [];

function addToDo(event) { // Adds inputs to a to-do list
  DOMSelectors.toDoList.innerHTML = "";
  const inputtedToDo = DOMSelectors.userInput.value; // DOMSelectors.userInput.value is a valid input because this info is being submitted to a form; it is set to the variable inputtedToDo, which is pushed to the list ToDoItems, which is displayed just before the input value is cleared. In particular, the info is displayed with a function that uses an array to create cards of each to-do based on each input.
  event.preventDefault();
  ToDoItems.push(inputtedToDo);
  displayToDoList(ToDoItems);
  DOMSelectors.userInput.value = "";
}

function displayToDoList(array) {
  array.forEach((inputs) => {
    DOMSelectors.toDoList.insertAdjacentHTML(
      "beforeend",
      `<div class="card"><div class = "to-do-card">${inputs}</div>
    <button type ="submit" class="remove-button" id="remove-reminder"> Remove </button>
    </div>`
    );
  });
  const removeButton = document.querySelectorAll(".remove-button");
  removeButton.forEach((button) => {
    button.addEventListener("click", removeToDo);
  });

  function removeToDo() {
    const specificCard = this.parentElement;
    const specificCardText =
      specificCard.querySelector(".to-do-card").textContent;

    for (let i = 0; i < ToDoItems.length; i++) {
      if (ToDoItems[i] === specificCardText) {
        ToDoItems.splice(i, 1);
        break;
      }
    }
    specificCard.remove();
  }
}

DOMSelectors.submitButton.addEventListener("click", addToDo);
