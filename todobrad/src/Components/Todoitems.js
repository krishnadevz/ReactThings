import React,{Component} from  'react';
import propTypes from 'prop-types';


class TodoItem extends Component{
    getStyle=()=>{

        return{
            background:"#f4f4f4",
            padding:'10px',
            borderBottom:"1px #ccc dotted",
            textDecoration:this.props.todo.completed ?//ternery operator used here
            'line-through':'none'
        }
    
    //    if(this.props.todo.completed){
      ///      return{
                //textDecoration:"line-through"
         //   }
       // } else{
         //   return{
               // textDecoration:"none"
           // }
        //}
    }
   // markComplete = (e)=>{
     ///   console.log(this.props)
 ///   }




  render(){
    //destructing below🔽
    const {id,title}=this.props.todo;

 return(
<div style={this.getStyle()}>

<p>
    <input type="checkbox"  onChange={this.props.markComplete.bind(this,id)}  />{''} 
    {title}
    <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
    {this.props.todo.title}</p>

        </div>


    
      
      )
  }
}
//bind(this)
  //proptypes
TodoItem.propTypes={
    todo:propTypes.object.isRequired
}

//const itemStyle={
  //  backgroundColor:"#f4f4f4"
//}
const btnStyle={
    background:'#ff0000',
    color:"#fff",
    border:"#fffff",
    padding:"5px,9px", //5px right
    borderRadius:'50%',
    cursor:"pointer",
    float:'right'

}
TodoItem.propTypes={
  todos:propTypes.array.isRequired,
  delTodo:propTypes.func.isRequired,
  markComplete:propTypes.func.isRequired,
  delTodo:propTypes.func.isRequired
}

export default TodoItem;
