import React, { Component } from 'react';
import { Row, Col, Table, Badge } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/Card/Index.js";
import ModalImage from "../../App/components/ModalImage/Index";

import moment from 'moment';
import api from '../../api.js'

import male from '../../assets/images/user/avatar-2.jpg'
import female from '../../assets/images/user/avatar-1.jpg'

import './style.scss'

class SamplePage extends Component {
    state = {
        usuarios: [],
        loading: false,

        currentPage: 1,
        total: 1,
        limite: 10,
    }

    componentDidMount() {
        this.usuarios()
    }

    usuarios = (currentPage = 1) => {
        this.setState({loading: true})
        api().get(`/usuarios?page=${currentPage}&limite=${this.state.limite}`)
            .then(({data, status}) => {
                console.log(data)
                if (status === 200) {
                    this.setState({ usuarios: data.usuarios, total: data.total, loading: false }, this.forceUpdate())
                } else {

                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { total, limite, loading, usuarios } = this.state
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card
                            className='card'
                            title='Usuários'
                            bodyClass={'px-0 py-0'}
                            isOption
                            fullscreen
                            reload
                            pagination={{ itemsCountPerPage: limite, totalItemsCount: total }}
                            loading={loading}
                            cardHeaderRight={
                                <a href='/admin/admin/novo'>
                                    <i className="fa fa-plus f-20 m-r-15" />
                                </a>
                            }
                            onPageChange={(pg) => this.usuarios(pg)}>
                            <div>
                                <Table responsive hover style={{ marginBottom: 0 }}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nome</th>
                                            <th>Escolaridade</th>
                                            <th>Profissão</th>
                                            <th>Ativo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usuarios.map((usuario, id) =>
                                                <tr className="unread" key={id}>
                                                    <td style={{display: 'flex', justifyContent: 'center'}}>
                                                        <div style={{width: 50}}>
                                                            <ModalImage
                                                                images={[usuario.img || (usuario.genero === 'masculino' ? male : female)]}
                                                                displayIndex={0}
                                                                alt='Imagem do Usuário'
                                                                imgStyle={{width: 50}}
                                                                roundedCircle
                                                            />
                                                        </div>
                                                    </td>
                                                    <td style={{ textAlign: 'left' }}>
                                                        <h6 className="mb-1">
                                                            <a href={`/usuarios/${usuario.id_usuario}`} className="f-12">{usuario.nome + '  '}
                                                                {usuario.tipo_usuario > 0 &&
                                                                <Badge variant="secondary">{usuario.tipo_usuario === 1 ? 'Admin' : 'Super Admin'}</Badge>}
                                                            </a>
                                                        </h6>
                                                        <p className="m-0">{usuario.email || "Informação não preenchida"}</p>
                                                    </td>
                                                    <td style={{ textAlign: 'left' }}>
                                                        <p className="m-0">{usuario.escolaridade.escolaridade || ""}</p>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">{usuario.profissao.nome || ""}</p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">
                                                            <i className="fa fa-circle f-10 m-r-15" style={{ color: !usuario.deletado_em ? '#1ede1e' : 'cray' }} />
                                                        </h6>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        {!usuarios.length &&
                                            <tr className="unread">
                                                <td colSpan="4">
                                                    <span>Tente novamente mais tarde ou tente recarregar a página</span>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;