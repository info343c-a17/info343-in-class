// @ts-check
"use strict";

let state = {
    tasks: [
        {title: "Create tasks as li elements"},
        {title: "Render the tasks as a unordered list on the page"},
        {title: "Learn Event Handling"},
        {title: "Add new task to the list object and then display newly added item"},
        {title: "Add functionality to mark items as done"},
        {title: "Implement the purge feature to clear out completed tasks"}
    ]
};

//TODO: let's implement a dynamic task list!
function renderTask(task) {
    // ----- ONE ----- //
    // create the li
    let li = document.createElement("li");
    // set the content to the title
    li.textContent = task.title;

    // ----- FIVE ----- //
    // if the task has a done key, then add the CSS class
    if (task.done) {
        li.classList.add("done");
    }
    // add eventlistener to each li item to toggle the done key and class
    li.addEventListener("click", function() {
        // reverse the state of task.done
        task.done = !task.done;
        // toggle the done css class
        li.classList.toggle("done");
        console.log(state);
    });
    // return the li
    return li;
}

// ----- TWO ----- //
function render(state) {
    // select the ul task list element
    let ul = document.querySelector(".tasks");
    // clear all the content before proceeding
    ul.textContent = "";
    // iterate through each task and append the li elements using renderTask
    for (let i = 0; i < state.tasks.length; i++) {
        ul.appendChild(renderTask(state.tasks[i]));
    }
}
// do the initial load once this js file loads
render(state);

// ----- SIX ----- //
document.querySelector("#purge")
    .addEventListener("click", function() {
        // filter the current tasks lists using a filter function
        state.tasks = state.tasks.filter(function(task) {
            // return only the tasks that are NOT done
            return !task.done;
        });
        // render the list again
        document.querySelector("h1").classList.toggle("purged");
        
        render(state);
    });

// ----- THREE / FOUR ----- //
// select the form element
document.querySelector("#new-task-form")
    // when the form is submitted, do something
    .addEventListener("submit", function(evt) {
        // prevent the default action of this form element
        evt.preventDefault();
        // set input to the element, and give VS Code some clues 
        // that its an HTML Input Element, and needs specicial treatement
        let input = /** @type {HTMLInputElement} */ (document.querySelector("#new-task-title"));
        // create a task item as a key: value pair
        let task = {title: input.value};
        // push the newly created task item onto the task list called state
        state.tasks.push(task);
        // reset the input to blank to allow for new input
        input.value = "";
        // finally, render the new list
        render(state);
    });