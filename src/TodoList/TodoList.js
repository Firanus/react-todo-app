import React from 'react';
import Todo from '../Todo/Todo'

const TodoList = ({todos}) => {
    return (
        <ol>
            {todos.map((todo, i) => {
                if(!todo.complete){
                    return <Todo key={i} todo={todo}/>
                }
            })}
        </ol>
    )
}

export default TodoList;
