import React, {Component} from 'react';
import {Row, Col, Table, Card, Tabs, Tab} from 'react-bootstrap';

import DEMO from "../../store/constant";
import Aux from "../../hoc/_Aux";

import axios from 'axios';
import api from '../../api'
import moment from 'moment';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class SamplePage extends Component {
    constructor(props){super(props)}

    state = {
        pasta_homologar: []
    }

    componentDidMount(){
        this.getPastaUnauthorized()
    }

    getPastaUnauthorized = async () => {
        try {
            const res = await api.get(`${DEMO.SERVER_API}/pastas/homologar`)
            
            if(res.data.retorno){
                this.setState({ pasta_homologar: res.data.pastas })
                console.log(res.data.pastas)
            }else{
                console.log(res.data.msg)
            }
        } catch (error) {
            console.error(error)
        }
    }

    pressReprovar = (id) => console.log(id)
    pressAprovar = (id) => console.log(id)

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Pastas para Homologação</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                        {
                                        this.state.pasta_homologar.map(pasta => 
                                            <tr className="unread">
                                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1"><a href={DEMO.BLANK_LINK} className="f-12">{pasta.nome}</a></h6>
                                                    <p className="m-0">{pasta.descricao}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fa fa-circle text-c-yellow f-10 m-r-15"/>{moment(pasta.data_criacao).format('DD/MM/Y')}</h6>
                                                    <h6 className="text-muted">{pasta.localizacao}</h6>
                                                </td>
                                                {
                                                !pasta.avaliacao 
                                                ?
                                                <td>
                                                    <button onClick={() => this.pressReprovar(pasta.id_pasta)} className="label theme-bg2 text-white f-12">Reprovar</button>
                                                    <button onClick={() => this.pressAprovar(pasta.id_pasta)} className="label theme-bg text-white f-12">Aprovar</button>
                                                </td>
                                                :
                                                <td>
                                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '45%', height: '6px'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"/>
                                                </td>
                                                }
                                            </tr>
                                        )
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;