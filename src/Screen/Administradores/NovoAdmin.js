import React from 'react';
import { Row, Col, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from '../../App/components/Card/Index'

import Aux from "../../hoc/_Aux";

import Api from "../../api"

class NovoAdmin extends React.Component {
    state = {
        loading: false,

        nome: '',
        cpf: '',
        genero: 'M',
        email: '',
        profissao: '',
        tipo: '1',

        erros: [],
    }

    handleChangeCpf(event) {
        let cpf = event.target.value

        var numberPattern = /\d+/g;
        var res = cpf.match(numberPattern) || []

        this.setState({ cpf: res.join('') });
    }

    handleSubmit(e){
        const { cpf, email, nome, profissao, genero, tipo } = this.state
        let erros = []

        if(cpf.length !== 11)
            erros.push('cpf') 
        if(genero !== 'M' && genero !== 'F')
            erros.push('genero')
        if(tipo !== '1' && tipo !== '2')
            erros.push('tipo') 
        
        if(erros.length > 0)
            return this.setState({erros})
        
        Api().post('/pastas', { cpf, email, nome, profissao, genero, tipo })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.error(err)
        })
        
        e.preventDefault();
    }


    render() {
        const { loading, cpf, erros } = this.state
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
                            <Form onSubmit={e => this.handleSubmit(e)} style={{ padding: 15 }} >
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="novaPasta.nome">
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control type="text" onChange={e => this.setState({ nome: e.target.value })} placeholder="Nome" required isInvalid={erros.includes('nome')} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.cpf">
                                            <Form.Label>CPF</Form.Label>
                                            <Form.Control type="text" maxlength="11" value={cpf} onChange={e => this.handleChangeCpf(e)} placeholder="00000000000" required isInvalid={erros.includes('cpf')}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.genero">
                                            <Form.Label>Gênero</Form.Label>
                                            <Form.Control as="select" className="mb-3" onChange={e => this.setState({ genero: e.target.value })} required isInvalid={erros.includes('genero')}>
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
                                            <Form.Control type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} required isInvalid={erros.includes('email')} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.profissao">
                                            <Form.Label>Profissão</Form.Label>
                                            <Form.Control type='text' placeholder="Profissão" onChange={e => this.setState({ profissao: e.target.value })} required isInvalid={erros.includes('profissao')} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="novaPasta.usuario">
                                            <Form.Label>Tipo</Form.Label>
                                            <Form.Control as="select" className="mb-3"  onChange={e => this.setState({ tipo: e.target.value })} required isInvalid={erros.includes('tipo')}>
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
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Aux >
        )
    }
}

export default NovoAdmin;