import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Progress, Card, CardBody, CardText } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';
import BaseLeftPage from '../elements/BaseLeftPage'
import {ClosePageAction} from '../actions/LeftPage'


class Wallet extends Component{

    render() {

        const {push, theme, ClosePageAction} = this.props;

        return (
            <BaseLeftPage
                BasePageProps={{
                    active: [false, false, false],
                    wallet_active: true
                }}
            >
                <div className='it_wallet'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>My wallets</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => ClosePageAction(URLS.Trading)}>
                                <ReactSVG
                                    path={require('../assets/icons/close_bg.svg')}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex flex-row wallet-icon-gr it-pointer">
                        <div className="d-flex flex-column wallet-icon">
                            <div className='text-center'>
                                <img src={theme.wallet_1}/>
                            </div>
                            <p className='it-fs14 it_light_opacity'>My wallet 1</p>
                        </div>
                        <div className="d-flex flex-column wallet-icon not_active">
                            <div className='text-center'>
                                <img src={theme.hide_wallet}/>
                            </div>
                            <p className='it-fs14 text-primary '>Wallet for Marina</p>
                        </div>
                        <div className="d-flex flex-column wallet-icon not_active">
                            <div className='text-center'>
                                <img src={theme.hide_wallet}/>
                            </div>
                            <p className='it-fs14 text-primary'>My new wallet</p>
                        </div>
                        <div className="d-flex flex-column wallet-icon not_active">
                            <div className='text-center'>
                                <img src={theme.add_wallet}/>
                            </div>
                            <p className='it-fs14 text-primary'>Create new wallet</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row it-fs24 info-block">
                        <div className='mr-2'>
                            <span className='night-opacity'>Total</span>
                        </div>
                        <div className='pr-2'>
                            $ 94 560
                        </div>
                        <div className='vertical-hr' />
                        <div className='ml-2'>
                            5.51BTC
                        </div>
                    </div>
                    <Progress multi className='mt-3 mr-4'>
                        {
                            [
                                ['32', '#ff9300', '32% BTC'],
                                ['15', '#aeaeae', '15% LTC'],
                                ['36', '#d8d8d8', '36% ETH'],
                                ['17', '#008fec', '17% DASH'],
                                ['22', '#ff6600', '22% XMR'],
                            ].map((item, i) => (
                                <div className="progress-bar" role="progressbar" style={{width: `${item[0]}%`, backgroundColor: item[1]}} aria-valuenow={item[0]} aria-valuemin="0" aria-valuemax="100">
                                    <span className='progress_text'>{item[2]}</span>
                                </div>
                            ))
                        }
                    </Progress>
                    <Row className='currency-block'>
                        <Col md={3} xl={3} lg={3} className='col-3 it-pointer'>
                            <Card onClick={() => push(URLS.AddCurrency)}>
                                <CardBody>
                                    <div className='add_carrency'>
                                        <ReactSVG
                                            path={require('../assets/icons/plus.svg')}
                                        />
                                    </div>
                                    <div className='text-center mt-1'>
                                        <span className='add_carrency_title'>Add Carrency</span>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className='card_active'>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval bg-warning'/>
                                        <div className='it-fs14 it-medium'>BTC</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18 it-medium'>5.51004989 BTC</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval it_bg_silver'/>
                                        <div className='it-fs14 it-medium'>LTC</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>8.49003939 LTC</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className=''>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval it_bg_silver it-half-opacity'/>
                                        <div className='it-fs14 it-medium'>ETH</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>0.89904638 ETH</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className=''>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval' style={{backgroundColor: '#33a5f0'}}/>
                                        <div className='it-fs14 it-medium'>DASH</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>0.000005 DASH</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className=''>
                                <CardBody>
                                    <div className="d-flex justify-content-center text-center">
                                        <div className='oval' style={{backgroundColor: '#ff8533'}}/>
                                        <div className='it-fs14 it-medium'>XMR</div>
                                    </div>
                                    <CardText className='text-center'>
                                        <span className='it-fs18'>0.6 XMR</span>
                                        <div className='it-fs14 it_light_opacity'>$ 190.90</div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={9} xl={9} lg={9} className='col-9 current_currency'>
                            <div className='text-center'>
                                <img src='https://chain.so/Bitcoin@2x.png' className='cr-logo'/>
                                <div className='it-fs34 mt-3 it-medium'>
                                    5.51004989 BTC
                                </div>
                                <div className='it-fs18 it-half-opacity'>
                                    $ 190.90
                                </div>
                            </div>
                            <div className="d-flex justify-content-center big_top_p it-pointer">
                                <div className='mr-4'>
                                    <div className='oval-big'>
                                        <ReactSVG
                                            path={require('../assets/icons/dep.svg')}
                                        />
                                    </div>
                                    <div className='text-center it-fs18 mt-2'>Deposit</div>
                                </div>
                                <div className='mx-4'>
                                    <div className='oval-big'>
                                        <ReactSVG
                                            path={require('../assets/icons/wit.svg')}
                                        />
                                    </div>
                                    <div className='text-center it-fs18 mt-2'>Withdraw</div>
                                </div>
                                <div className='ml-4'>
                                    <div className='oval-big'>
                                        <ReactSVG
                                            path={require('../assets/icons/tran.svg')}
                                            className='oval-big-svg'
                                        />
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

            </BaseLeftPage>
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
        push: url => dispatch(push(url)),
        ClosePageAction: url => dispatch(ClosePageAction(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);