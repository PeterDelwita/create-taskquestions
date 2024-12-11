# 2024 AP Computer Science Principles Free-Response Questions: Set 1

## AP® Computer Science Principles Written Response Prompts

### Instructions:

- **Time:** 1 hour
- **Questions:** 2
- Read each question carefully and completely.
- Write your response in the space provided for each question in the Written Response booklet.
- You may plan your answers in this orange booklet, but no credit will be given for anything written in this booklet. You will only earn credit for what you write in the separate Written Response booklet.

---

### Pre-FRQ Practice

--Butter's Code--
DOMSelectors.resetHistoryButton.addEventListener("click", function () {
resetHistory();
});
const resetHistory = function () {
DOMSelectors.mainOutput.innerHTML = ""; // Clear previous quote
if (quoteCurrent.length > 0) {
for (let i = 0; i < quoteCurrent.length; i++) {
const quote = quoteCurrent[i];
createQuoteCard(quote);
}
}
};

--Evan's Code--
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

## Identify the Algorithm present in the JavaScript Files.

### Aspects of Algorithm

Sequencing
Selection
Iteration

### Question 1

Programs accept input to achieve their intended functionality. **Describe at least one valid input to your program and what your program does with that input.**

-- Butter's File --
DOMSelectors.userAge is a valid input and is inputted into a form that generates a quote based on the user's age (young or old) and feelings, such as happiness. In particular, DOMSelectors.userAge is used to set up the variable valueUserAge in the form's event listener and is then used to log a different quote depending on whether the user is young or old, which is denoted by valueUserAge.

-- Evan's File --
DOMSelectors.userInput.value is a valid input because this info is being submitted to a form; it is set to the variable inputtedToDo, which is pushed to the list ToDoItems, which is displayed just before the input value is cleared. In particular, the info is displayed with a function that uses an array to create cards of each to-do based on each input.

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

---

### Question 2

Refer to your Personalized Project Reference when answering this question.

#### Part (a):

Consider the first iteration statement included in the Procedure section of your Personalized Project Reference. **Describe what is being accomplished by the code in the body of the iteration statement.**

-- Butter's Code --
The iteration statement creates quote cards for each current quote, provided the length is above zero.

-- Evan's Code --
The iteration statement removes the quote cards it iterates through in the function removeToDo.

#### Part (b):

Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference.

- Write two calls to your procedure that each cause a different code segment in the procedure to execute.
  -- Butter --
  retrieveFeelingQuote(happiness) - Creates quote cards that have happiness defines as their category.
  retrieveFeelingQuote(fhfuewi) - Generates an error message because fhfuewi is not defined as a category, so cards cannot be made.

  -- Evan --
  removeToDo() does not accept any arguments, making it impossible to make two calls executing two different parts of the code.

- Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.

#### Part (c):

Suppose another programmer provides you with a procedure called `checkValidity(value)` that:

- Returns `true` if a value passed as an argument is considered valid by the other programmer.
- Returns `false` otherwise.

--Butter--
Iterate through the QuoteCurrent list using the filter and forEach array method and quoteCurrent[i] and for each of them, run createQuoteCard. In the filter array, if a quote is found not to have a quote, author, or category, the function should return false. Otherwise, it should return true.

--Evan--
Iterate through the toDoItems list and use the filter and forEach array methods. The filter method should filter out any values that are not strings or have less than one character, while the forEach option should be used to call addToDo. If the filter method detects any non-strings or blank values, it should return false. Otherwise, it should return true.

Using the list identified in the List section of your Personalized Project Reference, **explain in detailed steps an algorithm that uses `checkValidity` to check whether all elements in your list are considered valid by the other programmer.** Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses `checkValidity`.

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

---

### End of Exam
