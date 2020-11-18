import React from 'react';
import { toast } from 'react-toastify';
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
    erros: [],
    LatLng: {},
    nome: "",
    discussao: "",
    categoria: 1,
    descricao: "",
    localizacao: ""

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

  handleSubmit = () => {
    const { nome, discussao, categoria, fotos, descricao, localizacao } = this.state

    const erros = []
    if (!nome) erros.push('nome')
    if (!categoria) erros.push('categoria')
    if (!discussao) erros.push('discussao')
    if (!descricao) erros.push('descricao')
    this.setState({ erros })

    if (erros.length > 0) return

    Api().post('/pastas', { nome, discussao, categorias: [categoria], descricao, localizacao, latitude: 0, longitude: 0 })
      .then(({ status, data }) => {
        console.log(status, data)
        if (status !== 200) {
          const { errors } = data.error
          return errors.map(errorMessage => toast(errorMessage, { type: 'error' }))
        }
        return toast('Pasta Cadastrada com sucesso!', { type: 'success' })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { loading, selectedFile, categorias, LatLng, erros } = this.state
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
                      <Form.Control type="text" onChange={e => this.setState({ nome: e.target.value })} placeholder="Nome" required isInvalid={erros.includes('nome')} />
                    </Form.Group>
                    <Form.Group controlId="novaPasta.discussao">
                      <Form.Label>Discussão</Form.Label>
                      <Form.Control type="text" onChange={e => this.setState({ discussao: e.target.value })} placeholder="Discussão" required isInvalid={erros.includes('discussao')} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="novaPasta.categoria">
                      <Form.Label>Categoria</Form.Label>
                      <Form.Control as="select" onChange={e => this.setState({ categoria: e.target.value })} required isInvalid={erros.includes('categoria')}>
                        {
                          categorias.map((cat, index) => <option key={index} value={`${cat.id_categoria}`}>{cat.categoria}</option>)
                        }
                      </Form.Control>
                    </Form.Group>
                    {/*                                        
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

                    </Form.Group>*/}
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="exampleForm.descricao">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control as="textarea" rows="3" onChange={e => this.setState({ descricao: e.target.value })} placeholder="Descrição" required isInvalid={erros.includes('descricao')} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.localizacao">
                      <Form.Label>Localização</Form.Label>
                      <Autocomplete
                        className='form-control'
                        style={{ width: '100%' }}
                        placeholder=''
                        onPlaceSelected={(place) => {
                          console.log(place);
                          this.setState({ localizacao: place })
                        }}
                        types={['address']}
                        componentRestrictions={{ country: "br" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Form.Group controlId="exampleForm.submit">
                      <Button variant="primary" onClick={this.handleSubmit} style={{ margin: 0 }}>
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