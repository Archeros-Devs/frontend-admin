import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import TableHomologation from '../../App/components/TableHomologation';

class SamplePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <TableHomologation />
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;