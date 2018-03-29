import React, { Component } from 'react';
import { Row, Col, Button, Input, FormGroup, Label} from 'reactstrap';
import FontAwesome from 'react-fontawesome'


const accountTab = () => {

    return (
        <Row>
            <Col className='col-9 account'>
                <strong className='it-fs28'>Account</strong>
                <div>
                    <div className='personal_information'>
                        <strong className='it-fs16'>Personal information</strong>
                        <Row className='mt-4'>
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
                    </div>
                    <FormGroup>
                        <Label for="exampleText">Bio</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Row className='mt-4'>
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
                                    <option> <FontAwesome name='ban' />  United States</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color='light' className='border it-fs14' block>
                        <strong>Save</strong>
                    </Button>
                    <hr/>
                    <Row className='other-setting mb-2'>
                        <Col className='col-6 border-right'>
                            <strong className='it-fs16'>Email</strong>
                            <div className='mt-3'>
                                <span className='it-fs14'>my.new.email@gmail.com</span>
                            </div>
                            <FormGroup className='mt-4'>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" />
                            </FormGroup>
                            <div className='mb-4'>
                                <Button color='light' className='border it-fs14 mt-4' block>
                                    <strong>Add email</strong>
                                </Button>
                            </div>
                            <div className='password'>
                                <div className='mb-4'>
                                    <strong className='it-fs16'>Password</strong>
                                </div>
                                <FormGroup>
                                    <Label for="exampleEmail">Password</Label>
                                    <Input type="password" name="email" id="exampleEmail" />
                                    <Label for="exampleEmail" className='mt-4'>Password confirmation</Label>
                                    <Input type="password" name="email" id="exampleEmail" />
                                </FormGroup>
                                <Button color='light' className='border it-fs14 mt-4' block>
                                    <strong>Change password</strong>
                                </Button>
                            </div>
                        </Col>
                        <Col className='col-6'>
                            <strong className='it-fs16'>Language</strong>
                            <FormGroup className='mt-4'>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>English</option>
                                </Input>
                            </FormGroup>
                            <div className='timezone'>
                                <strong className='it-fs16'>Timezone</strong>
                                <FormGroup className='mt-4'>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>GTM +3 Moscow</option>
                                    </Input>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col className='col-3 text-center avatar'>
                <img src='http://via.placeholder.com/108x108' className='rounded-circle'/>
                <Button color='light' className='border it-fs14 mt-4' block>
                    <strong>Edit avatar</strong>
                </Button>
                <div className='mt-4 it-fs14 text-danger it-pointer'>
                    <FontAwesome name='ban' /> <span>Delete account</span>
                </div>
            </Col>
        </Row>
    )
};

export default accountTab