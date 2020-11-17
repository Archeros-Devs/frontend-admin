import React, { Component } from 'react';
import { Row, Col, Badge, Spinner } from 'react-bootstrap';
import Card from '../../App/components/Card/Index'

import api from '../../api'
import Aux from "../../hoc/_Aux";

import ModalImage from "../../App/components/ModalImage/Index";

import profile_image from '../../assets/images/user/avatar-2.jpg'

import './style.scss'
import moment from 'moment';

class SamplePage extends Component {
  state = {
    id_pasta: this.props.match.params.id_pasta,
    pasta: {},
    imgs: [],
    loading: true
  }

  componentDidMount() {
    this.getFolder()
  }

  getFolder = () => {
    let id_pasta = this.state.id_pasta
    api().get(`/pastas/${id_pasta}`)
      .then(({ data, status }) => {
        if (status === 200) {
          console.info(data)
          this.setState({ pasta: data.pasta, imgs: data.imgs })
        } else {
          console.info(data.msg)
        }
        this.setState({ loading: false })
      })
      .catch(error => {
        console.error(error)
      })
  }

  avaliar = (id_pasta, avaliacao) => {
    try {
      api().put(`/pastas/${id_pasta}/avaliar`, {
        avaliacao
      })
        .then(res => {
          console.info(res)
          this.setState({ pasta: { ...this.state.pasta, avaliacao: avaliacao } })
        })
        .catch(error => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { pasta, loading } = this.state;
    return (
      <Aux>
        <Card
          className=''
          title={<h4>{pasta.nome} <Badge variant="secondary">{pasta.categoria}</Badge></h4>}
          bodyClass={'px-0 py-0'}
          isOption
          fullscreen
          reload
          loading={loading}
          onCardReload={() => { }}
          cardHeaderRight={
            <div>
              <button onClick={() => this.avaliar(pasta.id_pasta, +1)} style={{ ...pasta.avaliacao === 1 ? { background: '#28a745', color: 'white', borderColor: '#28a745' } : {} }} className={`btn-peruibe btn`}>Aprovar</button>
              <button onClick={() => this.avaliar(pasta.id_pasta, -1)} style={{ ...pasta.avaliacao === -1 ? { background: '#dc3545', color: 'white', borderColor: '#dc3545' } : {} }} className={`btn-peruibe_r btn`}>Reprovar</button>
            </div>
          }>
          {!!pasta.nome &&
            <div className='container'>

              <div className='row'>
                <div className='my-card col-left'>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5>Descrição</h5>
                    <label></label>
                  </div>
                  <label className="text-muted mb-4">{pasta.descricao}</label>
                  <h5>Discussão</h5>
                  <label className="text-muted mb-4">{pasta.discussao}</label>
                </div>
                <div className='col-right'>
                  <div className='my-card card-user'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ModalImage
                        images={[pasta.usuario.url_img || profile_image]}
                        displayIndex={0}
                        alt='Imagem do Usuário'
                      />
                    </div>
                    <div className='info'>
                      <span style={{ fontSize: 12, fontWeight: 'bold' }}>Criador:</span>
                      <a href={`/usuarios/${pasta.usuario.id_usuario}`} className="f-12">{pasta.usuario.nome + '  '}
                        {pasta.usuario.tipo_usuario > 0 &&
                          <Badge variant="secondary">{pasta.usuario.tipo_usuario === 1 ? 'Admin' : 'Super Admin'}</Badge>}
                      </a>
                      <span>{pasta.usuario.email}</span>
                      <span>{pasta.escolaridade}</span>
                      <span style={{ fontSize: 12, fontStyle: 'italic' }}>Criado em: {moment(pasta.usuario.criado_em).format('DD/MM/YYYY')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className="col-md-12">
                  <hr />
                  <label>Arquivos</label>
                  {!!this.state.imgs.length
                    ? <div className='my-card card-imgs' style={{ marginTop: '1em' }}>
                      <ModalImage
                        images={this.state.imgs}
                        displayIndex={0}
                      />
                    </div>
                    : <div><i>Nenhum arquivo disponível</i></div>}
                </div>
              </div>

              <div className='row'>
                <div className="col-md-12">
                  <hr />
                  <label>Estudos</label>
                  {!!this.state.estudos?.length
                    ? <div></div>
                    : <div><i>Nenhum estudo disponível</i></div>}
                </div>
              </div>

            </div>}
        </Card>
      </Aux>
    );
  }
}

export default SamplePage;