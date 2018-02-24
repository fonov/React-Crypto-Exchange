import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage, LeftPanel, TopPanel} from '../elements'
import { Card, CardBody, Row, Col, ButtonGroup, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import { StyleSheet, css } from 'aphrodite';
import TradingViewWidget from 'react-tradingview-widget';


class Trading extends Component{

    render() {
        return(
            <BasePage>
                <Row>
                    <Col className='col-9 mt-3'>
                        <div className="d-flex flex-row">
                            <div className={css(styles.title)}>
                                XMR/BTC
                            </div>
                            <div className={css(styles.desc)}>
                                <small className={`${css(styles.small, styles.with_opacity)} pr-2 align-top`}>Price</small>
                                <span className={css(styles.big, styles.success)}>0.023206</span>
                            </div>
                            <div className={css(styles.desc)}>
                                <small className={`${css(styles.small, styles.with_opacity)} pr-2 align-top`}>Vol</small>
                                <span className={css(styles.big)}>8,480</span>
                            </div>
                            <div className="d-flex flex-column mx-4">
                                <div>
                                    <small className={`${css(styles.small, styles.with_opacity)} mr-2`}>24h</small>
                                    <span className={css(styles.middle, styles.success)}>+6.29%</span>
                                </div>
                                <div>
                                    <small className={`${css(styles.small, styles.with_opacity)} mr-2`}>1h</small>
                                    <span className={css(styles.middle, styles.danger)}>−0.01%</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div>
                                    <small className={`${css(styles.small, styles.with_opacity)} mr-2`}>Bid</small>
                                    <span className={css(styles.middle, styles.success)}>0.023159</span>
                                </div>
                                <div>
                                    <small className={`${css(styles.small, styles.with_opacity)} mr-2`}>Ask</small>
                                    <span className={css(styles.middle, styles.danger)}>0.023194</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ml-4">
                                <div>
                                    <small className={`${css(styles.small, styles.with_opacity)} mr-2`}>24H high</small>
                                    <span className={css(styles.middle)}>0.024957</span>
                                </div>
                                <div>
                                    <small className={`${css(styles.small, styles.with_opacity)} mr-2`}>24H low</small>
                                    <span className={css(styles.middle)}>0.023100</span>
                                </div>
                            </div>
                        </div>
                        <Card className={`${css(styles.shadow)} mt-3`}>
                            <CardBody className={css(styles.trading_view)}>
                                <TradingViewWidget
                                    symbol="BITFINEX:BTCUSD"
                                    autosize
                                    locale="ru"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-3'>
                        <Card className={`${css(styles.shadow)} mt-4 mr-4`}>
                            <CardBody>
                                <div className='text-center'>
                                    <img src={require('../assets/icons/wallet.svg')} className={css(styles.icon, styles.with_opacity)}/>
                                    <span className={`${css(styles.middle_2)} ml-2 align-middle`}>40.00600209 XMR</span>
                                </div>
                                <p className={`${css(styles.small)} text-center`}>
                                    <b>Total 1000.90 USD</b>
                                </p>
                                <div className='text-center'>
                                    <ButtonGroup >
                                        <Button className={`${css(styles.bg_success)} border-0`}>
                                        <span className='px-4'>
                                            <FontAwesome name='long-arrow-up' /> Buy
                                        </span>
                                        </Button>
                                        <Button className='bg-light text-dark border'>
                                        <span className='px-4'>
                                            <FontAwesome name='long-arrow-down' /> Sell
                                        </span>
                                        </Button>
                                    </ButtonGroup>
                                </div>
                                <FormGroup className='mt-4'>
                                    <Label for="exampleSelect">Order type</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Limit</option>
                                        <option selected>Market</option>
                                        <option>Stop</option>
                                        <option>Stop-Limit</option>
                                        <option>Trailing stop</option>
                                        <option>Fill or Kill</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="total">Total</Label>
                                    <Input type="number" name="total" id="total" />
                                </FormGroup>
                                <div className="d-flex flex-row">
                                    <span className='text-primary mr-2'>2%</span>
                                    <span className='text-primary mr-2'>5%</span>
                                    <span className='text-primary mr-2'>10%</span>
                                    <span className='text-secondary ml-4'>23%</span>
                                </div>
                                <Button className={`${css(styles.bg_success)} mt-2 border-0`} block>
                                    <FontAwesome name='long-arrow-up' />
                                    <span className='ml-2'>Buy Monero</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md='12'>
                        <Card className={`${css(styles.shadow)} mt-4 mr-4`}>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <div className="d-flex flex-row">
                                            <span className={`${css(styles['fontSize-18'])} mr-4`}>Order Book</span>
                                            <ButtonGroup>
                                                <Button className={`${css(styles.small_btn_gr, styles.half_opacity)} bg-light`}>Graph</Button>
                                                <Button className={`${css(styles.small_btn_gr)} bg-white`}>Table</Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-flex flex-row-reverse">
                                            <FontAwesome name='share-square-o' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-4 text-right'>
                                    <Col className={css(styles.padding_r_4)}>
                                        <Row className='border-bottom'>
                                            <Col className={css(styles.small)}>Sum BTC</Col>
                                            <Col className={css(styles.small)}>Total XMR</Col>
                                            <Col className={css(styles.small)}>Size BTC</Col>
                                            <Col className={css(styles.small)}>Bid</Col>
                                        </Row>
                                        <Row>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small, styles.success)}>0.02316050</Col>
                                        </Row>
                                        <Row className='bg-light'>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small, styles.success)}>0.02316050</Col>
                                        </Row>
                                        <Row className={css(styles.half_opacity)}>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small)}>0.00017239</Col>
                                            <Col className={css(styles.small, styles.success)}>0.02316050</Col>
                                        </Row>
                                    </Col>
                                    <Col className={`${css(styles.small, styles.padding_l_4)}`}>
                                        <Row className='border-bottom'>
                                            <Col>Ask</Col>
                                            <Col>Size BTC</Col>
                                            <Col>Total XMR</Col>
                                            <Col>Sum BTC</Col>
                                        </Row>
                                        {
                                            [
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393],
                                                [0.02319393, 0.02319393, 0.02319393, 0.02319393]
                                            ].map((item, i, array) => (
                                                <Row key={i} className={`${css(array.length-1 === i ? styles.half_opacity : '')} mt-1`}>
                                                    <Col className='text-danger'>{item[0]}</Col>
                                                    <Col>{item[1]}</Col>
                                                    <Col>{item[2]}</Col>
                                                    <Col>{item[3]}</Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='12' className='mt-4'>
                        <Card className={`${css(styles.shadow)} mr-4`}>
                            <CardBody>
                                <Row>
                                    <Col className={`${css(styles['fontSize-18'])}`}>
                                        Market history
                                    </Col>
                                    <Col>
                                        <div className="d-flex flex-row-reverse">
                                            <FontAwesome name='share-square-o' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={`${css(styles.small)} pr-4`}>
                                        <Row className={`${css(styles.small)} mt-2 border-bottom`}>
                                            <Col>Time</Col>
                                            <Col>Type</Col>
                                            <Col>Price</Col>
                                            <Col>Amount</Col>
                                            <Col>Total cost</Col>
                                        </Row>
                                        {
                                            [
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                            ].map((item, i, array) => (
                                                <Row className={`mt-1 ${array.length-1===i ? css(styles.half_opacity) : ''}`} key={i}>
                                                    <Col>{item[0]}</Col>
                                                    <Col className={item[1] === 'Buy' ? 'text-success' : 'text-danger'}>{item[1]}</Col>
                                                    <Col>{item[2]}</Col>
                                                    <Col>{item[3]}</Col>
                                                    <Col>{item[4]}</Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                    <Col className={`${css(styles.small)} pl-4`}>
                                        <Row className={`${css(styles.small)} mt-2 border-bottom`}>
                                            <Col>Time</Col>
                                            <Col>Type</Col>
                                            <Col>Price</Col>
                                            <Col>Amount</Col>
                                            <Col>Total cost</Col>
                                        </Row>
                                        {
                                            [
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Buy', '0.02315000', '1.05022332', '0.00467415'],
                                                ['15:19', 'Sell', '0.02315000', '1.05022332', '0.00467415'],
                                            ].map((item, i, array) => (
                                                <Row className={`mt-1 ${array.length-1===i ? css(styles.half_opacity) : ''}`} key={i}>
                                                    <Col>{item[0]}</Col>
                                                    <Col className={item[1] === 'Buy' ? 'text-success' : 'text-danger'}>{item[1]}</Col>
                                                    <Col>{item[2]}</Col>
                                                    <Col>{item[3]}</Col>
                                                    <Col>{item[4]}</Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </BasePage>
        )
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 34,
      fontWeight: 600,
      color: '#282e3d'
    },
    desc: {
        paddingLeft: '1.5rem',
        lineHeight: '50px',
        color: '#282e3d'
    },
    small: {
        fontSize: 12,
    },
    middle: {
        fontSize: 14
    },
    middle_2: {
        fontSize: 16
    },
    big: {
        fontSize: 20
    },
    'fontSize-18': {
        fontSize: 18
    },
    success: {
        color: '#27ae66'
    },
    bg_success: {
        backgroundColor: '#27ae66'
    },
    danger: {
        color: '#f26451'
    },
    with_opacity: {
        opacity: 0.7
    },
    trading_view: {
        height: 500
    },
    shadow: {
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.18)'
    },
    icon: {
        width: 16
    },
    small_btn_gr: {
        padding: '5px 10px 5px 10px',
        fontSize: 12,
        color: '#282e3d'
    },
    half_opacity: {
        opacity: 0.5
    },
    padding_l_4: {
        paddingLeft: '4em'
    },
    padding_r_4: {
        paddingRight: '4em'
    }
});

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trading);