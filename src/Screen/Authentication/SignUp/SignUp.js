import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";

class SignUp1 extends React.Component {
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
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Inscrever-se</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="E-mail"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Senha"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                            <label htmlFor="checkbox-fill-2" className="cr">Envie-me as <a href={DEMO.BLANK_LINK}> Informações </a> semanalmente.</label>
                                    </div>
                                </div>
                                <button className="btn btn-outline">Inscrever-se</button>
                                <p className="mb-0 text-muted">Já tem uma conta? <NavLink to="/auth/signin">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;