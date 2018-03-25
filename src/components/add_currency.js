import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardBody, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';


class AddCurrency extends Component {

    render() {

        const {push, theme} = this.props;

        let counts = [
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
            [true, '0px 0px', 'Bitcoin BTC'],
            [false, '-80px 0px', 'Ethereum ETH'],
            [false, '0px -78px', 'Dash DASH'],
            [false, '-235px 0px', 'Monero XMR'],
            [false, '-235px 70px', 'GameCredits GAME'],
            [true, '-235px 70px', 'Lightcoin LTC'],
        ];

        return (
            <div className={`it-container ${theme.night_class}`}>
                <div className='it-add-currency pb-4'>
                    <Row className='justify-content-between mx-4'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Add currency</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className="input-group search">
                                <input type="text" className="form-control border-right-0" placeholder='Search'/>
                                <div className="input-group-append">
                                    <span className="input-group-text border-left-0">
                                        <FontAwesome name='search' />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => push(URLS.Wallet)}>
                                <img src={theme['close']} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='currency-cards'>
                        {
                            counts.map((item, i) => (
                                <Col sm={3} md={3} lg={2} xl={2} key={i}>
                                    <Card className={`${item[0] ? 'added' : 'not_added'}`}>
                                        <CardBody>
                                            <div className='text-center mt-2 sprite-icon' style={{backgroundPosition: item[1]}}>
                                            </div>
                                            <div className='currency-name'>
                                                <span>{item[2].split(' ')[0]}</span>
                                                <span>{item[2].split(' ')[1]}</span>
                                            </div>
                                            {
                                                item[0] ? (
                                                    <p className='text-success it-half-opacity text-center it-fs24 check'>
                                                        <FontAwesome name='check'/>
                                                    </p>
                                                ) : (
                                                    <div className='it_cycle_item'>
                                                        <ReactSVG
                                                            path={require('../assets/icons/plus_big.svg')}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrency);