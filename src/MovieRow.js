import React, {Component} from "react"

class MovieRow extends Component{
    render(){
        return (
        <table key={this.props.movie.id}>
        <tbody>
            <tr>
                <td>
                    <img src={this.props.movie.poster_src} width="200" alt="poster"/>
                </td>
                <td>
                    {this.props.movie.title}
                </td>
            </tr>
        </tbody>
    </table>
        )
    }
}

export default MovieRow