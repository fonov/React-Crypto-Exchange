import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class Account extends Component{

    render() {

        const {push} = this.props;

        return (
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-account'>
                    <Row>
                        <Col className='col-3 left-nav'>
                            <ListGroup>
                                <ListGroupItem>
                                    <Row>
                                        <Col className='col-3'>
                                            <img src='http://via.placeholder.com/58x58' className='rounded-circle'/>
                                        </Col>
                                        <Col className='col-9 text-left name'>
                                            <strong className='it-fs18 pl-2'>Victor Dunn</strong>
                                            <p className='it-fs12 it_light_opacity pl-2'>Last login 11 dec 2017 </p>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon active_nav'>
                                    <FontAwesome name='home' className='it-fs18'/> <span className='it-fs14 it_light_opacity text'>Overview</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <FontAwesome name='user' className='it-fs18'/> <span className='it-fs14 it_light_opacity text'>Account</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <img src={require('../assets/icons/security.svg')} /> <span className='it-fs14 it_light_opacity text'>Security</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <img src={require('../assets/icons/verifications.svg')} /> <span className='it-fs14 it_light_opacity text'>Verifications</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <img src={require('../assets/icons/api.svg')} /> <span className='it-fs14 it_light_opacity text'>API</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <img src={require('../assets/icons/interface.svg')} /> <span className='it-fs14 it_light_opacity text'>Interface</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <img src={require('../assets/icons/reports.svg')} /> <span className='it-fs14 it_light_opacity text'>Reports</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <FontAwesome name='bell' className='it-fs18'/> <span className='it-fs14 it_light_opacity text'>Notifications</span>
                                </ListGroupItem>
                            </ListGroup>
                            <p className='mt-4 pl-4'>
                                <FontAwesome name='sign-out' className='it-fs18'/> <span className='it-fs14 ml-2'>Logout</span>
                            </p>
                        </Col>
                        <Col className='col-7'>
                            <strong className='it-fs28'>Account</strong>
                            <div>
                                <strong className='it-fs16'>Personal information</strong>
                                <Row>
                                    <Col className='col-6'>
                                        <FormGroup>
                                            <Label for="exampleEmail">First name</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Eddie" />
                                        </FormGroup>
                                    </Col>
                                    <Col className='col-6'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Last name</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Becker" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="exampleText">Bio</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                                <Row>
                                    <Col className='col-6'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Username</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="EddieBecker" />
                                        </FormGroup>
                                    </Col>
                                    <Col className='col-6'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Country</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>United States</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button color='light' className='border it-fs14' block>
                                    Save
                                </Button>
                                <hr />
                                <Row>
                                    <Col className='col-6 border-right'>
                                        <strong className='it-fs16'>Email</strong>
                                        <div className='mt-4'>
                                            <span className='it-fs14'>my.new.email@gmail.com</span>
                                        </div>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" />
                                        </FormGroup>
                                        <Button color='light' className='border it-fs14 mt-4' block>
                                            Add email
                                        </Button>
                                        <div className='mt-4'>
                                            <strong className='it-fs16'>Password</strong>
                                            <FormGroup>
                                                <Label for="exampleEmail">Password</Label>
                                                <Input type="password" name="email" id="exampleEmail" />
                                                <Label for="exampleEmail">Password confirmation</Label>
                                                <Input type="password" name="email" id="exampleEmail" />
                                            </FormGroup>
                                            <Button color='light' className='border it-fs14 mt-4' block>
                                                Change password
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col className='col-6'>
                                        <strong className='it-fs16'>Language</strong>
                                        <FormGroup>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>English</option>
                                            </Input>
                                        </FormGroup>
                                        <div className='mt-4'>
                                            <strong className='it-fs16'>Timezone</strong>
                                            <FormGroup>
                                                <Input type="select" name="select" id="exampleSelect">
                                                    <option>GTM +3 Moscow</option>
                                                </Input>
                                            </FormGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className='col-2 text-center'>
                            <img src='http://via.placeholder.com/108x108' className='rounded-circle'/>
                            <Button color='light' className='border it-fs14 mt-4' block>
                                Edit avatar
                            </Button>
                            <div className='mt-4 it-fs14 text-danger'>
                                <FontAwesome name='ban' /> <span>Delete account</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);