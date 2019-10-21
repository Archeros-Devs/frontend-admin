import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import api from "../../api";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class Dashboard extends React.Component {
    state = {
        usuarios: 0,
        admins: 0,
        pastas: 0,
        aprovado: 0,
        pendente: 0,
        reprovado: 0,

        rank: []
    }

    componentDidMount() {
        this.dadosDashboard()
        this.rankFolders()
    }

    dadosDashboard = async () => {
        try {
            const res = await api().get('/dashboard')
            this.setState(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    rankFolders = async () => {
        const res = await api().get('/rank')
        this.setState({ rank: res.data })
    }

    render() {
        const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green" />3784</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Julie Vad</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green" />3544</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red" />2739</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Frida Thomse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red" />1032</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green" />8750</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red" />8750</span>
                    </div>
                </div>
            </Aux>
        );

        const {
            usuarios,
            admins,
            pastas,
            aprovado,
            pendente,
            reprovado,
            rank
        } = this.state
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <a href='/admin/admin' >
                            <Card className='card-event'>
                                <Card.Body>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col">
                                            <h5 className="m-0">Administradores</h5>
                                        </div>
                                        <div className="col-auto">
                                            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">{(admins / usuarios) * 100}%</label>
                                        </div>
                                    </div>
                                    <h2 className="mt-2 f-w-300">{admins}<sub className="text-muted f-14">Admins</sub></h2>
                                    <h6 className="text-muted mt-3 mb-0">Adicionar Administrador</h6>
                                    <i className="fa fa-user text-c-purple f-50" />
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={6} xl={4}>
                        <a href='/admin/pastas/homologar'>
                            <Card className='card-social'>
                                <Card.Body className='border-bottom'>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-auto">
                                            <i className="fa fa-folder text-primary f-36" />
                                        </div>
                                        <div className="col text-right">
                                            <h3><span className="text-muted">Pastas: {pastas}</span></h3>
                                            <h5 className="text-c-green mb-0">
                                                +{pendente} <span className="text-muted">Homologar</span>
                                            </h5>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className="row align-items-center justify-content-center card-active">
                                        <div className="col-6">
                                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Reprovados:</span>{reprovado}</h6>
                                            <div className="progress">
                                                <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: `${reprovado / pastas * 100}%`, height: '6px' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Aprovados:</span>{aprovado}</h6>
                                            <div className="progress">
                                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: `${aprovado / pastas * 100}%`, height: '6px' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <a href='/admin/usuarios'>
                                <Card.Body className='border-bottom'>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-users f-30 text-c-green" />
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">{usuarios}</h3>
                                            <span className="d-block text-uppercase">Total de Usuários</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </a>
                            <a href='/admin/pastas'>
                                <Card.Body>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-folder f-30 text-c-blue" />
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">{pastas}</h3>
                                            <span className="d-block text-uppercase">Total de Pastas</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Melhor Avaliadas</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center m-b-20">
                                    <div className="col-6">
                                        <h5 className="f-w-300 d-flex align-items-center float-left m-0">Pastas</h5>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="d-flex  align-items-center float-right m-0">Votos</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    {rank.map((pasta, index) => {
                                        let pos = pasta.avaliacoes_positivas + 0 // +0 converte null para 0
                                        let neg = pasta.avaliacoes_negativas + 0
                                        console.log(pasta)
                                        return (
                                            <div className="col-xl-12" key={index}>
                                                <a href={`/admin/pasta/${pasta.id_pasta}`} className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />{pasta.nome}</a>
                                                <h6 className="align-items-center float-right">{pos + 0}</h6>
                                                <div className="progress m-t-30 m-b-20" style={{ height: '6px' }}>
                                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: `${pos * 100 / (pos + neg)}%` }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*<Col md={6} xl={8} className='m-b-30'>
                        <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                            <Tab eventKey="today" title="Hoje">
                                {tabContent}
                            </Tab>
                            <Tab eventKey="week" title="Este Mês">
                                {tabContent}
                            </Tab>
                            <Tab eventKey="all" title="Todos">
                                {tabContent}
                            </Tab>
                        </Tabs>
                    </Col>*/}
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;