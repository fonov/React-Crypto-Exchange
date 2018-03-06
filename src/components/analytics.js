import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, ButtonGroup, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import { PieChart, Pie, Cell, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


class Analytics extends Component {

    render() {

        const {push} = this.props;

        const pie_chart = [
            {value: 40, color: '#8598e3'},
            {value: 50, color: '#9351e5'},
            {value: 10, color: '#f7c331'},
        ], performance = [
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
            {name: '14 nov', up: 50},
            {name: '14 nov', down: -50},
        ];

        let c_index = 0;

        return (
            <BasePage
                analytics_active={true}
                active={[false, false, false]}
            >
                <div className='it-analytics'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Analytics</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => push(URLS.Trading)}>
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </Row>
                    <Row className='card-info'>
                        {
                            [
                                ['today', 24, 190.58, '+ 16%'],
                                ['This week', 43, 489.39, '+ 16%'],
                                ['This month', 90, 700, '+ 16%'],
                                ['This Year', 200, 2500, '+ 26%'],
                            ].map((item, i) => (
                                <Col key={i} md={3} xl={3} lg={3} className='col-3'>
                                    <Card>
                                        <CardBody>
                                            <span className='label'>{item[0]}</span>
                                            <div className="d-flex flex-row info-block">
                                                <img src={require('../assets/icons/analytics/analytics@3x.png')} />
                                                <div className="d-flex flex-column info">
                                                    <span className='value'>{item[1]}</span>
                                                    <span className='key'>orders</span>
                                                </div>
                                                <div className="d-flex flex-column info">
                                                    <div><div className='symbol'>$</div><span className='value'>{item[2]}</span></div>
                                                    <span className='key'>investment</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row info-block bottom">
                                                <Badge pill className='bg-success'>{item[3]}</Badge>
                                                <span>from average performance</span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className='second-section'>
                        <Col lg={8} xl={8}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex justify-content-between">
                                        <strong className='it-fs16'>Performance</strong>
                                        <form className="form-inline">
                                            <div className="form-group">
                                                <label className='mr-2 it-fs12'>Step</label>
                                                <select className="form-control form-control-sm">
                                                    <option>1 day</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>

                                    <BarChart
                                        width={830}
                                        height={200}
                                        data={performance}
                                        barCategoryGap={2}
                                        barGap={-20}
                                        margin={{top: 20}}
                                    >
                                        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                                        <Bar dataKey='up' fill='#27ae66'/>
                                        <Bar dataKey='down' fill='#f26451'/>
                                    </BarChart>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} xl={4}>
                            <Card>
                                <CardBody className='performance'>
                                    <div className="d-flex justify-content-between">
                                        <strong className='it-fs16'>Performance</strong>
                                        <div className='cog it-fs14 it_light_opacity'><FontAwesome name='cog'/></div>
                                    </div>
                                    <div className="d-flex flex-row mt-2">
                                        <span className='text-success mr-2'>Active 5 sessions</span>
                                        <span className='text-secondary it_light_opacity'>Closed 278 sessions</span>
                                    </div>
                                    <Row className='chart'>
                                        <Col className='col-6' md={6} lg={6} xl={6}>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-row">
                                                    <div className='oval bg-warning' />
                                                    <div className="d-flex flex-column ml-2">
                                                        <span className='it-medium'>1 or less days</span>
                                                        <span className='text-secondary it_light_opacity'>10 sessions 15%</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row mt-3">
                                                    <div className='oval' style={{backgroundColor: '#9351e5'}} />
                                                    <div className="d-flex flex-column ml-2">
                                                        <span className='it-medium'>1 or less days</span>
                                                        <span className='text-secondary it_light_opacity'>10 sessions 15%</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row mt-3">
                                                    <div className='oval' style={{backgroundColor: '#8598e3'}} />
                                                    <div className="d-flex flex-column ml-2">
                                                        <span className='it-medium'>1 or less days</span>
                                                        <span className='text-secondary it_light_opacity'>10 sessions 15%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='col-6' md={6} lg={6} xl={6}>
                                            <PieChart width={400} height={200}>
                                                <Pie data={pie_chart} cx={50} cy={60} innerRadius={0} outerRadius={50} fill="#82ca9d">
                                                    {pie_chart.map((entry, index) => <Cell fill={entry.color}/>)}
                                                </Pie>
                                            </PieChart>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className='trade-session'>
                        <div className="d-flex flex-row">
                            <strong className='it-fs16'>Performance</strong>
                            <span className='it-fs16 it-half-opacity ml-2 mr-2'>2</span>
                            <div className="d-flex flex-row it-btn-group ml-2">
                                <div className="it-btn active">All</div>
                                <div className="it-btn"><span>Opened</span></div>
                                <div className="it-btn"><span>Closed</span></div>
                            </div>
                            <form className="form-inline">
                                <div className="form-group">
                                    <select className="form-control form-control-sm mr-2">
                                        <option>ALL</option>
                                    </select>
                                    <div className='it-delimiter' />
                                    <select className="form-control form-control-sm ml-2 mr-2">
                                        <option>BTC</option>
                                    </select>
                                    <label className='mr-2 ml-4 it-fs12 night_lite_op'>Sort by</label>
                                    <select className="form-control form-control-sm">
                                        <option>USD profit session</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div>
                            <Card className='mt-4'>
                                <CardBody>
                                    <Row>
                                        <div className='col-2'>
                                            <div className='d-flex flex-column'>
                                                <strong className='it-fs24 text-primary'>LTC/BTC</strong>
                                                <div className='it_light_opacity'>
                                                    <Badge pill className='bg-secondary my-badge'>Closed</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='d-flex flex-column'>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>9</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>9</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>9</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='d-flex flex-column'>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>15:19  6 dec 2017</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>15 hours 46 profits</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>19:20  15 dec 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2 text-center'>
                                            <span className='text-primary detail'>Details</span>
                                        </div>
                                        <div className='col-3'>
                                            <div className="d-flex flex-row">
                                                <div className='d-flex flex-column sym'>
                                                    <div>
                                                        <span className='text-success'>+3.01367 BTC</span>
                                                    </div>
                                                    <div>
                                                        <span className='text-success'>+39.19 USD</span>
                                                    </div>
                                                </div>
                                                <div style={{marginLeft: 6+'em'}}>
                                                    <Badge pill className='bg-success bg-badge'>+17%</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card className='mt-4'>
                                <CardBody>
                                    <Row>
                                        <div className='col-2'>
                                            <div className='d-flex flex-column'>
                                                <strong className='it-fs24 text-primary'>LTC/BTC</strong>
                                                <div className='it_light_opacity'>
                                                    <Badge pill className='bg-primary my-badge'>Active</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='d-flex flex-column'>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>9</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>9</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>9</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='d-flex flex-column'>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>15:19  6 dec 2017</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>15 hours 46 profits</span>
                                                </div>
                                                <div className='key-value'>
                                                    <span>Open orders</span> <span>19:20  15 dec 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2 text-center'>
                                            <span className='text-primary detail'>Details</span>
                                        </div>
                                        <div className='col-3'>
                                            <div className="d-flex flex-row">
                                                <div className='d-flex flex-column sym'>
                                                    <div>
                                                        <span className='text-success'>+3.01367 BTC</span>
                                                    </div>
                                                    <div>
                                                        <span className='text-success'>+39.19 USD</span>
                                                    </div>
                                                </div>
                                                <div style={{marginLeft: 6+'em'}}>
                                                    <Badge pill className='bg-success bg-badge'>+17%</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);