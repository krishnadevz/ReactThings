import React, {Component} from "react";
import ReactDOM from "react-dom"


class App extends Component {
    constructor() {
        super()
        this.state = {
            loading:true,
            character:{}
        }
            
        }
        componentDidMount() {
            this.setState({loading:true})
            fetch("https://swapi.co/api/people/1")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    loading:false,
                    character:data
                })
            })
        }
        render(){
            const text = this.state.loading ? "loading..." : this.state.character.name

            return (
                <div>Codes goes here
                {this.state.character.name}</div>
            )
        }
    }
 

export default App
