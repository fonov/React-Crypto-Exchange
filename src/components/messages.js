import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class Messages extends Component{
    render() {

        const {push} = this.props;

        return (
            <BasePage
                active={[false, false, false]}
                message_active={true}
            >
                <div className='it-messages'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Messages</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => push(URLS.Trading)}>
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col className='col-3 contact-list' md={3} lg={3} xl={3}>
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
                                <Col className='col-2' md={2} xl={2} lg={2}>
                                    <img src={require('../assets/icons/new_message/new-mess@3x.png')} className='new-message'/>
                                </Col>
                            </Row>
                            <ListGroup className='mt-4'>
                                {
                                    [1,2,3,4].map(item => (
                                        <ListGroupItem key={item}>
                                            <Row>
                                                <Col className='col-2'>
                                                    <img src='http://via.placeholder.com/38x38' className='rounded-circle'/>
                                                </Col>
                                                <Col className='col-7 pl-4 pt-1'>
                                                    <span className='it-medium it-fs13'>Victor Dunn</span>
                                                    <p className='it-fs12 it_light_opacity'>Comment On The</p>
                                                </Col>
                                                <Col className='col-3'>
                                                    <span className='it-medium it-fs12 it-half-opacity'>16:41</span>
                                                    <Badge pill style={{backgroundColor: '#9596a0'}}>23</Badge>
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
                                        <Col className='col-3'>
                                            <span className='it-medium it-fs12 it-half-opacity'>16:41</span>
                                            <Badge pill color='light'>23</Badge>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col className='col-6' md={6} lg={6} xl={6}>
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
                                                            <img src={require('../assets/icons/double-check/double-check.png')} className='double-check' />
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
                                        <Button color='light' className='border it-fs13 it-medium mt-2'>
                                            Send
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-2 text-center trader' md={2} xl={2} lg={2}>
                            <img src='http://via.placeholder.com/140x140' className='rounded-circle mb-4'/>
                            <div>
                                <strong className='it-fs24'>Eddie Becker</strong>
                            </div>
                            <Badge color='warning' pill className='mt-2'>
                                <span>top 100</span>
                            </Badge>
                            <div className='d-flex flex-column it-fs13 it-half-opacity mt-3'>
                                <div>
                                    <FontAwesome name='map-marker'/> Uzbekistan
                                </div>
                                <div className='mt-1'>
                                    Member since 19.09.2017
                                </div>
                                <div className='mt-1'>
                                    218 copiers
                                </div>
                            </div>
                            <div className='d-flex flex-row mt-2'>
                                <div>
                                    <Badge color='primary' pill className='badge-2'>
                                        <span>59</span><span>/289</span>
                                    </Badge>
                                </div>
                                <div className='profit'>
                                    <div className='d-flex flex-row'>
                                        <div>
                                            <img src={require('../assets/icons/profit/profit.png')} />
                                        </div>
                                        <div className='text-left text'>
                                            <div><strong className='text-success it-fs12'>57%</strong></div>
                                            <div><span className='it-fs12 it-half-opacity'>top profit</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 mb-4'>
                                <Button color='light' className='border export_btn_big it-fs14' block>
                                    <FontAwesome name='plus' className='mr-2'/> Copy trader
                                </Button>
                            </div>
                            <div className='it-fs14 mt-4 text-left'>
                                Hello, I am a long term investor and I have started investing many years ago. I like to find stocks that are undervalued,  look to P/E, ROE, ROA compared with the industry, also I like that the stocks which earning per share grow every year. Usually I can keep an stock for months, or even for years. But sometimes if I get a big gain in few days I can sell.  I look for information in sites like yahoo, zacks and Morningstar.
                                I recommend that you copy me with more than 500 usd
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);