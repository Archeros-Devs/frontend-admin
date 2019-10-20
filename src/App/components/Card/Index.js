import React, {Component} from 'react';
import {Dropdown, Card, Collapse} from 'react-bootstrap';
import windowSize from 'react-window-size';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

import Pagination from "react-js-pagination";
require("./style.scss");

/**
 * Props
 * @param isOption {bollean} - Monstrar menu de opções
 *
 * @param loading {bollean} - Monstrar carregamento
 * @param onCardReload {function} - Chamada quando o botão recarregar é clicado
 *
 * @param pagination {Object} - Paginação
 * @param pagination.itemsCountPerPage {number} - Itens por pagina
 * @param pagination.totalItemsCount {number} - Total de itens
 * @param onPageChange {function} - Chamado quando a pagina for alterada
 *
 */
class MainCard extends Component {
    state = {
        isOption: this.props.isOption,
        fullCard: false,
        collapseCard: false,
        loadCard: this.props.loading,
        cardRemove: false,
        activePage: 1
    };

    componentWillReceiveProps = (props) => {
        if(this.state.loadCard !== props.loading) this.setState({loadCard: props.loading})
    }

    cardReloadHandler = () => {
        if(this.props.onCardReload) this.props.onCardReload();
        this.setState({loadCard: true});
        setInterval(() => {
            this.setState({loadCard: false});
        }, 3000);
    };

    cardRemoveHandler = () => {
        this.setState({cardRemove: true});
    };

    handlePageChange(pageNumber) {
        if(pageNumber !== this.state.activePage){
            if(this.props.onPageChange) this.props.onPageChange(pageNumber);
            this.setState({activePage: pageNumber});
        }
    }

    render() {
        let fullScreenStyle, loader, cardHeaderRight, cardHeader;
        let card = '';
        let cardClass = [this.props.className];

        if(this.state.isOption){
            this.props.cardHeaderRight
             ? cardHeaderRight =
                <div style={{right: 10, display: 'inline-block', float: 'right', padding: 0, position: 'absolute'}}>
                    {this.props.cardHeaderRight}
                </div>
            :
            cardHeaderRight = (
                <div className="card-header-right">
                    <Dropdown alignRight={true} className="btn-group card-option">
                        <Dropdown.Toggle id="dropdown-basic" className="btn-icon">
                            <i className="feather icon-more-horizontal"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as='ul' className="list-unstyled card-option">
                            {this.props.fullscreen &&
                            <Dropdown.Item as='li' className="dropdown-item" onClick={() => {this.setState(prevState => {return {fullCard: !prevState.fullCard}})}}>
                                <i className={this.state.fullCard ? 'feather icon-minimize' : 'feather icon-maximize'}/>
                                <a href={DEMO.BLANK_LINK}> {this.state.fullCard ? 'Restaurar' : 'Maximizar'} </a>
                            </Dropdown.Item>}
                            {this.props.expand &&
                            <Dropdown.Item as='li' className="dropdown-item" onClick={() => {this.setState(prevState => {return {collapseCard: !prevState.collapseCard}})}}>
                                <i className={this.state.collapseCard ? 'feather icon-plus' : 'feather icon-minus'}/>
                                <a href={DEMO.BLANK_LINK}> {this.state.collapseCard ? 'Expandir' : 'Diminuir'} </a>
                            </Dropdown.Item>}
                            {this.props.reload &&
                            <Dropdown.Item as='li' className="dropdown-item" onClick={this.cardReloadHandler}>
                                <i className='feather icon-refresh-cw'/>
                                <a href={DEMO.BLANK_LINK}> Recarregar </a>
                            </Dropdown.Item>}
                            {this.props.excludable &&
                            <Dropdown.Item as='li' className="dropdown-item" onClick={this.cardRemoveHandler}>
                                <i className='feather icon-trash'/>
                                <a href={DEMO.BLANK_LINK}> Excluir </a>
                            </Dropdown.Item>}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            );
        }

        cardHeader = (
            <Card.Header>
                <Card.Title as='h5'>{this.props.title}</Card.Title>
                {cardHeaderRight}
            </Card.Header>
        );

        if (this.state.fullCard) {
            cardClass = [...cardClass, 'full-card'];
            fullScreenStyle = {position: 'fixed', top: 0, left: 0, right: 0, width: this.props.windowWidth, height: this.props.windowHeight};
        }

        if (this.state.loadCard) {
            cardClass = [...cardClass, 'card-load'];
            loader = (
                <div className="card-loader">
                    <i className="pct-loader1 anim-rotate"/>
                </div>
            );
        }

        if (this.state.cardRemove) {
            cardClass = [...cardClass, 'd-none'];
        }

        if (this.props.cardClass) {
            cardClass = [...cardClass, this.props.cardClass];
        }

        card = (
            <Card className={cardClass.join(' ')} style={fullScreenStyle}>
                {cardHeader}
                <Collapse in={!this.state.collapseCard}>
                    <div>
                        <Card.Body className={this.props.bodyClass}>
                            {this.props.children}
                        </Card.Body>
                        {this.props.pagination &&
                        <Card.Footer style={{padding: 0, paddingLeft: '1em', paddingRight: '1em', paddingTop: '1em', display: 'flex', justifyContent: 'flex-end'}}>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.props.pagination.itemsCountPerPage}
                            totalItemsCount={this.props.pagination.totalItemsCount}
                            pageRangeDisplayed={5}
                            onChange={(pageNumber) => this.handlePageChange(pageNumber)}
                        />
                        </Card.Footer>}
                    </div>
                </Collapse>
                {loader}
            </Card>
        );

        return (
            <Aux>
                {card}
            </Aux>
        );
    }
}

export default windowSize(MainCard);
