import React, {Component} from 'react';
import {Row, Col, Table, OverlayTrigger, Tooltip} from 'react-bootstrap';
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
    }

    componentDidMount(){
        this.getPastaUnauthorized()
    }

    getPastaUnauthorized = async () => {
        try {
            const res = await api.get(`pastas/homologar`)
            if(res.data.retorno){
                this.setState({ pasta_homologar: res.data.pastas })
                console.log(res.data.pastas)
            }else{
                console.log(res.data.msg)
            }
        } catch (error) {
            console.error(error)
        }
        this.setState({loading: false})
    }

    avaliar = async (id_pasta, avaliacao) => {
        console.log(this.state.pasta_homologar)
        try {
            const res = await api.put(`/pastas/${id_pasta}/avaliar`, {
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
                        pagination={{itemsCountPerPage: 5, totalItemsCount: 2}}
                        loading={this.state.loading}
                        onCardReload={this.getPastaUnauthorized}>
                            <div className=''>
                                <Table responsive hover>
                                    <tbody>
                                        {
                                        this.state.pasta_homologar.map((pasta, id) =>
                                            <tr className="unread" key={pasta.id_pasta}>
                                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1"><a href={`/admin/pastas/${pasta.id_pasta}`} className="f-12">{pasta.nome}</a></h6>
                                                    <p className="m-0">{pasta.discussao}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted">
                                                        <OverlayTrigger key={id} overlay={<Tooltip>{'asdasd'}</Tooltip>}>
                                                        <i className="fa fa-circle text-c-yellow f-10 m-r-15"/>
                                                        </OverlayTrigger>
                                                        {moment(pasta.data_criacao).format('DD/MM/Y')}
                                                    </h6>
                                                </td>
                                                <td>{console.log(pasta.avaliacao)}
                                                    <button onClick={() => this.avaliar(pasta.id_pasta, +1)} style={{...pasta.avaliacao === -1 || pasta.avaliacao === null ? {background: 'gray'} : {}}} className={`btn-peruibe btn btn-secondary btn-success text-white`}>Aprovar</button>
                                                    <button onClick={() => this.avaliar(pasta.id_pasta, -1)} style={{...pasta.avaliacao === 1 || pasta.avaliacao === null ? {background: 'gray'} : {}}} className={`btn-peruibe btn btn-secondary btn-danger text-white`}>Reprovar</button>
                                                </td>
                                            </tr>
                                        )
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