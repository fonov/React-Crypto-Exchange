import React, { Component } from 'react';
import {LeftPanel, TopPanel} from './index'


export default class BasePage extends Component{

    render() {

        const {children, active = [false, false, true], wallet_active=false, orders_active=true, analytics_active=false,
            traders_active = false} = this.props;

        return (
            <div className='it-container'>
                <LeftPanel
                    my_orders_badge={2}
                    wallet_active={wallet_active}
                    orders_active={orders_active}
                    analytics_active={analytics_active}
                    traders_active={traders_active}
                />
                <TopPanel active={active} />
                <div className='it-page'>
                    {children}
                </div>
            </div>
        )
    }
}