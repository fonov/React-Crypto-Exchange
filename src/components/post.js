import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Card, CardBody, Row, Col, ButtonGroup, Button, FormGroup, Label, Input, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import TradingViewWidget from 'react-tradingview-widget';
import TraderBio from '../elements/traderBio'
import URLS from "../constants/urls";
import ReactSVG from 'react-svg';
import {push} from "react-router-redux";


class Trading extends Component{

    render() {

        const {push} = this.props;

        return(
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-page it-post'>
                    <div className='back' onClick={() => push(URLS.Trader)}>
                        <ReactSVG
                            path={require('../assets/icons/arrow-left.svg')}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <TraderBio short/>
                    </div>
                    <Row className='justify-content-center'>
                        <Col className='col-7'>
                            <Card className='post'>
                                <CardBody>
                                    <div className='it-half-opacity it-fs12 it-medium'>
                                        28 dec 2017
                                    </div>
                                    <div className='mt-2 it-fs14'>
                                        So it is critically important that you get just the right telescope for where you are and what your star gazing preferences are.
                                    </div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='it-fs14 text-primary'>
                                            Hide 4 comments
                                        </div>
                                        <div className='it-fs14 it_light_opacity'>
                                            <div className='d-flex flex-row'>
                                                <div className='d-flex flex-row'>
                                                    <ReactSVG path={require('../assets/icons/like.svg')}/> <span className='ml-1'>Like 0</span>
                                                </div>
                                                <div className='share'>
                                                    <ReactSVG path={require('../assets/icons/share2.svg')}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <Input placeholder='Add your comment' />
                                    </div>
                                    <div className='comments'>
                                        <div className='comment'>
                                            <div className='d-flex flex-row'>
                                                <div style={{width: 55, marginRight: 15}}>
                                                    <img src='http://via.placeholder.com/40x40' className='rounded-circle'/>
                                                </div>
                                                <div>
                                                    <span className='text-primary it-medium it-fs14'>Sergey Surin</span>
                                                    <span className='it-fs12 it-half-opacity ml-1'>3 dec 2017</span>
                                                    <p className='it-fs14 mt-1'>
                                                        Hola Gonzalo. Enhorabuena para tu trabajo. Estoy copiando tu trabajo pero quiero hacerte una pregunta . He hecho una primera inversion de 250$ y despues una segunda de otro 250$. Pero despues de tre dias estoy copiando un valor de solo 212$. Tu sabe porque?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment'>
                                            <div className='d-flex flex-row'>
                                                <div style={{width: 55, marginRight: 15}}>
                                                    <img src='http://via.placeholder.com/40x40' className='rounded-circle'/>
                                                </div>
                                                <div>
                                                    <span className='text-primary it-medium it-fs14'>Sergey Surin</span>
                                                    <span className='it-fs12 it-half-opacity ml-1'>3 dec 2017</span>
                                                    <p className='it-fs14 mt-1'>
                                                        Hola Gonzalo. Enhorabuena para tu trabajo. Estoy copiando tu trabajo pero quiero hacerte una pregunta . He hecho una primera inversion de 250$ y despues una segunda de otro 250$. Pero despues de tre dias estoy copiando un valor de solo 212$. Tu sabe porque?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trading);