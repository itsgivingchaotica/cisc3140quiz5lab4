import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import { Alert, Input, Space } from "antd";
import axios from "axios";
import '../Forms.css';

    function Get() {
    return (
        <div className="GetById">
            <header className='header'>
                <h1 className="form-title">Get</h1>
            </header>
            <Container Fluid>
                <Form className="form-title--small">
                    <div className='input'>
                        <Form.Group controlId='deleteForm'>
                            <Form.Control required placeholder="input squirrel id"></Form.Control>
                        </Form.Group>
                        <Button className='submitbtn' variant='success' type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Get