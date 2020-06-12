import React, {Component} from "react"
import MovieRow from "./MovieRow.js"
import $ from "jquery"
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {

    constructor(props){
        super(props)
        this.state = {}
        this.search()
    }

    search(searchTerm){
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=2e20d5c340db3bc6a326540751f7b36c&query=" + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) =>{
                const results = searchResults.results

                var movieRows = []

                results.forEach((movie) =>{
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    const movieRow = <MovieRow key={movie.id}movie={movie}/>
                    movieRows.push(movieRow)
                })
                this.setState({rows: movieRows})
            }
        })
    }

    searchChangeHandler(event){
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.search(searchTerm)
    }

    state = {
        isLoggedIn : false,
        userId: "",
        name: "",
        email: "",
        picture:""
    }

    responseFacebook  = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render(){
        let fbContent
        if(this.state.isLoggedIn){
            fbContent = (
                <div>  
                    <h2>Hi {this.state.name} , start your search now.</h2>
                    <h1>Movie Poster Search</h1>
                    <input onChange={this.searchChangeHandler.bind(this)} placeholder="Search..." style={{fontWeight: "bold" }}/>
                    <div className = "PosterDisplay" >
                       {this.state.rows} 
                    </div>   
                </div>
            )

        }else{
            fbContent = (
            <FacebookLogin
                appId="2708853106022609"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
            />)
        }

        return(
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook