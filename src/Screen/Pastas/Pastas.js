import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap';

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

    componentDidMount(){
        this.pastas()
    }

    pastas = () => {
        api.get('/pastas')
        .then(res => {
            if(res.data.retorno){
                this.setState({pastas: res.data.pasta})
            }else{

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
                            pagination={{itemsCountPerPage: 5, totalItemsCount: 2}}
                            loading={this.state.loading}
                            onCardReload={() => {}}>
                            <div>
                                <Table responsive hover style={{marginBottom: 0}}>
                                    <tbody>
                                        {
                                        this.state.pastas.map((pasta, id) =>
                                            <tr className="unread" key={pasta.id_pasta}>
                                                <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td style={{textAlign: 'left'}}>
                                                    <h6 className="mb-1"><a href={`/admin/pastas/${pasta.id_pasta}`} className="f-12">{pasta.nome}</a></h6>
                                                    <p className="m-0">{pasta.discussao}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted">
                                                        <i className="fa fa-circle text-c-yellow f-10 m-r-15"/>
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
                                        {!this.state.pastas.length &&
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

export default SamplePage;