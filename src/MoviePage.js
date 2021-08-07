import React from 'react'
import MovieCard from './components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
// import Grid from 'react-bootstrap'

export default class MoviePage extends React.Component {
    constructor() {
        super(); 
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch("http://movieapiredo-dev.us-west-2.elasticbeanstalk.com/movies")
         .then(response => response.json())
         .then(data => {
             this.setState({
                 movies: data
             })
         })
    }   

    render () {
        const movieCards = this.state.movies.map(movie => <MovieCard {...movie} key={movie.id} />)
 
        return (

          <Container>
            <Row>
                {movieCards}
            </Row>
          </Container>

    
            

        )
    }

}