import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';


export default class LeftPanel extends Component{

    render() {

        const { my_orders_badge = 3 } = this.props;

        return (
            <div className='it-left-panel'>
                <div className='text-center mt-2'>
                    <img
                        className='logo'
                        src={require('../assets/logo.png')}
                        alt='logo'
                    />
                </div>

                <div className='text-center mt-4'>
                    <div className="d-flex flex-column">
                        <div>
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

                <div className='text-center'>
                    <img src={require('../assets/icons/wallet.svg')} className='img_icon' />
                    <p>Wallets</p>
                </div>

                <div className='text-center mt-4'>
                    <FontAwesome name='pie-chart' className='icon'/>
                    <p>Analytics</p>
                </div>

                <div className='text-center mt-4'>
                    <FontAwesome name='users' className='icon'/>
                    <p>Traders</p>
                </div>

                <div className='text-center mt-4'>
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
        )
    }
}