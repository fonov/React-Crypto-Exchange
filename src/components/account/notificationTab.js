import React, { Component } from 'react';
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import {connect} from "react-redux";


const notificationTab = (props) => {

    const {theme} = props;

    return (
        <Row>
            <Col sm={12} md={12} xl={12} lg={12}>
                <div className='notification'>
                    <strong className='it-fs28'>Notifications</strong>
                    <Row className='it-pointer'>
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <Card>
                                <CardBody className='text-center'>
                                    <img src={theme.on_sms} />
                                    <div className='mt-2'>
                                        <span className='it-medium it-fs18'>SMS</span>
                                    </div>
                                    <div className='added'>
                                        <FontAwesome name='check' className='text-success'/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <Card>
                                <CardBody className='text-center'>
                                    <img src={theme.on_email} />
                                    <div className='mt-2'>
                                        <span className='it-medium it-fs18'>Email</span>
                                    </div>
                                    <div className='added not'>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <Card>
                                <CardBody className='text-center'>
                                    <img src={theme.browser} />
                                    <div className='mt-2'>
                                        <span className='it-medium it-fs18'>Browser</span>
                                    </div>
                                    <div className='added'>
                                        <FontAwesome name='check' className='text-success'/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <Card>
                                <CardBody className='text-center'>
                                    <img src={theme.sound} />
                                    <div className='mt-2'>
                                        <span className='it-medium it-fs18'>Sound</span>
                                    </div>
                                    <div className='added not'>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
};

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(notificationTab);