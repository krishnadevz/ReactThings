import React,{Component} from  'react';
import TodoItem from "./Todoitems";
import propTypes from 'prop-types';

export class Todos extends Component{
  
  render(){
 return this.props.todos.map((todo)=>(
<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
    delTodo={this.props.delTodo}/>
 ));
  }
}

//proptypes
Todos.propTypes={
    todos:propTypes.array.isRequired,
    delTodo:propTypes.func.isRequired,
    markComplete:propTypes.func.isRequired,
    delTodo:propTypes.func.isRequired
}
export default Todos;
