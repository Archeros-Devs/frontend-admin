import React, { Component } from 'react';
import { Table, Row, Col, Badge } from 'react-bootstrap';
import api from '../../api'

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/Card/Index.js";
import ModalImage from "../../App/components/ModalImage/Index";
import profile_image from '../../assets/images/user/avatar-2.jpg'
import moment from 'moment';
import './style.scss'

class SamplePage extends Component {
  state = {
    id_usuario: this.props.match.params.id_usuario,
    usuario: {},
    loading: true
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    const { id_usuario } = this.state
    api().get(`/usuarios/${id_usuario}`)
      .then(({ data, status }) => {
        if (status === 200) {
          console.info(data)
          this.setState({ usuario: data })
        } else {
          console.info(data.msg)
        }
        this.setState({ loading: false })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { usuario } = this.state
    return (
      <Aux>
        <Row>
          <Col>
            <Card title='Perfil' isOption>
              <div className='my-card card-user'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ModalImage
                    images={[usuario.url_img || profile_image]}
                    displayIndex={0}
                    alt='Imagem do Usuário'
                  />
                </div>
                <div className='info'>
                  <span style={{ fontSize: 12, fontWeight: 'bold' }}>Criador:</span>
                  <span style={{ fontSize: 12, fontWeight: 'bold' }}>{usuario.nome}</span>
                  <span>{usuario.email}</span>
                  <span>{usuario.escolaridade && usuario.escolaridade.escolaridade}</span>
                  <span style={{ fontSize: 12, fontStyle: 'italic' }}>Criado em: {moment(usuario.criado_em).format('DD/MM/YYYY')}</span>
                </div>
              </div>
              <hr />
              <h4>Pastas</h4>
              <Table>
                <tbody>
                  {
                    usuario.pastas && usuario.pastas.map((pasta, id) =>
                      <tr className="unread" key={pasta.id_pasta}>
                        <td style={{ textAlign: 'left' }}>
                          <h6 className="mb-1">
                            <a href={`/pasta/${pasta.id_pasta}`} className="f-12">{pasta.nome} <Badge variant="secondary">{pasta.categoria}</Badge></a>
                          </h6>
                          <p className="m-0">{pasta.discussao}</p>
                        </td>
                        <td>
                          <h6 className="text-muted">
                            <i className="fa fa-circle f-10 m-r-15" style={{ color: pasta.homologada_em !== null ? '#1ede1e' : 'yellow' }} />
                            {moment(pasta.criado_em).format('DD/MM/Y')}
                          </h6>
                        </td>
                        <td>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default SamplePage;