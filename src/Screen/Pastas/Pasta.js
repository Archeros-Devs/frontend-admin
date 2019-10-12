import React, {Component} from 'react';
import {Row, Col, Card, Image} from 'react-bootstrap';

import api from '../../api'
import Aux from "../../hoc/_Aux";

import profile_image from '../../assets/images/user/avatar-2.jpg'

import './style.scss'

class SamplePage extends Component {
    state = {
        id_pasta: this.props.match.params.id_pasta,
        pasta: {},

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
                console.info(res.data.pasta)
                this.setState({pasta: res.data.pasta})
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
                        <div className='my-card card-pasta'>
                             <label>{pasta.nome}</label>
                        </div>
                        <div className='my-card card-user'>
                            <Image src={profile_image} roundedCircle />
                            <div className='info'>
                                <label>{pasta.user_nome}</label>
                                <label>{pasta.email}</label>
                                <label>{pasta.escolaridade}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SamplePage;