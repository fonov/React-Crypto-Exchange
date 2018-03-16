import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../constants/urls'
import {MyOrdersContainer} from './index'
import {set_top_panel, set_my_orders} from '../actions/menu'


class LeftPanel extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }

    orders_active() {
        const {set_top_panel, set_my_orders} = this.props;

        set_my_orders(1);
        set_top_panel(-1)
    }

    _open_left_item(url) {
        const {push, set_top_panel} = this.props;

        push(url);
        set_top_panel(-1)
    }

    render() {

        const { my_orders_badge = 3, push, wallet_active,
                analytics_active, traders_active, message_active, theme, my_orders } = this.props;

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
                    <div className={`item ${my_orders ? 'active' : ''}`} onClick={() => this.orders_active()}>
                        <div className="d-flex flex-column">
                            <div className='it-badge bg-primary text-white'>
                                {my_orders_badge}
                            </div>
                            <div>
                                <img src={theme.my_orders_icon} className='img_icon_c' />
                                <p>My orders</p>
                            </div>
                        </div>
                    </div>
                    <div className={`item ${wallet_active && !my_orders && 'active'}`} onClick={() => this._open_left_item(URLS.Wallet)}>
                        <img src={theme.nav_wallet} className='img_icon non_op' />
                        <p>Wallets</p>
                    </div>

                    <div className={`item ${analytics_active && !my_orders && 'active'}`} onClick={() => this._open_left_item(URLS.Analytics)}>
                        <img src={theme.analytics} className='img_icon non_op' />
                        <p>Analytics</p>
                    </div>

                    <div className={`item ${traders_active && !my_orders && 'active'}`} onClick={() => this._open_left_item(URLS.Traders)}>
                        <img src={theme.traders} className='img_icon non_op' />
                        <p>Traders</p>
                    </div>

                    <div className={`item ${message_active && !my_orders && 'active'}`} onClick={() => this._open_left_item(URLS.Messages)}>
                        <img src={theme.message_icon} className='img_icon' style={{opacity: 1}} />
                        <p>Messages</p>
                    </div>

                    <div className='footer text-center'>
                        <div className='it-fs12'>
                            15:48
                        </div>
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
        set_my_orders: number => dispatch(set_my_orders(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);