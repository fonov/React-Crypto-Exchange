import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Card, CardBody, Row, Col, ButtonGroup, Button, FormGroup, Label, Input, } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class AddCurrency extends Component {

    render() {

        const {push} = this.props;

        let counts = [
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
            [true, 'https://chain.so/Bitcoin@2x.png', 'Bitcoin BTC'],
            [false, 'https://themerkle.com/wp-content/uploads/2017/05/ethereum-classic-logo-600x600.png', 'Ethereum ETH'],
            [false, 'https://proinvest.me/wp-content/uploads/2017/12/DASH_logo.png', 'Dash DASH'],
            [false, 'https://avatars1.githubusercontent.com/u/7450663?v=3', 'Monero XMR'],
            [false, 'https://cryptostate.ru/wp-content/uploads/2017/12/3370.jpg', 'GameCredits GAME'],
            [true, 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png', 'Lightcoin LTC'],
        ];

        return (
            <div className='it-container'>
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
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mx-4'>
                        {
                            counts.map((item, i) => (
                                <Col key={i} md={3} lg={2} xl={2} className={'mt-2 col-3'}>
                                    <Card className={`${item[0] && 'added'}`}>
                                        <CardBody>
                                            <div className='text-center mt-2'>
                                                <img src={item[1]} className='card-img' />
                                            </div>
                                            <div className='currency-name'>
                                                <span>{item[2].split(' ')[0]}</span>
                                                <span>{item[2].split(' ')[1]}</span>
                                            </div>
                                            {
                                                item[0] ? (
                                                    <p className='text-success it-half-opacity text-center it-fs24'>
                                                        <FontAwesome name='check'/>
                                                    </p>
                                                ) : (
                                                    <div className='it_cycle_item'>
                                                        <FontAwesome name='plus' className=''/>
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

    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrency);