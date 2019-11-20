import React, {Component} from 'react';
import {Row, Col, Table, Badge, Tooltip} from 'react-bootstrap';
import Loader from 'react-loader-spinner'
import Card from "../Card/Index";

import DEMO from "../../../store/constant";
import Aux from "../../../hoc/_Aux";

import api from '../../../api'
import moment from 'moment';

import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./style.scss"

class TableHomologation extends Component {
    state = {
        pasta_homologar: [],
        loading: true,

        currentPage: 1,
        total: 1,
        limite: 10,
    }

    componentDidMount(){
        this.getPastaUnauthorized()
    }

    getPastaUnauthorized = async (currentPage = 1) => {
        this.setState({loading: true})
        try {
            const res = await api().get(`pastas/homologar?page=${currentPage}&limite=${this.state.limite}`)
            if(res.data.retorno){
                this.setState({ pasta_homologar: res.data.pastas, total: res.data.total, loading: false }, this.forceUpdate())
                console.log(res.data.pastas)
            }else{
                console.log(res.data.msg)
            }
        } catch (error) {
            console.error(error)
        }
    }

    avaliar = async (id_pasta, avaliacao) => {
        console.log(this.state.pasta_homologar)
        try {
            const res = await api().put(`/pastas/${id_pasta}/avaliar`, {
                avaliacao
            })

            if(res.data.retorno){
                let pastas = this.state.pasta_homologar
                pastas = pastas.map(p => {
                    if (p.id_pasta === id_pasta) return {...p, avaliacao}
                    return p
                })
                this.setState({pasta_homologar: pastas})
            }else{
                console.log(res.data.msg)
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { total, limite, loading } = this.state
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card
                        className='card'
                        title='Pastas para Homologação'
                        bodyClass={'px-0 py-0'}
                        isOption
                        fullscreen
                        reload
                        pagination={{ itemsCountPerPage: limite, totalItemsCount: total }}
                        loading={loading}
                        onCardReload={this.getPastaUnauthorized}
                        onPageChange={(pg) => this.getPastaUnauthorized(pg)}>
                            <div>
                                <Table responsive hover style={{marginBottom: 0}}>
                                    <tbody>
                                        {
                                        this.state.pasta_homologar.map((pasta, id) =>
                                            <tr className="unread" key={pasta.id_pasta}>
                                                <td style={{textAlign: 'left'}}>
                                                    <h6 className="mb-1">
                                                        <a href={`/admin/pasta/${pasta.id_pasta}`} className="f-12">{pasta.nome}  <Badge variant="secondary">{pasta.categoria}</Badge></a>
                                                    </h6>
                                                    <p className="m-0">{pasta.discussao}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted">
                                                        <i className="fa fa-circle text-c-yellow f-10 m-r-15"/>
                                                        {moment(pasta.data_criacao).format('DD/MM/Y')}
                                                    </h6>
                                                </td>
                                                <td>
                                                    <button onClick={() => this.avaliar(pasta.id_pasta, +1)} style={{...pasta.avaliacao === -1 || pasta.avaliacao === null ? {background: 'white'} : {}}} className={`btn-peruibe btn btn-secondary btn-success text-black `}>Aprovar</button>
                                                    <button onClick={() => this.avaliar(pasta.id_pasta, -1)} style={{...pasta.avaliacao === 1 || pasta.avaliacao === null ? {background: 'white'} : {}}} className={`btn-peruibe btn btn-secondary btn-danger text-black `}>Reprovar</button>
                                                </td>
                                            </tr>
                                        )
                                        }
                                        {!this.state.pasta_homologar.length &&
                                            <tr className="unread">
                                                <td colspan="4">
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

export default TableHomologation;