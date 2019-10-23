import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/Card/Index.js";

class SamplePage extends Component {
    state = {
        Index: [],
        loading: false,
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card
                            className='card'
                            title='Administradores'
                            bodyClass={'px-0 py-0'}
                            isOption
                            fullscreen
                            reload
                            paginton={{ itemsCountPerPage: 5, totalItemsCount: 2 }}
                            loading={this.state.loading}
                            cardHeaderRight={
                                <a href='/admin/admin/novo'>
                                    <i className="fa fa-plus f-20 m-r-15" />
                                </a>
                            }>
                            <div style={{ padding: 15 }}>
                                <p>
                                    "Em Breve"
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;