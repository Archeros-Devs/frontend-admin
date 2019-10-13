import React, {Component} from 'react';
import {Row, Col, Badge, Spinner} from 'react-bootstrap';
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

    componentDidMount(){
        this.getFolder()
    }

    getFolder = () => {
        /**
            categoria: "Saúde"
            data_criacao: "2019-09-24T03:00:00.000Z"
            descricao: "Ruínas de uma igreja do século 16 com placas de informações que detalham a importância histórica do local."
            discussao: "Mal iluminado"
            email: "archeros.devs@gmail.com"
            escolaridade: "Ensino Superior (Graduação)"
            homologada: 0
            id_categoria: 1
            id_pasta: 1
            id_usuario: 2
            localizacao: "Estância Balneária Convento Velho, Peruíbe - SP, 11750-000"
            nome: "Ruinas do Abarebebe"
            user_img: "https://foxhugh.files.wordpress.com/2012/06/6-jeremy-renner-as-clint-barton-hawkeye.png"
            user_nome: "Archeros Devs"
        **/
        let id_pasta = this.state.id_pasta
        api.get(`/pastas/${id_pasta}`)
        .then(res => {
            if(res.data.retorno){
                console.info(res.data)
                this.setState({pasta: res.data.pasta, imgs: res.data.imgs})
            }else{
                console.info(res.data.msg)
            }
            this.setState({loading: false})
        })
        .catch(error => {
            console.error(error)
        })
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
                    loading={this.state.loading}
                    onCardReload={() => {}}>
                    <div className='my-container'>
                        {!!pasta.nome &&
                        <div className='body'>
                            <div className='my-card col-left'>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h5>Descrição</h5>
                                <label>{moment(pasta.data_criacao).format('DD/MM/YYYY')}</label>
                                </div>
                                <label className="text-muted mb-4">{pasta.descricao}</label>
                                <h5>Discussão</h5>
                                <label className="text-muted mb-4">{pasta.discussao}</label>
                            </div>
                            <div className='col-right'>
                                <div className='my-card card-user'>
                                    <ModalImage
                                        images={[pasta.user_img || profile_image]}
                                        displayIndex={0}
                                        alt='Imagem do Usuário'
                                    />
                                    <div className='info'>
                                        <label>{pasta.user_nome}</label>
                                        <label>{pasta.email}</label>
                                        <label>{pasta.escolaridade}</label>
                                    </div>
                                </div>

                                {!!this.state.imgs.length &&
                                <div className='my-card card-imgs' style={{marginTop: '1em'}}>
                                    <ModalImage
                                        images={this.state.imgs}
                                        displayIndex={0}
                                    />
                                </div>}
                            </div>
                        </div>}
                    </div>
                </Card>
            </Aux>
        );
    }
}

export default SamplePage;