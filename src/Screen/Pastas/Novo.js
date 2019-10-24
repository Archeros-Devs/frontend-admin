import React from 'react';
import { Row, Col, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper, InfoWindow, Polyline, Polygon } from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';

import Card from '../../App/components/Card/Index'

import Aux from "../../hoc/_Aux";

import Api from "../../api";

class NovaPasta extends React.Component {
    constructor(props) {
        super(props);
        this.fileImgs = React.createRef();
    }

    state = {
        loading: false,
        selectedFile: [],
        categorias: [],
        LatLng: {}
    }

    componentDidMount() {
        this.pegar_cat()
    }

    pegar_cat = () => {
        Api().get('/categorias')
            .then(res => {
                this.setState({ categorias: res.data })
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    handleFiles = (e) => {
        console.log([...e.target.files])
        this.setState({
            selectedFile: [...e.target.files],
        })
    }

    render() {
        const { loading, selectedFile, categorias, LatLng } = this.state
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card
                            className=''
                            title={'Nova Pasta'}
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
                                            <Form.Label>Nome da Pasta</Form.Label>
                                            <Form.Control type="text" placeholder="Nome" />
                                        </Form.Group>
                                        <Form.Group controlId="novaPasta.discussao">
                                            <Form.Label>Discussão</Form.Label>
                                            <Form.Control type="text" placeholder="Discussão" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="novaPasta.categoria">
                                            <Form.Label>Categoria</Form.Label>
                                            <Form.Control as="select">
                                                {
                                                    categorias.map((cat, index) => <option key={index} value={`${cat.id_categoria}`}>{cat.categoria}</option>)
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="novaPasta.fotos">
                                            <Form.Label>Fotos</Form.Label>
                                            <div>
                                                <input type="file" ref={this.fileImgs} style={{ display: 'none' }} multiple accept="image/*" onChange={this.handleFiles} />
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text
                                                            style={{ cursor: 'pointer', background: '#5fb2e9', color: 'white' }}
                                                            onClick={() => { this.fileImgs.current.click() }}>
                                                            Adicionar
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Sem Fotos"
                                                        value={`${selectedFile.map(i => ' ' + i.name)}`}
                                                        aria-describedby="inputGroupPrepend"
                                                        disabled
                                                    />
                                                </InputGroup>
                                            </div>

                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group controlId="exampleForm.descricao">
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.endereco">
                                            <Form.Label>Endereço</Form.Label>
                                            <Autocomplete
                                                className='form-control'
                                                style={{ width: '100%' }}
                                                placeholder=''
                                                onPlaceSelected={(place) => {
                                                    console.log(place);
                                                }}
                                                types={['address']}
                                                componentRestrictions={{ country: "br" }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems:'flex-end' }}>
                                        <Form.Group controlId="exampleForm.submit">
                                        <Button variant="primary" type="submit" style={{margin:0}}>
                                            Salvar
                                        </Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        )
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyDbnh6IAY2xsdYRh6o3lU6vvLheCKsAUpk',
        language: props.language
    }))(NovaPasta);