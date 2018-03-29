import React, { Component } from 'react';
import { Row, Col, Button, Table} from 'reactstrap';


export default class SecurityTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            security_login: true,
            security_session: false,
            security_two_step: false,
        }
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

        const {security_login, security_session, security_two_step} = this.state;

        return (
            <Row>
                <Col className='col-12 base-account security'>
                    <strong className='it-fs28'>Security</strong>
                    <div className='d-flex flex-row'>
                        <div className="d-flex flex-row it-btn-group mt-4">
                            <div className={`it-btn ${security_login ? 'active': ''}`} onClick={() => this.changeSession('security_login')}><span>Login history</span></div>
                            <div className={`it-btn ${security_session ? 'active': ''}`} onClick={() => this.changeSession('security_session')}><span>Active sessions</span></div>
                            <div
                                className={`it-btn it-btn it-btn_m ${security_session ? 'border-left-0': ''} ${security_two_step  ? 'active': ''}`}
                                onClick={() => this.changeSession('security_two_step')}>
                                <span>
                                    Two-step authentication
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='security-data'>
                        {
                            security_login ? (
                                <div className='login'>
                                    <Table className='table-night table-small'>
                                        <tbody>
                                        {
                                            [1,2,3,4,5,6,7,8,9,10].map(item => (
                                                <tr key={item}>
                                                    <td>185.27.49.66</td>
                                                    <td><span className='it-half-opacity'>Saint Petersburg, Russia</span></td>
                                                    <td>05:36</td>
                                                    <td>09-06-2017</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </Table>
                                    <Table className='table-night table-big'>
                                        <tbody>
                                        {
                                            [1,2,3,4,5,6,7,8,9,10].map(item => (
                                                <tr key={item}>
                                                    <td width="25%">185.27.49.66</td>
                                                    <td width="25%"><span className='it-half-opacity'>Saint Petersburg, Russia</span></td>
                                                    <td width="25%">05:36</td>
                                                    <td width="25%">09-06-2017</td>
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
                                    <Table className='table-night table-small'>
                                        <tbody className='border-bottom'>
                                        <tr>
                                            <td width="60%">
                                                OS X 10.13.2, Chrome, 63.0.2347.65<br/>
                                                162.27.19.10 <span className='it-half-opacity'>Saint Petersburg, Russia</span><br/>
                                                05:36<span className='ml-2'>09-06-2017</span>
                                            </td>
                                            <td width="40%">
                                                <span className='text-primary'>Online</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <Table className='table-night table-big'>
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
                                        <Table className='table-night table-small'>
                                            <tbody className='border-bottom'>
                                            {
                                                [1,2,3,4].map(item => (
                                                    <tr key={item}>
                                                        <td width="60%">
                                                            OS X 10.13.2, Chrome, 63.0.2347.65<br/>
                                                            162.27.19.10 <span className='it-half-opacity'>Saint Petersburg, Russia</span><br/>
                                                            05:36<span className='ml-2'>09-06-2017</span>

                                                        </td>
                                                        <td width="40%">
                                                            <span className='text-primary it-pointer'>Revoke</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </Table>
                                        <Table className='table-night table-big'>
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
            </Row>
        )
    }
};