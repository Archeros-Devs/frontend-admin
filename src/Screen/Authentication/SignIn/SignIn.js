import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login'

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import logo from '../../../assets/images/logo.png';

class SignUp extends React.Component {
    constructor(props){super(props)}

    state = {
        email: '',
        senha: ''
    }

    responseFacebook = (response) => {
        console.log(response)
    }
    responseGoogle = (response) => {
        console.log(response)
    }

    handleSubmit = async () => {
        axios.defaults.baseURL = 'http://peruibemelhor.nodejs7605.kinghost.net:21086/'

        axios.post('signin', {
            email : this.state.email,
	        password : this.state.senha
        })
        .then(res => {
            if(res.data.retorno){
                axios.defaults.headers.common = {'Authorization': `Bearer ${res.data.token}`}
                this.props.navigation.navigate("/dashboard")
            }else{
                console.log(res.data.msg)
            }
        }).catch(err => console.log(err))
    }

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <form className="card" action="#" onSubmit={this.handleSubmit} >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <img  style={{width: '200px'}} src={logo} alt="logo"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="E-mail" required
                                        value={this.state.email} onChange={(event)=>this.setState({email: event.target.value})}/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Senha" required
                                        value={this.state.senha} onChange={(event)=>this.setState({senha: event.target.value})}/>
                                </div>
                                <div className="form-group text-left" style={{WebkitJustifyContent: 'space-between'}}>
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Salvar Credenciais</label>
                                    </div>
                                    <button className="btn">
                                        <i className="fa fa-sign-in text-primary f-16"/>Entrar
                                    </button>
                                </div>
                                <div className="input-group mb-4" style={{WebkitJustifyContent: 'space-between'}}>
                                    <FacebookLogin
                                        appId="415441372420544"
                                        autoLoad
                                        fields="name,email,picture"
                                        cssClass="btn shadow-2 md-6"
                                        icon={<i className="fa fa-facebook f-16" style={{color: 'white'}}/>}
                                        textButton="Facebook"
                                        onClick={()=>{}}
                                        callback={this.responseFacebook}
                                        style={{backgroundColor: 'blue'}}
                                    />
                                    <GoogleLogin
                                        clientId="376063619992-9ojvonbnkn4hbtnv286i3kndk1a256so.apps.googleusercontent.com"
                                        buttonText="Google"
                                        cssClass="btn shadow-2 md-6"
                                        icon={<i className="fa fa-google-plus f-16" style={{color: 'white'}}/>}
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                    />
                                </div>
                                {/*<p className="mb-2 text-muted">Esqueceu a senha? <NavLink to="/auth/reset-password-1">Recuperar</NavLink></p>*/}
                                {/*<p className="mb-0 text-muted">Não tem uma conta? <NavLink to="/auth/signup">Inscrever-se</NavLink></p>*/}
                            </div>
                        </form>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp;