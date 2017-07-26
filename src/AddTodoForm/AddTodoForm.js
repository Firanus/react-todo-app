import React from 'react';
import store from '../store';

const AddTodoForm = () => {
    let newTodoObject = {}
    const sanitiseNewTodo = (nameElement) => {
        return nameElement.value;
    };
    
    return (
        <form onSubmit={(evt) => {evt.preventDefault(); 
                const newTodo = sanitiseNewTodo(newTodoObject); 
                store.dispatch({type: 'ADD_TODO', todoName: newTodo}); }}>
            <label>New Todo:</label>
            <input ref={(el)=>newTodoObject=el} />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodoForm;