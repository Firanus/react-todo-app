import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList';

class SortedTodoList extends Component {
    constructor(props){
        super(props);
        this.state = { sortOrder:'asc'};

        this.toggleSortOrder = this.toggleSortOrder.bind(this);
        this.sortList = this.sortList.bind(this);
    }
    toggleSortOrder(){
        this.state.sortOrder == 'asc' ? this.setState({sortOrder: 'desc'}) : this.setState({sortOrder: 'asc'});
    }
    sortList(todos){
        let sortedTodos = [...todos];
        if(this.state.sortOrder == 'asc'){
            sortedTodos.sort((a,b) => a.name > b.name ? 1 :  -1);
        }
        else {
            sortedTodos.sort((a,b) => a.name < b.name ? 1 :  -1);
        }
        return sortedTodos;
    }
    render(){
        return (
            <div>
                <button onClick={this.toggleSortOrder}>Sort</button>
                <TodoList todos={this.sortList(this.props.todos)}/>
            </div>
        )
    }
}

export default SortedTodoList;