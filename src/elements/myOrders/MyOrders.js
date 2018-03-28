import React, { Component } from 'react';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import { Progress, Row, Col } from 'reactstrap';
import ReactSVG from 'react-svg';
import {set_my_orders, set_top_panel} from "../../actions/menu";
import {push} from "react-router-redux";


class MyOrders extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        const {set_my_orders, set_top_panel} = this.props;

        return (
            <div>
                <div className="d-flex justify-content-between mt-2">
                    <div className='ml-3 it-fs14 it_light_opacity'>
                        My orders
                    </div>
                    <div className='mr-2 d-flex flex-row icons'>
                        <div onClick={() => {
                            set_my_orders(2)
                        }}>
                            <ReactSVG
                                path={require('../../assets/icons/share.svg')}
                                className='icon mr-3'
                            />
                        </div>
                        <div onClick={() => {
                            set_top_panel(2);
                            set_my_orders(0)
                        }}>
                            <ReactSVG
                                path={require('../../assets/icons/close_bg.svg')}
                                className='icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='px-3 row-sections'>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="d-flex flex-row it-btn-group w-100">
                            <div className="it-btn active w-50">Opened</div>
                            <div className="it-btn border-left-0 w-50"><span>Closed</span></div>
                        </div>
                    </div>
                    <Row className='mt-3 text-left'>
                        <Col md={3}>
                            <div className="d-flex flex-column">
                                <div className='it-fs14'>04:44</div>
                                <div className='it-fs11 it_light_opacity'>27/11/2017</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex flex-column pl-4">
                                <div className='it-fs14 it-fw6'>XMR/BTC</div>
                                <div className='it-fs11 it_light_opacity'>0.83707900 XMR</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex flex-column">
                                <span className='it-fs14 text-success it-fw6'>+18.09 %</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-2 text-left'>
                        <Col md={{ size: 6, offset: 3 }}>
                            <div className="d-flex flex-column pl-4">
                            <span className='text-primary it-pointer text-left'>
                            Show more <FontAwesome name='caret-down' />
                        </span>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row className='mt-3 text-left'>
                        <Col md={3}>
                            <div className="d-flex flex-column">
                                <div className='it-fs14'>04:44</div>
                                <div className='it-fs11 it_light_opacity'>27/11/2017</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex flex-column pl-4">
                                <div className='it-fs14 it-fw6'>XMR/BTC</div>
                                <div className='it-fs11 it_light_opacity'>0.83707900 XMR</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex flex-column">
                                <span className='it-fs14 text-success it-fw6'>+18.09 %</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-2 text-left'>
                        <Col md={{ size: 6, offset: 3 }}>
                            <div className="d-flex flex-column pl-4">
                            <span className='text-primary it-pointer text-left'>
                            Show less <FontAwesome name='caret-up' />
                        </span>
                            </div>
                        </Col>
                    </Row>
                    <div className='progress-block d-flex flex-row mt-3'>
                        <Progress color="success" value="50">50%</Progress>
                        <ReactSVG
                            path={require('../../assets/icons/close_bg.svg')}
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
                    <hr />
                    <Row className='mt-3 text-left'>
                        <Col md={3}>
                            <div className="d-flex flex-column">
                                <div className='it-fs14'>04:44</div>
                                <div className='it-fs11 it_light_opacity'>27/11/2017</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex flex-column pl-4">
                                <div className='it-fs14 it-medium'>XMR/BTC</div>
                                <div className='it-fs11 it_light_opacity'>0.83707900 XMR</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex flex-column">
                                <span className='it-fs14 text-success it-medium'>+18.09 %</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-2 text-left'>
                        <Col md={{ size: 6, offset: 3 }}>
                            <div className="d-flex flex-column pl-4">
                            <span className='text-primary it-pointer text-left'>
                            Show more <FontAwesome name='caret-down' />
                        </span>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                </div>
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