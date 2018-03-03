import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../constants/urls'
import {MyOrders, MyOrdersFull} from './index'


class LeftPanel extends Component{

    constructor(props) {
        super(props);

        this.state = {
            orders_active: 0
        }
    }

    _orders_active() {
        const {orders_active} = this.state;

        if (orders_active === 2) {
            this.setState({orders_active: 0})
        } else {
            this.setState({orders_active: orders_active+1})
        }
    }

    render() {

        const { my_orders_badge = 3, push, wallet_active, analytics_active, traders_active } = this.props,
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
                                <img src={require('../assets/icons/my-orders/icon-my-orders@3x.png')} className='img_icon_c' />
                                <p>My orders</p>
                            </div>
                        </div>
                    </div>

                    <div className={`item ${wallet_active && !orders_active && 'active'}`} onClick={() => push(URLS.Wallet)}>
                        <img src={require('../assets/icons/wallet.svg')} className='img_icon' />
                        <p>Wallets</p>
                    </div>

                    <div className={`item ${analytics_active && !orders_active && 'active'}`} onClick={() => push(URLS.Analytics)}>
                        <FontAwesome name='pie-chart' className='icon'/>
                        <p>Analytics</p>
                    </div>

                    <div className={`item ${traders_active && !orders_active && 'active'}`} onClick={() => push(URLS.Traders)}>
                        <FontAwesome name='users' className='icon'/>
                        <p>Traders</p>
                    </div>

                    <div className='item'>
                        <FontAwesome name='comment' className='icon'/>
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

    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);