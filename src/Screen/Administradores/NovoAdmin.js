import React from 'react';
import { Row, Col, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from '../../App/components/Card/Index'

import Aux from "../../hoc/_Aux";

import Api from "../../api"

class NovoAdmin extends React.Component {
    state = {
        loading: false,
        cpf: '',
    }

    handleChange(event) {
        let cpf = event.target.value

        var numberPattern = /\d+/g;
        var res = cpf.match(numberPattern) || []

        this.setState({ cpf: res.join('') });
    }


    render() {
        const { loading, cpf } = this.state
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card className=''
                            title={'Adicionar Novo Administrador'}
                            bodyClass={'px-0 py-0'}
                            isOption
                            fullscreen
                            reload
                            loading={loading}
                            onCardReload={() => { console.log('Recarregar') }}>
                            <div style={{ padding: 15 }}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="novaPasta.nome">
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control type="text" placeholder="Nome" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.cpf">
                                            <Form.Label>CPF</Form.Label>
                                            <Form.Control type="text" maxlength="11" value={cpf} onChange={e => this.handleChange(e)} placeholder="00000000000 " />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.sexo">
                                            <Form.Label>Sexo</Form.Label>
                                            <Form.Control as="select" className="mb-3">
                                                <option value="M">Masculino</option>
                                                <option value="F">Feminino</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="novaPasta.email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.profissao">
                                            <Form.Label>Profissão</Form.Label>
                                            <Form.Control type='text' placeholder="Profissão" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.usuario">
                                            <Form.Label>Usuario</Form.Label>
                                            <Form.Control as="select" className="mb-3">
                                                <option value='1'>Administrador</option>
                                                <option value='2'>Super Administrador</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: 'flex-end' }}>
                                    <Button variant="primary" type="submit">
                                        Salvar
                                    </Button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Aux >
        )
    }
}

export default NovoAdmin;