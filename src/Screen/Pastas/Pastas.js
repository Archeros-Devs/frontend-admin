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
    }

    componentDidMount() {
        this.pastas()
    }

    pastas = () => {
        api().get('/pastas')
            .then(res => {
                console.log(res.data)
                if (res.data.retorno) {
                    this.setState({ pastas: res.data.pastas })
                } else {

                }
            })
            .catch(error => {

            })
    }

    render() {
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
                            pagination={{ itemsCountPerPage: 5, totalItemsCount: 2 }}
                            loading={this.state.loading}
                            cardHeaderRight={
                                <a href='/admin/pastas/nova'>
                                    <i className="fa fa-plus f-20 m-r-15" />
                                </a>
                            }>
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