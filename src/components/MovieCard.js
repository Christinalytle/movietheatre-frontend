import React from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MovieCard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: props.title, 
            posterUrl: props.posterUrl, 
            reviews: props.reviews
        }
    }

    render() {
        return (
            <Col sm={4} >
        
                    <Card  >
                <Card.Img variant="top" style={{height: "220px"}} src={this.props.posterUrl} />
                <Card.Body>
                    <Card.Title className="text-center">{this.props.title}</Card.Title>
                    
                    <ListGroup variant="flush">
                        <ListGroup.Item>Harry Potter is about a boy who becomes a wizard and defeats the evil Lord Voldemort
                        </ListGroup.Item>
                        <ListGroup.Item>Screenings: <br></br>
                        9:30a , 12:30a, 3:30a</ListGroup.Item>
                        <ListGroup.Item>Reviews (5) <br></br>
    
                        </ListGroup.Item>
    
                        
                    </ListGroup>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
            </Col>

                  
                
    
        )
    }
    
}

export default MovieCard