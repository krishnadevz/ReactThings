import React from "react"
import TodoItem from'./TodoItem'
import todoData from "./TodoData"

class  App extends React.Component{
    constructor(){
        super()
        this.state={
            todo:todoData
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
    console.log("changed",id)
    this.setState(prevState=>{
        const updatedTodos=prevState.todo.map(todo=>{
            if(todo.id===id){

                return{...todo,
                    completed: !todo.completed 
                }
            }
            return todo
        })
        return{
            todo:updatedTodos
        }
    })
    
    }


    render(){
const Todoitems=this.state.todo.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange}
/>)
    return (



        <div className="Todo-list">
    
{Todoitems}
            

</div>


)
}
}
    
    
export default App
        
