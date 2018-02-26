import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class Wallet extends Component{
    render() {

        const {push} = this.props;

        return (
            <BasePage
                active={[false, false, false]}
                wallet_active={true}
            >
                <div className='it_wallet'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>My wallets</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times'>
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column mx-4">
                            <div className='text-center'>
                                <img src={require('../assets/icons/wallet.svg')} className='wallet-icon'/>
                            </div>
                            <p className='it-fs14'>My wallet 1</p>
                        </div>
                        <div className="d-flex flex-column mx-4 not_active">
                            <div className='text-center'>
                                <img src={require('../assets/icons/wallet.svg')} className='wallet-icon'/>
                            </div>
                            <p className='it-fs14 text-primary '>Wallet for Marina</p>
                        </div>
                        <div className="d-flex flex-column mx-4 not_active">
                            <div className='text-center'>
                                <img src={require('../assets/icons/wallet.svg')} className='wallet-icon not_active'/>
                            </div>
                            <p className='it-fs14 text-primary'>My new wallet</p>
                        </div>
                        <div className="d-flex flex-column mx-4 not_active">
                            <div className='text-center'>
                                <img src={require('../assets/icons/wallet.svg')} className='wallet-icon not_active'/>
                            </div>
                            <p className='it-fs14 text-primary'>Create new wallet</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row it-fs24">
                        <div className='mr-2'>
                            Total
                        </div>
                        <div className='pr-2 border-right'>
                            $ 94 560
                        </div>
                        <div className='ml-2'>
                            5.51BTC
                        </div>
                    </div>
                    <Progress multi className='mt-2 mr-4'>
                        {
                            [
                                ['32', '#ff9300', '32% BTC'],
                                ['15', '#aeaeae', '15% LTC'],
                                ['36', '#d8d8d8', '36% ETH'],
                                ['17', '#008fec', '17% DASH'],
                                ['22', '#ff6600', '22% XMR'],
                            ].map((item, i) => (
                                <div className="progress-bar" role="progressbar" style={{width: `${item[0]}%`, backgroundColor: item[1]}} aria-valuenow={item[0]} aria-valuemin="0" aria-valuemax="100">
                                    <span className='text-dark it-fs16 it-half-opacity'>{item[2]}</span>
                                </div>
                            ))
                        }
                    </Progress>
                    <Row className='mt-4'>
                        <Col md={3} xl={3} lg={3} className='col-3'>
                            <Card onClick={() => push(URLS.AddCurrency)}>
                                <CardBody>
                                    <div className='add_carrency'>
                                        <FontAwesome name='plus'/>
                                    </div>
                                    <div className='text-center mt-2'>Add Carrency</div>
                                </CardBody>
                            </Card>
                            <Card className='my-1 card_active'>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval bg-warning'/>
                                        <div className='it-fs14'>BTC</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>5.51004989 BTC</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='my-1'>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval it_bg_silver'/>
                                        <div className='it-fs14'>LTC</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>8.49003939 LTC</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='my-1'>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval it_bg_silver it-half-opacity'/>
                                        <div className='it-fs14'>ETH</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>0.89904638 ETH</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='my-1'>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval bg-primary'/>
                                        <div className='it-fs14'>DASH</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>0.000005 DASH</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='my-1'>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval bg-warning'/>
                                        <div className='it-fs14'>XMR</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>0.6 XMR</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={9} xl={9} lg={9} className='col-9'>
                            <div className='text-center mt-4'>
                                <img src='https://chain.so/Bitcoin@2x.png' className='cr-logo'/>
                                <div className='it-fs34 mt-2'>
                                    5.51004989 BTC
                                </div>
                                <div className='it-fs18 it-half-opacity'>
                                    $ 190.90
                                </div>
                            </div>
                            <div className="d-flex justify-content-center big_top_p">
                                <div className='mr-4'>
                                    <div className='oval-big'>
                                        <FontAwesome name='long-arrow-down' />
                                    </div>
                                    <div className='text-center it-fs18 mt-2'>Deposit</div>
                                </div>
                                <div className='mx-4'>
                                    <div className='oval-big'>
                                        <FontAwesome name='long-arrow-up' />
                                    </div>
                                    <div className='text-center it-fs18 mt-2'>Withdraw</div>
                                </div>
                                <div className='ml-4'>
                                    <div className='oval-big'>
                                        <FontAwesome name='refresh' />
                                    </div>
                                    <div className='text-center it-fs18 mt-2'>Transfer</div>
                                </div>
                            </div>
                            <div className='text-primary text-center big_top_p'>
                                See bitcoin transactions
                            </div>
                        </Col>
                    </Row>
                </div>
            </BasePage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);