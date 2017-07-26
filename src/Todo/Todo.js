import React from 'react';
import store from '../store';

const Todo = ({todo}) => <li>{todo.name} <button onClick={() => store.dispatch({type:'COMPLETE_TODO', todo:todo})}>Complete</button></li>;

export default Todo;