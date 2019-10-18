import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Text" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Col>

                        </Card>
                    </Col>
                </Row>
            </Aux>
        )
    }
}

export default FormsElements;