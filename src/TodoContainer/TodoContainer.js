import {connect} from 'react-redux';
import SortedTodoList from '../SortedTodoList/SortedTodoList'

var TodoContainer = connect(
  (state) => ({todos: state.todos})
)(SortedTodoList);

export default TodoContainer;