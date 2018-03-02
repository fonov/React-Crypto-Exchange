import React, { Component } from 'react';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import { ButtonGroup, Button, Progress, Row, Col } from 'reactstrap';


class MyOrders extends Component{

    render() {

        const {} = this.props;

        return (
            <div className='my_orders'>
                <div className="d-flex justify-content-between mt-2">
                    <div className='ml-3 it-fs14 it_light_opacity'>
                        My orders
                    </div>
                    <div className='it-fs16 it-half-opacity mr-2'>
                        <FontAwesome name='share-square-o' className='mr-2'/>
                        <FontAwesome name='times' />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row it-btn-group mt-4 w-100 ml-3 mr-2">
                        <div className="it-btn active w-50">Opened</div>
                        <div className="it-btn border-left-0 w-50"><span>Closed</span></div>
                    </div>
                </div>
                <Row className='mt-4 mx-1 text-left ml-3'>
                    <Col md={3}>
                        <div className="d-flex flex-column">
                            <div className='it-fs14'>04:44</div>
                            <div className='it-fs11 it_light_opacity'>27/11/2017</div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex flex-column pl-4">
                            <div className='it-fs14'><strong>XMR/BTC</strong></div>
                            <div className='it-fs11 it_light_opacity'>0.83707900 XMR</div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex flex-column">
                            <div className='it-fs14 text-success'>+18.09 %</div>
                        </div>
                    </Col>
                </Row>
                <p className='mt-2 text-primary text-center'>
                    Show more <FontAwesome name='caret-down' />
                </p>
                <hr className='mx-2' />
                <Row className='mt-4 mx-1 text-left ml-3'>
                    <Col md={3}>
                        <div className="d-flex flex-column">
                            <div className='it-fs14'>04:44</div>
                            <div className='it-fs11 it_light_opacity'>27/11/2017</div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex flex-column pl-4">
                            <div className='it-fs14'><strong>XMR/BTC</strong></div>
                            <div className='it-fs11 it_light_opacity'>0.83707900 XMR</div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex flex-column">
                            <div className='it-fs14 text-success'>+18.09 %</div>
                        </div>
                    </Col>
                </Row>
                <p className='mt-2 text-primary text-center'>
                    Show less <FontAwesome name='caret-up' />
                </p>
                <Row className='mx-2 progress-block'>
                    <div className='col-12'>
                        <Progress color="success" value="50">50%</Progress>
                        <div className='times it-fs18'>
                            <FontAwesome name='times' />
                        </div>
                    </div>
                </Row>
                <div className="counter-list mt-2 it-fs14 it_light_opacity">
                    <ul>
                        <li>
                            <span className="key">Type</span>
                            <span className="value">Buy Market</span>
                        </li>
                        <li>
                            <span className="key">Actual price</span>
                            <span className="value">0.02315000</span>
                        </li>
                        <li>
                            <span className="key">Order price</span>
                            <span className="value">0.023323</span>
                        </li>
                        <li>
                            <span className="key">Total</span>
                            <span className="value">0.02315000 BTC</span>
                        </li>
                    </ul>
                </div>
                <hr className='mx-2' />
                <Row className='mt-4 mx-1 text-left ml-3'>
                    <Col md={3}>
                        <div className="d-flex flex-column">
                            <div className='it-fs14'>04:44</div>
                            <div className='it-fs11 it_light_opacity'>27/11/2017</div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex flex-column pl-4">
                            <div className='it-fs14'><strong>XMR/BTC</strong></div>
                            <div className='it-fs11 it_light_opacity'>0.83707900 XMR</div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex flex-column">
                            <div className='it-fs14 text-success'>+18.09 %</div>
                        </div>
                    </Col>
                </Row>
                <p className='mt-2 text-primary text-center'>
                    Show more <FontAwesome name='caret-down' />
                </p>
                <hr className='mx-2' />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);