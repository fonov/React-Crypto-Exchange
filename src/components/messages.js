import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Badge, Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import TradeBio from '../elements/traderBio'
import BaseLeftPage from '../elements/BaseLeftPage'
import {ClosePageAction} from '../actions/LeftPage'
import ReactSVG from 'react-svg';


class Messages extends Component{
    render() {

        const {push, theme, ClosePageAction} = this.props;

        return (
            <BaseLeftPage
                BasePageProps={{
                    active: [false, false, false],
                    message_active: true
                }}
            >
                <div className='it-messages'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Messages</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => ClosePageAction(URLS.Trading)}>
                                <ReactSVG
                                    path={require('../assets/icons/close_bg.svg')}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col className='contact-list' sm={4} md={4} lg={3} xl={3}>
                            <Row>
                                <Col className='col-10' md={10} xl={10} lg={10}>
                                    <div className="input-group search">
                                        <input type="text" className="form-control border-right-0" placeholder='Search'/>
                                        <div className="input-group-append">
                                    <span className="input-group-text border-left-0">
                                        <FontAwesome name='search' />
                                    </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='col-2 it-pointer' md={2} xl={2} lg={2}>
                                    <img src={theme.add_message} className='new-message'/>
                                </Col>
                            </Row>
                            <ListGroup className='mt-4'>
                                {
                                    [1,2,3,4].map(item => (
                                        <ListGroupItem key={item} className='it-pointer'>
                                            <Row>
                                                <Col className='col-2'>
                                                    <img src='http://via.placeholder.com/38x38' className='rounded-circle'/>
                                                </Col>
                                                <Col className='col-7 pl-4 pt-1'>
                                                    <span className='it-medium it-fs13'>Victor Dunn</span>
                                                    <p className='it-fs12 it_light_opacity'>Comment On The</p>
                                                </Col>
                                                <Col className='col-3 d-flex justify-content-end'>
                                                    <div className='d-flex flex-column'>
                                                        <div><span className='it-medium it-fs12 it-half-opacity'>16:41</span></div>
                                                        <div><Badge pill style={{backgroundColor: '#9596a0'}}>23</Badge></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    ))
                                }
                                <ListGroupItem active>
                                    <Row>
                                        <Col className='col-2'>
                                            <img src='http://via.placeholder.com/38x38' className='rounded-circle'/>
                                        </Col>
                                        <Col className='col-7 pl-4 pt-1'>
                                            <span className='it-medium it-fs13'>Victor Dunn</span>
                                            <p className='it-fs12 it_light_opacity'>Comment On The</p>
                                        </Col>
                                        <Col className='col-3 d-flex justify-content-end'>
                                            <div className='d-flex flex-column'>
                                                <div><span className='it-medium it-fs12 it-half-opacity'>16:41</span></div>
                                                <div><Badge pill color='light'>23</Badge></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm={5} md={5} lg={6} xl={6}>
                            <div className='chat'>
                                {
                                    [1,2,3,4,5,6].map(item => (
                                        <div className='message' key={item}>
                                            <div className='d-flex flex-row'>
                                                <div style={{width: 55, marginRight: 15}}>
                                                    <img src='http://via.placeholder.com/35x35' className='rounded-circle'/>
                                                </div>
                                                <div>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className='it-medium it-fs14'>Sergey Surin</span>
                                                        <div>
                                                            <img src={theme.read} className='double-check' />
                                                            <span className='it-fs12 it-medium it-half-opacity ml-2'>15:40</span>
                                                        </div>
                                                    </div>
                                                    <p className='it-fs14 mt-2'>
                                                        Hola Gonzalo. Enhorabuena para tu trabajo. Estoy copiando tu trabajo pero quiero hacerte una pregunta . He hecho una primera inversion de 250$ y despues una segunda de otro 250$. Pero despues de tre dias estoy copiando un valor de solo 212$. Tu sabe porque?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='text-block'>
                                <div className='d-flex flex-row'>
                                    <div style={{width: 55}}>
                                        <img src='http://via.placeholder.com/32x32' className='rounded-circle'/>
                                    </div>
                                    <div className='w-100'>
                                        <Input type="textarea" className='textarea' name="text" id="exampleText" placeHolder='Write a message...'/>
                                        <Button color='light' className='border it-fs13 it-medium mt-2 btn-send'>
                                            Send
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='text-center trader' sm={3} md={3} xl={2} lg={2}>
                            <TradeBio/>
                        </Col>
                    </Row>
                </div>
            </BaseLeftPage>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        ClosePageAction: url => dispatch(ClosePageAction(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);