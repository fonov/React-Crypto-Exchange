import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import CircularProgressbar from 'react-circular-progressbar';
import {set_top_panel} from "../actions/menu";
import ReactSVG from 'react-svg';


class Account extends Component{

    constructor(props) {
        super(props);

        this.state = {
            account: true,
            security: false,
            notification: false,
            security_login: false,
            security_session: true,
            security_two_step: false,
        }
    }

    componentDidMount() {
        const {set_top_panel} = this.props;

        set_top_panel(-1)
    }

    changeLeftNav(item) {
        this.setState({
            account: false,
            security: false,
            notification: false,
            [item]: true
        })
    }

    changeSession(item) {
        this.setState({
            security_login: false,
            security_session: false,
            security_two_step: false,
            [item]: true
        })
    }

    render() {

        const {push, theme} = this.props,
            {account, security, security_login, security_session, security_two_step, notification} = this.state;

        return (
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-page'>
                    <div className='it-account'>
                    <Row>
                        <Col className='col-3 left-nav'>
                            <ListGroup className='it-pointer'>
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
                                <ListGroupItem className='text_with_icon'>
                                    <div className='active_line' />
                                    <div className='d-flex flex-row'>
                                        <ReactSVG path={require('../assets/icons/home.svg')}/> <span className='it-fs14 it_light_opacity text'>Overview</span>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className={`text_with_icon ${account ? 'active_tab': ''}`} onClick={() => this.changeLeftNav('account')}>
                                    <div className='active_line' />
                                    <img src={theme.account} /> <span className='it-fs14 it_light_opacity text'>Account</span>
                                </ListGroupItem>
                                <ListGroupItem className={`text_with_icon ${security ? 'active_tab': ''}`}  onClick={() => this.changeLeftNav('security')}>
                                    <div className='active_line' />
                                    <img src={theme.security} />  <span className='it-fs14 it_light_opacity text'>Security</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon with_c_prog'>
                                    <div className='active_line' />
                                    <div className='d-flex flex-row'>
                                        <img src={theme.verifications} />
                                        <span className='it-fs14 it_light_opacity text'>Verifications</span>
                                        <div style={{width: 33, height: 33}}>
                                            <CircularProgressbar
                                                percentage={66}
                                                textForPercentage={() => '2/3'}
                                            />
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <div className='active_line' />
                                    <img src={theme.api}/>  <span className='it-fs14 it_light_opacity text'>API</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <div className='active_line' />
                                    <img src={theme.interface} />  <span className='it-fs14 it_light_opacity text'>Interface</span>
                                </ListGroupItem>
                                <ListGroupItem className='text_with_icon'>
                                    <div className='active_line' />
                                    <img src={theme.reports} />  <span className='it-fs14 it_light_opacity text'>Reports</span>
                                </ListGroupItem>
                                <ListGroupItem className={`text_with_icon ${notification ? 'active_tab': ''}`} onClick={() => this.changeLeftNav('notification')}>
                                    <div className='active_line' />
                                    <div className='d-flex flex-row'>
                                        <ReactSVG path={require('../assets/icons/bell.svg')}/>
                                        <span className='it-fs14 it_light_opacity text'>Notifications</span>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                            <div className='mt-4 pl-4 it-pointer d-flex flex-row'>
                                <ReactSVG path={require('../assets/icons/signout.svg')}/> <span className='it-fs14 ml-2'>Logout</span>
                            </div>
                        </Col>
                        {
                            account ? [<Col className='col-7 account'>
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
                                        <Row className='other-setting'>
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
                                </Col>,
                                <Col className='col-2 text-center avatar'>
                                    <img src='http://via.placeholder.com/108x108' className='rounded-circle'/>
                                    <Button color='light' className='border it-fs14 mt-4' block>
                                        <strong>Edit avatar</strong>
                                    </Button>
                                    <div className='mt-4 it-fs14 text-danger it-pointer'>
                                        <FontAwesome name='ban' /> <span>Delete account</span>
                                    </div>
                                </Col>] : null
                        }
                        {
                            security ? (
                                <Col className='col-9 base-account security'>
                                    <strong className='it-fs28'>Security</strong>
                                    <div className='d-flex flex-row'>
                                        <div className="d-flex flex-row it-btn-group mt-4">
                                            <div className={`it-btn ${security_login ? 'active': ''}`} onClick={() => this.changeSession('security_login')}><span>Login history</span></div>
                                            <div className={`it-btn ${security_session ? 'active': ''}`} onClick={() => this.changeSession('security_session')}><span>Active sessions</span></div>
                                            <div className={`it-btn it-btn it-btn_m ${security_session ? 'border-left-0': ''} ${security_two_step  ? 'active': ''}`} onClick={() => this.changeSession('security_two_step')}><span>Two-step authentication</span></div>
                                        </div>
                                    </div>

                                    <div className='security-data'>
                                        {
                                            security_login ? (
                                                <div className='login'>
                                                    <Table className='table-night'>
                                                        <tbody>
                                                        {
                                                            [1,2,3,4,5,6,7,8,9,10].map(item => (
                                                                <tr key={item}>
                                                                    <td width="20">185.27.49.66</td>
                                                                    <td><span className='it-half-opacity'>Saint Petersburg, Russia</span></td>
                                                                    <td>05:36</td>
                                                                    <td>09-06-2017</td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            ) : null
                                        }
                                        {
                                            security_session ? (
                                                <div className='session'>
                                                    <strong className='it-fs16'>Current sessions</strong>
                                                    <Table className='table-night'>
                                                        <tbody className='border-bottom'>
                                                            <tr>
                                                                <td>OS X 10.13.2, Chrome, 63.0.2347.65</td>
                                                                <td>162.27.19.10 <span className='it-half-opacity'>Saint Petersburg, Russia</span></td>
                                                                <td>05:36</td>
                                                                <td>09-06-2017</td>
                                                                <td><span className='text-primary'>Online</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <span className='text-danger'>Terminate all other sessions</span>
                                                    <div className='current-sessions'>
                                                        <strong className='it-fs16'>Current sessions</strong>
                                                        <Table className='table-night'>
                                                            <tbody className='border-bottom'>
                                                            {
                                                                [1,2,3,4].map(item => (
                                                                    <tr key={item}>
                                                                        <td>OS X 10.13.2, Chrome, 63.0.2347.65</td>
                                                                        <td>162.27.19.10 <span className='it-half-opacity'>Saint Petersburg, Russia</span></td>
                                                                        <td>05:36</td>
                                                                        <td>09-06-2017</td>
                                                                        <td><span className='text-primary it-pointer'>Revoke</span></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            ) : null
                                        }
                                        {
                                            security_two_step ? (
                                                <div>
                                                    <span>Using Two-factor authentication is highly recommended.</span>
                                                    <div className='mt-2'>
                                                        <Button color='light' className='border it-fs14'>
                                                            <span className='it-medium'>SetUp Two-step authentication</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </Col>
                            ) : null
                        }
                        {
                            notification ? (
                                <Col className='col-9'>
                                    <div className='notification'>
                                        <strong className='it-fs28'>Notifications</strong>
                                        <Row className='it-pointer'>
                                            <Col className='col-3'>
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
                                            <Col className='col-3'>
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
                                            <Col className='col-3'>
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
                                            <Col className='col-3'>
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
                            ) : null
                        }
                    </Row>
                </div>
                </div>
            </BasePage>
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
        set_top_panel: number => dispatch(set_top_panel(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);