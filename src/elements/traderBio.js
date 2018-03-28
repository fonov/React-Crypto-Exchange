import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Badge, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';


class TraderBio extends Component{
    render() {

        const {theme, short = false} = this.props;

        return (
            <div className='it-trade_bio' >
                <div className={`${short ? 'text-primary text-center' : ''}`}>
                    <img src='http://via.placeholder.com/140x140' className='rounded-circle avatar'/>
                    <div>
                        <span className='it-fs24 it-fw6'>Eddie Becker</span>
                    </div>
                </div>
                {
                    !short ? (
                        <div>
                            <Badge color='warning' pill className='mt-1 it-fixed-badge top-100'>
                                <span>top 100</span>
                            </Badge>
                            <div className='d-flex flex-column it-fs13 it-half-opacity mt-3'>
                                <div>
                                    <FontAwesome name='map-marker'/> Uzbekistan
                                </div>
                                <div>
                                    Member since 19.09.2017
                                </div>
                                <div>
                                    218 copiers
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className='d-flex justify-content-center mt-3'>
                    <div>
                        <Badge color='primary' pill className='badge-2 it-fixed-badge'>
                            <span>59</span><span>/289</span>
                        </Badge>
                    </div>
                    <div className='profit'>
                        <div className='d-flex flex-row'>
                            <div>
                                <img src={require('../assets/icons/profit/profit.png')} />
                            </div>
                            <div className='text-left text top-profit'>
                                <div><span className='text-success it-fs16 it-fw6'>57%</span></div>
                                <div><span className='it-fs12 it-half-opacity'>top profit</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    !short ? (
                        <div>
                            <div className='mt-4 mb-4'>
                                <Button color='light' className='border it-fs14 copy_trader' block>
                                    <img src={theme['plus']} /> Copy trader
                                </Button>
                            </div>
                            <div className='it-fs14 mt-4 text-left'>
                                Hello, I am a long term investor and I have started investing many years ago. I like to find stocks that are undervalued,  look to P/E, ROE, ROA compared with the industry, also I like that the stocks which earning per share grow every year. Usually I can keep an stock for months, or even for years. But sometimes if I get a big gain in few days I can sell.  I look for information in sites like yahoo, zacks and Morningstar.
                                I recommend that you copy me with more than 500 usd
                            </div>
                        </div>
                    ) : null
                }
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
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TraderBio);