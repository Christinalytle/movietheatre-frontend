import React, {Component} from 'react'

class MovieApiCall extends Component {
    constructor() {
        super()
        this.state = {
            loading: false, 
            movie: {}
        }
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch("http://movieapiredo-dev.us-west-2.elasticbeanstalk.com/movies/1")
         .then(response => response.json())
         .then(data => {
             this.setState({
                 loading: false, 
                 movie: data
             })
         })
    }

    render() {
        const text = this.state.loading ? "Loading...." : <h1>{this.state.movie.title}</h1>
        return (
            <div>
                {text}
            </div>

        )
    }
}

export default MovieApiCall 