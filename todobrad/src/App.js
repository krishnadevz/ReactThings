import React,{Component} from  'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from "./Components/Todos";
import Header from "./Components/layouts/header";
import AddTodo from "./Components/AddTodo";
import About from "./Components/pages/About";

import * as uuid from 'uuid';


import './App.css';
import Axios from 'axios';


class App extends Component{
  state={
    todos:[]
  }
  //http request and fetching api
  componentDidMount(){
   Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res=>this.setState({todos:res.data}))
  }
  //Completed toggele
markComplete=(id)=>{
this.setState({todos:this.state.todos.map(todo=>{
  if(todo.id===id){
    todo.completed=!todo.completed

  }
  return todo;
})});
}
//Deltodo
delTodo=(id)=>{
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res=>this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]})
  )}

//adding todo
addTodo=(title)=>{
  Axios.post("https://jsonplaceholder.typicode.com/todos?_limit=10",{
    title,
    completed:false
  })
  .then(res=>this.setState({todos:[...this.state.todos,res.data]}));


}

  render(){
    //console.log(this.state.todos)
  return(
    <Router>
  <div className="App">
  <div className="container">
<Header/>
<Route exact path="/" render={props=>(
  <React.Fragment>
<AddTodo addTodo={this.addTodo}/>
    <Todos todos={this.state.todos} 
    markComplete={this.markComplete}
      delTodo={this.delTodo}  />
    
  </React.Fragment>

)}/>
<Route path="/about" component={About}/>
  
  
  </div>
  </div>
  </Router>

  );
}
}

export default App;
