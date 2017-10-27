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
    let li = document.createElement("li");
    li.textContent = task.title;
    if (task.done) {
        li.classList.add("done");
    }

    li.addEventListener("click", function() {
        task.done = !task.done;
        li.classList.toggle("done");
    });

    return li;
}

function render(state) {
    let ul = document.querySelector(".tasks");
    ul.textContent = "";
    for (let i = 0; i < state.tasks.length; i++) {
        ul.appendChild(renderTask(state.tasks[i]));
    }
}

render(state);

document.querySelector("#purge")
    .addEventListener("click", function() {
        state.tasks = state.tasks.filter(function(task) {
            return !task.done;
        });
        render(state);
    });

document.querySelector("#new-task-form")
    .addEventListener("submit", function(evt) {
        evt.preventDefault();
        let input = /** @type {HTMLInputElement} */ (document.querySelector("#new-task-title"));
        let task = {title: input.value};
        state.tasks.push(task);
        input.value = "";
        render(state);
    });