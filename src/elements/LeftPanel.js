import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../constants/urls'
import {MyOrders} from './index'


class LeftPanel extends Component{

    constructor(props) {
        super(props);

        this.state = {
            orders_active: false
        }
    }

    render() {

        const { my_orders_badge = 3, push, wallet_active } = this.props,
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

                    <div className={`item ${orders_active && 'active'}`} onClick={() => this.setState({orders_active: !orders_active})}>
                        <div className="d-flex flex-column">
                            <div className='it-badge'>
                                <Badge pill color='primary' className='ml-4'>
                                    {my_orders_badge}
                                </Badge>
                            </div>
                            <div>
                                <FontAwesome name='long-arrow-down' className='icon' />
                                <FontAwesome name='long-arrow-up' className='icon' />
                                <p>My orders</p>
                            </div>
                        </div>
                    </div>

                    <div className={`item ${wallet_active && 'active'}`} onClick={() => push(URLS.Wallet)}>
                        <img src={require('../assets/icons/wallet.svg')} className='img_icon' />
                        <p>Wallets</p>
                    </div>

                    <div className='item'>
                        <FontAwesome name='pie-chart' className='icon'/>
                        <p>Analytics</p>
                    </div>

                    <div className='item'>
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
                {
                    orders_active && <MyOrders />
                }
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