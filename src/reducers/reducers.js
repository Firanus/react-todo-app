let initialState = {todos: [{name: 'First Todo', complete: false}]};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, todos: [...state.todos, {name:action.todoName, complete: false}] }
        case "COMPLETE_TODO":
            return {...state, 
                todos: state.todos.map(
                    (currTodo) => {
                        if(currTodo.name == action.todo.name){
                            currTodo.complete = !currTodo.complete;
                        }
                        return currTodo;
                    }
                )
            }
        default:
            return state;
    }
}

export default reducer