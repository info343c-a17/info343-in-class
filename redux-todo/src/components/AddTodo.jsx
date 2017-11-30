//One: take the text from the input field and return 
//as a proper "Action" JSON object
//for use with other components

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text,
        completed: false
    }
}

//Two: Take the filter and return a proper "Action" 
//JSON object to send to to other components

export const setVisibilityFilter = (filter) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}

//Three: Take Todo item's id and returns a proper "Action" 
//JSON object to send to other components

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

// Reducer take state of Redux (an array of previous To Do items) and return
// a *NEW* array of todos (new state) w/ the new ToDo added 
// if the action type is "ADD_TODO"

export const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return
                [...state,{id: action.id, text: action.text, completed:false}] 

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }
                return Object.assign({},
                    todo, {completed: !todo.completed}
                )
            })
        case 'SET_VISIBILITY_FILTER': 
            return action.filter
        

        default:
            return state
    }
}