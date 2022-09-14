import React from 'react';
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import UpdateForm from './UpdateForm';
import { withAuth0 } from '@auth0/auth0-react';




class BestMovies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      MovieArr : [],
      showFlag : false,
    currentMovie : {}
    }
  }
  
    componentDidMount = () => {
      //const { user } = this.props.auth0;
      axios
      .get(`https://react-example-mgiatpk.herokuapp.com/Movie`)
      .then(result =>{
        console.log(result.data);
        this.setState({
          MovieArr : result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
      
    }


    addMovie = (event) =>{
      event.preventDefault();
      const { user } = this.props.auth0;
      const obj = {
        title : event.target.title.value,
        discription: event.target.discription.value,
        status: event.target.status.value,
        name:user.email

      }
  
      axios
      .post(`https://react-example-mgiatpk.herokuapp.com/Movie`, obj)
      .then(result =>{
        return this.setState({
          MovieArr : result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }

    deleteMovie = (id) => {
      const { user } = this.props.auth0;
      axios
        .delete(`https://react-example-mgiatpk.herokuapp.com/Movie/${id}?name=${user.email}`)
        .then((result) => {
          console.log('done');
          
          this.setState({
            MovieArr: result.data,
          });
          this.componentDidMount();
          
        })
        .catch((err) => {
          console.log(err);
        });
  
        
      };
      openForm = (id) =>{
        this.setState({
          showFlag : true,
          currentMovie : id
        })
      }
    
      handleClose = () =>{
        this.setState({
          showFlag : false
        })
      }
    
      updateMovie = (event) =>{
        event.preventDefault();
        const { user } = this.props.auth0;
        let currentMovieData = {
          title : event.target.title.value,
          discription : event.target.discription.value,
          status : event.target.status.value,
          name:user.email
        }
        const id = this.state.currentMovie;
        axios
        .put(`https://react-example-mgiatpk.herokuapp.com/Movie/${id}`, currentMovieData)
        .then(result=>{
          this.setState({
            MovieArr : result.data
          })
          this.handleClose();
        })
        .catch(err=>{
          console.log(err);
        })
      }


 
  render() {
    //const { isAuthenticated } = this.props.auth0;
   


    return (
      
      <>
      
      <div>
        <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>AddMovie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form onSubmit={this.addMovie} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" name='title' placeholder="Enter Movie title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="text" name='discription' placeholder="Enter Movie discription" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control type="text" name='status' placeholder="Enter Movie status" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubmitbox">
      <Button type='Submit' >Add</Button>
      </Form.Group>
      </Form>
      
      </Modal.Body>

      <Modal.Footer>
        
      </Modal.Footer>
    </Modal.Dialog>
    
      
        {this.state.MovieArr.length ? 
            <Carousel fade>
              {this.state.MovieArr.map(item => {
                return(
                 
                  <Carousel.Item>
                    <img class="d-block w-100" height="480" src={require("./bg_slide.jpg")} alt="Slide"/>
                    <Carousel.Caption>
                        <h3>Movie title: {item.title}</h3>
                        <p>Movie discription:{item.discription}</p>
                        <p>Movie status :{item.status}</p>
                        <Button  onClick={() => this.deleteMovie(item._id)}>Delete</Button>
                        <Button onClick={() => this.openForm(item._id)}>update</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                
                )
              }
            )
          }
          </Carousel>
          : <h3>No Movies Found </h3> 
        } 
        <UpdateForm
                  show = {this.state.showFlag}
                  handleClose = {this.handleClose}
                  updateMovie= {this.updateMovie}
                  currentMovie = {this.state.currentMovie}
                  />
                
        

      </div>
      
      
      
      
      
     
      
       
        
      </>
    
   );
  }
}

export default withAuth0(BestMovies) ;
