import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class Analytics extends Component {

    render() {
        return (
            <BasePage
                wallet_active={true}
            >
                <div className='it-analytics'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Analytics</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times'>
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);