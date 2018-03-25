import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../constants/urls'
import {MyOrdersContainer} from './index'
import {set_top_panel, set_my_orders} from '../actions/menu'
import {baseWrapper} from "../actions/eventWrapper";
import ReactSVG from 'react-svg';


class LeftPanel extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }

    orders_active() {
        const {set_top_panel, set_my_orders} = this.props;

        set_my_orders(1);
    }

    _open_left_item(url) {
        const {push, set_top_panel, set_my_orders} = this.props;

        push(url);
        set_top_panel(-1);
        set_my_orders(0);
    }

    render() {

        const {
            my_orders_badge = 3, push, wallet_active,
            analytics_active, traders_active,
            message_active, theme, my_orders, baseWrapper
        } = this.props;

        return (
            <div>
                <div className='it-left-panel'>
                    <div className='text-center mt-2'>
                        <img
                            className='logo'
                            src={require('../assets/logo.png')}
                            alt='logo'
                        />
                    </div>
                </div>
                <div className='it-left-panel-nav'>
                    <div
                        className={`item ${my_orders ? 'active' : ''}`}
                        onClick={() => baseWrapper(() => {
                            this.orders_active()
                        })}
                    >
                        <div className="d-flex flex-column">
                            <div className='it-badge bg-primary text-white'>
                                <span>{my_orders_badge}</span>
                            </div>
                            <div>
                                <img src={theme.my_orders_icon} className='img_icon_c' />
                                <p>My orders</p>
                            </div>
                        </div>
                    </div>
                    {
                        [
                            [wallet_active, URLS.Wallet, require('../assets/icons/nav_wallet.svg'), 'Wallets'],
                            [analytics_active, URLS.Analytics, require('../assets/icons/analytics.svg'), 'Analytics'],
                            [traders_active, URLS.Traders, require('../assets/icons/traders.svg'), 'Traders'],
                            [message_active, URLS.Messages, require('../assets/icons/message.svg'), 'Messages']
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`item ${item[0] && !my_orders && 'active'}`}
                                onClick={() => baseWrapper(() => {
                                    this._open_left_item(item[1])
                                })}
                            >
                                <ReactSVG path={item[2]} className='img_icon'/>
                                <p>{item[3]}</p>
                            </div>
                        ))
                    }
                    <div className='footer text-center'>
                        <div className='it-fs12'>
                            15:48
                        </div>
                        <select className='it-timezone'>
                            <option>+3</option>
                            <option>+4</option>
                            <option>+5</option>
                            <option>+6</option>
                            <option>+7</option>
                            <option>+8</option>
                        </select>
                        <div className='it-fs12 it-half-opacity'>
                            UTC +3 <FontAwesome name='caret-down ' />
                        </div>
                    </div>
                </div>
                <MyOrdersContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        my_orders: state.menu.my_orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        set_top_panel: number => dispatch(set_top_panel(number)),
        set_my_orders: number => dispatch(set_my_orders(number)),
        baseWrapper: event => dispatch(baseWrapper(event))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);