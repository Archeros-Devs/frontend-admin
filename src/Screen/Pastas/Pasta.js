import React, {Component} from 'react';
import {Row, Col, Card, Image} from 'react-bootstrap';

import api from '../../api'
import Aux from "../../hoc/_Aux";

import ModalImage from "../../App/components/ModalImage/Index";

import profile_image from '../../assets/images/user/avatar-2.jpg'

import './style.scss'

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
        const { pasta } = this.state;
        return (
            <Aux>
                <div className='my-container'>
                    <div className='header'>
                    <span className='title my-card'>{pasta.nome}</span>
                    </div>
                    <div className='body'>
                        <div className='my-card col-left'>
                             <label>{pasta.nome}</label>
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
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SamplePage;