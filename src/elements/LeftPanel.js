import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../constants/urls'
import {MyOrders, MyOrdersFull} from './index'
import {set_top_panel} from '../actions/menu'


class LeftPanel extends Component{

    constructor(props) {
        super(props);

        this.state = {
            orders_active: 0
        }
    }

    _orders_active() {
        const {orders_active} = this.state,
            {set_top_panel} = this.props;

        if (orders_active === 2) {
            this.setState({orders_active: 0});
        } else {
            this.setState({orders_active: orders_active+1});
            set_top_panel(-1)
        }
    }

    _open_left_item(url) {
        const {push, set_top_panel} = this.props;

        push(url);
        set_top_panel(-1)
    }

    render() {

        const { my_orders_badge = 3, push, wallet_active, analytics_active, traders_active, message_active, theme } = this.props,
            {orders_active} = this.state;

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
                    <div className={`item ${orders_active && 'active'}`} onClick={() => this._orders_active()}>
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

                    <div className={`item ${wallet_active && !orders_active && 'active'}`} onClick={() => this._open_left_item(URLS.Wallet)}>
                        <img src={theme.nav_wallet} className='img_icon non_op' />
                        <p>Wallets</p>
                    </div>

                    <div className={`item ${analytics_active && !orders_active && 'active'}`} onClick={() => this._open_left_item(URLS.Analytics)}>
                        <img src={theme.analytics} className='img_icon non_op' />
                        <p>Analytics</p>
                    </div>

                    <div className={`item ${traders_active && !orders_active && 'active'}`} onClick={() => this._open_left_item(URLS.Traders)}>
                        <img src={theme.traders} className='img_icon non_op' />
                        <p>Traders</p>
                    </div>

                    <div className={`item ${message_active && !orders_active && 'active'}`} onClick={() => this._open_left_item(URLS.Messages)}>
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
                { orders_active === 1 ? <MyOrders /> : orders_active === 2 ? <MyOrdersFull /> : null }
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);