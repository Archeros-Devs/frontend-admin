import React, { Component } from 'react';
import { Row, Col, Table, Badge } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/Card/Index.js";

import moment from 'moment';
import api from '../../api.js'

import avatar2 from '../../assets/images/user/avatar-2.jpg';

import './style.scss'

class SamplePage extends Component {
    state = {
        pastas: [],
        loading: false,

        currentPage: 1,
        total: 1,
        limite: 10,
    }

    componentDidMount() {
        this.pastas()
    }

    pastas = (currentPage = 1) => {
        this.setState({loading: true})
        api().get(`/pastas?page=${currentPage}&limite=${this.state.limite}`)
            .then(res => {
                if (res.data.retorno) {
                    this.setState({ pastas: res.data.pastas, total: res.data.total, loading: false }, this.forceUpdate())
                } else {

                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { total, limite, loading } = this.state
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card
                            className='card'
                            title='Pastas'
                            bodyClass={'px-0 py-0'}
                            isOption
                            fullscreen
                            reload
                            pagination={{ itemsCountPerPage: limite, totalItemsCount: total }}
                            loading={loading}
                            cardHeaderRight={
                                <a href='/admin/pastas/nova'>
                                    <i className="fa fa-plus f-20 m-r-15" />
                                </a>
                            }
                            onPageChange={(pg) => this.pastas(pg)}>
                            <div>
                                <Table responsive hover style={{ marginBottom: 0 }}>
                                    <tbody>
                                        {
                                            this.state.pastas.map((pasta, id) =>
                                                <tr className="unread" key={pasta.id_pasta}>
                                                    <td style={{ textAlign: 'left' }}>
                                                        <h6 className="mb-1">
                                                            <a href={`/admin/pasta/${pasta.id_pasta}`} className="f-12">{pasta.nome} <Badge variant="secondary">{pasta.categoria}</Badge></a>
                                                        </h6>
                                                        <p className="m-0">{pasta.discussao}</p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">
                                                            <i className="fa fa-circle f-10 m-r-15" style={{ color: !!pasta.homologada ? '#1ede1e' : 'yellow' }} />
                                                            {moment(pasta.data_criacao).format('DD/MM/Y')}
                                                        </h6>
                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                            )
                                        }
                                        {!this.state.pastas.length &&
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