import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import FontAwesome from 'react-fontawesome'
import { Badge } from 'reactstrap';


export default class LeftPanel extends Component{

    render() {

        const {} = this.props;

        return (
            <div className={css(styles.menu)}>
                <div className='text-center mt-2'>
                    <img
                        className={css(styles.logo)}
                        src={require('../assets/logo.png')}
                        alt='logo'
                    />
                </div>

                <div className='text-center mt-4'>
                    <div className="d-flex flex-column">
                        <div>
                            <Badge pill color='#3454d1' className={css(styles.badge_icon)}>3</Badge>
                        </div>
                        <div>
                            <FontAwesome name='long-arrow-down' className={css(styles.icon)}/>
                            <FontAwesome name='long-arrow-up' className={css(styles.icon)}/>
                            <p>My orders</p>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <img src={require('../assets/icons/wallet.svg')} className={css(styles.custom_icon)}/>
                    <p>Wallets</p>
                </div>

                <div className='text-center mt-4'>
                    <FontAwesome name='pie-chart' className={css(styles.icon)}/>
                    <p>Analytics</p>
                </div>

                <div className='text-center mt-4'>
                    <FontAwesome name='users' className={css(styles.icon)}/>
                    <p>Traders</p>
                </div>

                <div className='text-center mt-4'>
                    <FontAwesome name='comment' className={css(styles.icon)}/>
                    <p>Messages</p>
                </div>

                <div className={`${css(styles.footer)} text-center`}>
                    <div className={css(styles.small)}>
                        15:48
                    </div>
                    <div className={css(styles.small_with_opacity)}>
                        UTC +3 <FontAwesome name='caret-down ' />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        width: 94,
        height: '100%',
        backgroundColor: '#f5f7fa',
        position: 'absolute'
    },
    logo: {
        width: 30
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        height: 'auto'
    },
    custom_icon: {
        width: 22,
        opacity: 0.8
    },
    icon: {
        fontSize: 22,
        opacity: 0.8
    },
    small: {
        fontSize: 12,
        color: '#282e3d'
    },
    small_with_opacity: {
        fontSize: 12,
        color: '#282e3d',
        opacity: 0.6
    },
    badge_icon: {
        marginLeft: '2.5em',
        backgroundColor: '#3454d1',
        color: 'white'
    }
});