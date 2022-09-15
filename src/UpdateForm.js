import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UpdateForm extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.updateMovie}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie title</Form.Label>
                            <Form.Control type="text" placeholder="Movie title" name="title" defaultValue={this.props.currentMovie.title}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Movie description</Form.Label>
                            <Form.Control type="text" placeholder="Movie description" name="description"  defaultValue={this.props.currentMovie.description}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Movie status</Form.Label>
                            <Form.Control type="text" placeholder="Movie status" name="status"  defaultValue={this.props.currentMovie.status}/>
                        </Form.Group>

                        <Button variant="primary" type="Submit">
                            update
                        </Button>

                    </Form>
                </Modal.Body>
                
            </Modal>
        )
    }
}

export default UpdateForm;