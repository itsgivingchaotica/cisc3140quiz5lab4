import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Get.css';
import { Button, Form, Container } from 'react-bootstrap';


function Delete() {
    return (
        <div className="DeleteEntry">
            <header className='header'>
                <h1>Delete</h1>
            </header>
            <Container Fluid>
                <Form>
                    <div className='input'>
                        <Form.Group controlId='deleteForm'>
                            <Form.Label >Input ID</Form.Label>
                            <Form.Control required placeholder="input squirrel id"></Form.Control>
                        </Form.Group>
                        <Button className='submitbtn' variant='success' type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Delete