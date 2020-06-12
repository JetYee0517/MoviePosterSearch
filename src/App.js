import React , {Component} from "react"
import "./App.css"
import Facebook from "./Facebook"

class App extends Component{
    render(){
        return(
            <div className = "App">
                <div className="head">
                <header>
                    <img src="https://image.flaticon.com/icons/png/512/2919/2919616.png" className = "logo" alt="logo"/>
                    <h2>Welcome to Movie Poster Search!</h2>
                </header>
                <h2>Let's get started.</h2>
                </div>
                <div className="body">
                <Facebook />
                </div>
            </div>
        )
    }
}

export default App