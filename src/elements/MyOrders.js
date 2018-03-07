import React, { Component } from 'react';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import { ButtonGroup, Button, Progress, Row, Col } from 'reactstrap';
import ReactSVG from 'react-svg';
import {set_my_orders, set_top_panel} from "../actions/menu";
import {push} from "react-router-redux";
import URLS from '../constants/urls'


class MyOrders extends Component{

    render() {

        const {my_orders, push, set_my_orders, set_top_panel} = this.props;

        return (
            <div className='my_orders'>
                <div className="d-flex justify-content-between mt-2">
                    <div className='ml-3 it-fs14 it_light_opacity'>
                        My orders
                    </div>
                    <div className='mr-2 d-flex flex-row'>
                        <div onClick={() => {
                            set_my_orders(2)
                        }}>
                            <ReactSVG
                                path={require('../assets/icons/share.svg')}
                                className='icon mr-3'
                            />
                        </div>
                        <div onClick={() => {
                            set_top_panel(2);
                            set_my_orders(0)
                        }}>
                            <ReactSVG
                                path={require('../assets/icons/close_bg.svg')}
                                className='icon'
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row it-btn-group w-100 ml-3 mr-2">
                        <div className="it-btn active w-50">Opened</div>
                        <div className="it-btn border-left-0 w-50"><span>Closed</span></div>
                    </div>
                </div>
                <Row className='mt-3 mx-1 text-left ml-3'>
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
                            <strong className='it-fs14 text-success'>+18.09 %</strong>
                        </div>
                    </Col>
                </Row>
                <p className='mt-2 text-primary text-center'>
                    Show more <FontAwesome name='caret-down' />
                </p>
                <hr className='mx-2' />
                <Row className='mt-3 mx-1 text-left ml-3'>
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
                            <strong className='it-fs14 text-success'>+18.09 %</strong>
                        </div>
                    </Col>
                </Row>
                <p className='mt-2 text-primary text-center'>
                    Show less <FontAwesome name='caret-up' />
                </p>
                <div className='progress-block d-flex flex-row'>
                    <Progress color="success" value="50">50%</Progress>
                    <ReactSVG
                        path={require('../assets/icons/close_bg.svg')}
                        className='icon'
                    />
                </div>
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
                <Row className='mt-3 mx-1 text-left ml-3'>
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
                            <strong className='it-fs14 text-success'>+18.09 %</strong>
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
        my_orders: state.menu.my_orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        set_top_panel: number => dispatch(set_top_panel(number)),
        set_my_orders: number => dispatch(set_my_orders(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);