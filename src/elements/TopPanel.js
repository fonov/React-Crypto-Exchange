import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Row, Col, Badge } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../constants/urls'
import {set_theme} from '../actions/theme'
import {set_top_panel} from "../actions/menu";


class TopPanel extends Component {

    open_item(path) {
        const {push, set_top_panel} = this.props;

        push(path);
        set_top_panel(2)
    }

    render() {

        const {active, push, theme, set_theme, menu, set_top_panel} = this.props;

        return(
            <div className='it-top-panel'>
                <Row>
                    <Col>
                        <div className="d-flex flex-row">
                            {
                                [
                                    ['ETH/BTC', 'success', '+ 10.4%', '0.049806'],
                                    ['DASH/BTC', 'danger', '- 0.5%', '0.076863'],
                                    ['XMR/BTC', 'success', '+ 2.02%', '0.023360']
                                ].map((item, i) => (
                                    <div className={`nav-item ${menu === i ? 'active' : ''}`} key={i} onClick={() => this.open_item(URLS.Trading)}>
                                        <div className="d-flex flex-row">
                                            <img src={require('../assets/icons/close.svg')} className='closed'/>
                                            <div className="d-flex flex-column ml-2">
                                                <strong className='it-fs16 it_light_opacity title'>{item[0]}</strong>
                                                <div className='d-flex flex-row nav-desc'>
                                                    <p><Badge color={item[1]} pill>{item[2]}</Badge></p>
                                                    <p className='it-fs12'>{item[3]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='nav-item it-fs12 text-center add'>
                                <div className="d-flex flex-column">
                                    <img src={require('../assets/icons/blue_plus.svg')}  className='mb-1'/>
                                    <p>Add market</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex flex-row-reverse mr-3'>
                            {
                                [
                                    'logout',
                                    'help',
                                    'cog',
                                    'bell'
                                ].map((item, i) => (
                                    <div onClick={() => item === 'cog' ? push(URLS.Account) : null} key={i}>
                                        <img src={theme[item]} className='icon'/>
                                    </div>
                                ))
                            }
                            <div className={`theme-switch d-flex flex-row ${theme.theme_night ? 'reverse': ''}`} onClick={() => set_theme()}>
                                <div className={`${theme.theme_night ? 'non_active' : 'active'}`}>
                                    <img src={theme.sun_icon} className='non_active'/>
                                </div>
                                <div className={`${!theme.theme_night ? 'non_active' : 'active'}`}>
                                    <img src={theme.moon_icon}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        menu: state.menu.top_panel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        set_theme: index => dispatch(set_theme(index)),
        set_top_panel: number => dispatch(set_top_panel(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);