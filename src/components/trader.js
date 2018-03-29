import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import {
    Row, Col, Progress, Card, CardBody,
    CardText, Badge, Button, Input, Tooltip as TooltipEl
} from 'reactstrap';
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import { AreaChart, Area, Cell, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import TradeBio from '../elements/traderBio'
import ReactSVG from 'react-svg';
import {FacebookIcon, TwitterIcon, TelegramIcon} from 'react-share';


class Trader extends Component{

    constructor(props) {
        super(props);

        this.state = {
            tooltipShare: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({tooltipShare: true}), 500)
    }

    render() {

        const {push, theme} = this.props,
            data = [
                {name: '26.11', uv: 4000, pv: 2400, amt: 2400},
                {name: '26.11', uv: 3000, pv: 1398, amt: 2210},
                {name: '26.11', uv: 2000, pv: 9800, amt: 2290},
                {name: '26.11', uv: 2780, pv: 3908, amt: 2000},
                {name: '26.11', uv: 1890, pv: 4800, amt: 2181},
                {name: '26.11', uv: 2390, pv: 3800, amt: 2500},
                {name: '26.11', uv: 3490, pv: 4300, amt: 2100},
            ],
            {tooltipShare} = this.state;

        return (
            <BasePage
                active={[false, false, false]}
                traders_active={true}
            >
                <div className='it-page'>
                    <div className='it-trader'>
                        <div className='d-flex justify-content-between mt-3'>
                            <div className='d-flex flex-row'>
                                <div className='back' onClick={() => push(URLS.Traders)}>
                                    <ReactSVG
                                        path={require('../assets/icons/arrow-left.svg')}
                                    />
                                </div>
                                <span className='it_light_opacity it-fs14 back-label'>Back to traders list</span>
                            </div>
                            <Col>
                                <div className='it_cycle_times' onClick={() => push(URLS.Traders)}>
                                    <ReactSVG
                                        path={require('../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </Col>
                        </div>
                        <Row className='bio'>
                            <Col className='text-center' sm={3} md={3} xl={2} lg={2}>
                                <TradeBio/>
                            </Col>
                            <Col className='section-2' sm={9} md={9} xl={10} lg={10}>
                                <div className='d-flex flex-row'>
                                    <strong className='it-fs16'>Return</strong>
                                    <div className="d-flex flex-row it-btn-group ml-2">
                                        <div className="it-btn active">Last Year</div>
                                        <div className="it-btn"><span>Last month</span></div>
                                        <div className="it-btn it-btn_m"><span>Last week</span></div>
                                        <div className="it-btn"><span>Last day</span></div>
                                    </div>
                                </div>
                                <Row className='pt-4'>
                                    <Col className='col-10' md={10} lg={10} xl={10}>
                                        <ResponsiveContainer width='100%' height={170}>
                                            <AreaChart data={data}>
                                                <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                                                <Area type='monotone' dataKey='uv' strokeWidth={3} stroke={theme.trader_chart_stroke} fill={theme.trader_chart_fill} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </Col>
                                    <Col className='col-10 text-center return-percent' md={2} lg={2} xl={2}>
                                        <span className='text-success it-fs36'>64%</span>
                                        <div className='it-medium it-half-opacity'>
                                            Average Return for month
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='border-bottom border-top investments_trades'>
                                    <Col className='col-6 investments' md={6} lg={6} xl={6}>
                                        <div className='d-flex justify-content-between investments-title'>
                                            <span className='it-fs16 it-fw6'>Investments</span>
                                            <span className='text-primary it-fs16'>See all</span>
                                        </div>
                                        {
                                            [1,2,3].map(item => (
                                                <Row className='investments-row' key={item}>
                                                    <Col className='col-8' md={8} xl={8} lg={8}>
                                                        <div className='d-flex flex-row'>
                                                            <div>
                                                                <img src='https://avatars1.githubusercontent.com/u/7450663?v=3' />
                                                                <img src='https://chain.so/Bitcoin@2x.png' />
                                                            </div>
                                                            <div className='name'>
                                                                <span className='text-primary it-fs14 it-fw6'>XMR/BTC</span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-2 text-center number' md={2} xl={2} lg={2}>
                                                        <span className='it-fs18'>96</span>
                                                        <div>
                                                <span className='it-fs12 it-half-opacity it-medium'>
                                                    trades
                                                </span>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-2 text-center number' md={2} xl={2} lg={2}>
                                                        <span className='it-fs18'>96</span>
                                                        <div>
                                                <span className='it-fs12 it-half-opacity it-medium'>
                                                    trades
                                                </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                    <Col className='col-6 trades' md={6} lg={6} xl={6}>
                                        <div className='d-flex justify-content-between'>
                                            <strong className='it-fs16'>Trades</strong>
                                        </div>
                                        <div className='text-center'>
                                            <Badge pill className='rating'>
                                                4
                                            </Badge>
                                        </div>
                                        <div className='text-center it-half-opacity it-fs12 mt-2'>
                                            average risk for last trades
                                        </div>
                                        <div className='gr-rating'>
                                            <div className='gradient' />
                                        </div>
                                        <div className='d-flex justify-content-around mt-3'>
                                            <div className='text-center'>
                                                <span className='it-fs24'>489</span>
                                                <div>
                                                    <span className='it-half-opacity it-fs12'>total trades</span>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <span className='it-fs24'>489</span>
                                                <div>
                                                    <span className='it-half-opacity it-fs12'>total trades</span>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <span className='it-fs24'>489</span>
                                                <div>
                                                    <span className='it-half-opacity it-fs12'>total trades</span>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <span className='it-fs24'>489</span>
                                                <div>
                                                    <span className='it-half-opacity it-fs12'>total trades</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='trading_journal'>
                                    <strong className='it-fs16'>Trading journal</strong>
                                    <Row>
                                        <Col className='col-2' md={2} xl={2} lg={2}>
                                            <div className='time-line'>
                                                <div className='date'>
                                                    <span>28</span>
                                                    <div>DEC</div>
                                                </div>
                                                <div className='line' />
                                                <div className='date'>
                                                    <span>26</span>
                                                    <div>DEC</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='col-10 posts' md={10} xl={10} lg={10}>
                                            <Card className='post' onClick={() => push(URLS.Post)}>
                                                <CardBody>
                                            <span className='it-fs14'>
                                                So it is critically important that you get just the right telescope for where you are and what your star gazing preferences are.
                                            </span>
                                                    <div className='d-flex justify-content-between mt-4'>
                                                        <div className='it-fs14 text-primary'>
                                                            See 4 comments
                                                        </div>
                                                        <div className='it-fs14 it_light_opacity'>
                                                            <div className='d-flex flex-row'>
                                                                <div className='d-flex flex-row'>
                                                                    <ReactSVG path={require('../assets/icons/like.svg')}/> <span className='ml-1'>Like 0</span>
                                                                </div>
                                                                <div className='share' id='TooltipShare'>
                                                                    <ReactSVG path={require('../assets/icons/share2.svg')}/>
                                                                </div>
                                                                <TooltipEl placement="top" isOpen={tooltipShare} target="TooltipShare" toggle={() => null}>
                                                                    <div className='d-flex flex-row tooltip-content'>
                                                                        <div className='mr-2'>
                                                                            <FacebookIcon size={34} round={true}/>
                                                                        </div>
                                                                        <div className='mr-2'>
                                                                            <TwitterIcon size={34} round={true} />
                                                                        </div>
                                                                        <TelegramIcon size={34} round={true} />
                                                                    </div>
                                                                    <div className='my-arrow'/>
                                                                </TooltipEl>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Input placeholder='Add your comment' />
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='post'>
                                                <CardBody>
                                            <span className='it-fs14'>
                                                So it is critically important that you get just the right telescope for where you are and what your star gazing preferences are.
                                            </span>
                                                    <div className='d-flex justify-content-between mt-4'>
                                                        <div className='it-fs14 text-primary'>
                                                            See 4 comments
                                                        </div>
                                                        <div className='it-fs14 it_light_opacity'>
                                                            <div className='d-flex flex-row'>
                                                                <div className='d-flex flex-row'>
                                                                    <ReactSVG path={require('../assets/icons/like.svg')}/> <span className='ml-1'>Like 0</span>
                                                                </div>
                                                                <div className='share'>
                                                                    <ReactSVG path={require('../assets/icons/share2.svg')}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Input placeholder='Add your comment' />
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </BasePage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trader);