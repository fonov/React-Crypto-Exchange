import React, { Component } from 'react';
import {LeftPanel, TopPanel} from './index'


export default class BasePage extends Component{

    render() {

        const {children} = this.props;

        return (
            <div className='it-container'>
                <LeftPanel my_orders_badge={2} />
                <TopPanel />
                <div className='it-page'>
                    {children}
                </div>
            </div>
        )
    }
}