import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, ListGroup, ListGroupItem, Input, FormGroup, Label,
    Table } from 'reactstrap';
import {push} from "react-router-redux";
import CircularProgressbar from 'react-circular-progressbar';
import {set_top_panel} from "../../actions/menu";
import ReactSVG from 'react-svg';
import AccountTab from './accountTab'
import SecurityTab from './securityTab'
import NotificationTab from './notificationTab'


class Account extends Component{

    constructor(props) {
        super(props);

        this.state = {
            account: false,
            security: true,
            notification: false,
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

    render() {

        const {push, theme} = this.props,
            {account, security, notification} = this.state;

        return (
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-page'>
                    <div className='it-account'>
                        <Row>
                            <Col className='left-nav' sm={4} md={4} lg={3} xl={3}>
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
                                            <ReactSVG path={require('../../assets/icons/home.svg')}/> <span className='it-fs14 it_light_opacity text align-middle'>Overview</span>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className={`text_with_icon ${account ? 'active_tab': ''}`} onClick={() => this.changeLeftNav('account')}>
                                        <div className='active_line' />
                                        <img src={theme.account} /> <span className='it-fs14 it_light_opacity text align-middle'>Account</span>
                                    </ListGroupItem>
                                    <ListGroupItem className={`text_with_icon ${security ? 'active_tab': ''}`}  onClick={() => this.changeLeftNav('security')}>
                                        <div className='active_line' />
                                        <img src={theme.security} />  <span className='it-fs14 it_light_opacity text align-middle'>Security</span>
                                    </ListGroupItem>
                                    <ListGroupItem className='text_with_icon with_c_prog'>
                                        <div className='active_line' />
                                        <div className='d-flex justify-content-between'>
                                            <div className="d-flex align-items-center">
                                                <img src={theme.verifications} />
                                                <span className='it-fs14 it_light_opacity text align-middle'>Verifications</span>
                                            </div>
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
                                        <img src={theme.api}/>  <span className='it-fs14 it_light_opacity text align-middle'>API</span>
                                    </ListGroupItem>
                                    <ListGroupItem className='text_with_icon'>
                                        <div className='active_line' />
                                        <img src={theme.interface} />  <span className='it-fs14 it_light_opacity text align-middle'>Interface</span>
                                    </ListGroupItem>
                                    <ListGroupItem className='text_with_icon'>
                                        <div className='active_line' />
                                        <img src={theme.reports} />  <span className='it-fs14 it_light_opacity text align-middle'>Reports</span>
                                    </ListGroupItem>
                                    <ListGroupItem className={`text_with_icon ${notification ? 'active_tab': ''}`} onClick={() => this.changeLeftNav('notification')}>
                                        <div className='active_line' />
                                        <div className='d-flex flex-row'>
                                            <ReactSVG path={require('../../assets/icons/bell.svg')}/>
                                            <span className='it-fs14 it_light_opacity text align-middle'>Notifications</span>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                                <div className='mt-4 pl-4 it-pointer d-flex flex-row'>
                                    <ReactSVG path={require('../../assets/icons/signout.svg')}/> <span className='it-fs14 ml-2'>Logout</span>
                                </div>
                            </Col>
                            <Col sm={8} md={8} lg={9} xl={9}>
                                {account ? <AccountTab/> : null}
                                {security ? <SecurityTab/> : null}
                                {notification ?  <NotificationTab/> : null}
                            </Col>
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