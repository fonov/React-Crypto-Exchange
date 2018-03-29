import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Row, Col, Card, CardBody, Badge,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import { PieChart, Pie, Cell, BarChart, XAxis, Bar, ResponsiveContainer } from 'recharts';
import ReactSVG from 'react-svg';
import BaseLeftPage from '../elements/BaseLeftPage'
import {ClosePageAction} from '../actions/LeftPage'


class Analytics extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpen2: false,
            dropdownOpen3: false,
        };
    }

    render() {

        const {push, theme, ClosePageAction} = this.props;

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
            <BaseLeftPage
                BasePageProps={{
                    active: [false, false, false],
                    analytics_active: true
                }}
            >
                <div className='it-analytics'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Analytics</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => ClosePageAction(URLS.Trading)}>
                                <img src={theme['close']} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='card-info'>
                        {
                            [
                                ['today', 242, 190.58, '+ 16%'],
                                ['This week', 43, 489.39, '+ 16%'],
                                ['This month', 90, 700, '+ 16%'],
                                ['This Year', 200, 2500, '+ 26%'],
                            ].map((item, i) => (
                                <Col key={i} md={3} xl={3} lg={3} className='col-3'>
                                    <Card>
                                        <CardBody>
                                            <span className='label'>{item[0]}</span>
                                            <Row>
                                                <Col sm={6} md={6} lg={6} xl={6}>
                                                    <div className="d-flex flex-row info-block">
                                                        <img src={theme.my_orders_icon} />
                                                        <div className="d-flex flex-column info" >
                                                            <span className='value'>{item[1]}</span>
                                                            <span className='key'>orders</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='info-block' sm={6} md={6} lg={6} xl={6}>
                                                    <div className="d-flex flex-column info">
                                                        <div className='d-flex flex-row'>
                                                            <ReactSVG
                                                                path={require('../assets/icons/dollor.svg')}
                                                                className='symbol'
                                                            />
                                                            <span className='value'>{item[2]}</span>
                                                        </div>
                                                        <span className='key'>investment</span>
                                                    </div>
                                                </Col>
                                            </Row>

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
                                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({
                                                    dropdownOpen: !this.state.dropdownOpen
                                                })}>
                                                    <DropdownToggle color='light extra-small'>
                                                        <div className='d-flex justify-content-between'>
                                                            <div className='mr-3'>1 day</div>
                                                            <FontAwesome name='caret-down'/>
                                                        </div>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>1 day</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </form>
                                    </div>
                                    <ResponsiveContainer width='100%' height={200}>
                                        <BarChart
                                            data={performance}
                                            barCategoryGap={2}
                                            barGap={-20}
                                            margin={{top: 20}}
                                        >
                                            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                                            <Bar dataKey='up' fill='#27ae66'/>
                                            <Bar dataKey='down' fill='#f26451'/>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} xl={4}>
                            <Card>
                                <CardBody className='performance'>
                                    <div className="d-flex justify-content-between">
                                        <strong className='it-fs16'>Time session</strong>
                                        <div className='cog it-fs14 it_light_opacity it-pointer'>
                                            <img src={theme.cog} />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-1">
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
                                        <Col className='col-6 pt-2' md={6} lg={6} xl={6}>
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
                                    <Dropdown isOpen={this.state.dropdownOpen1} toggle={() => this.setState({
                                        dropdownOpen1: !this.state.dropdownOpen1
                                    })} className='mr-2'>
                                        <DropdownToggle color='light extra-small'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='mr-3'>ALL</div>
                                                <FontAwesome name='caret-down'/>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>ALL</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <div className='it-delimiter' />
                                    <Dropdown isOpen={this.state.dropdownOpen2} toggle={() => this.setState({
                                        dropdownOpen2: !this.state.dropdownOpen2
                                    })} className='ml-2 mr-2'>
                                        <DropdownToggle color='light extra-small'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='mr-3'>BTC</div>
                                                <FontAwesome name='caret-down'/>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>BTC</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <label className='mr-2 ml-4 it-fs12 night_lite_op'>Sort by</label>
                                    <Dropdown isOpen={this.state.dropdownOpen3} toggle={() => this.setState({
                                        dropdownOpen3: !this.state.dropdownOpen3
                                    })} className='mr-2'>
                                        <DropdownToggle color='light extra-small'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='mr-3'>USD profit session</div>
                                                <FontAwesome name='caret-down'/>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu style={{width: '120%'}}>
                                            <DropdownItem>USD profit session</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </form>
                        </div>
                        <div>
                            <Card className='mt-4 performance-card'>
                                <CardBody>
                                    <Row>
                                        <div className='col-7'>
                                            <div className='d-flex flex-row'>
                                                <div className='d-flex flex-column block-1'>
                                                    <strong className='it-fs24 text-primary'>LTC/BTC</strong>
                                                    <div className='it_light_opacity'>
                                                        <Badge pill className='bg-secondary my-badge'>
                                                            <span>Closed</span>
                                                        </Badge>
                                                    </div>
                                                </div>
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
                                                <div className='d-flex flex-column block-2'>
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
                                        </div>
                                        <div className='col-2 text-center'>
                                            <span className='text-primary detail it-pointer'>Details</span>
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
                                                <div className='block-2'>
                                                    <Badge pill className='bg-badge'>
                                                        <span>+17%</span>
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card className='mt-2 performance-card'>
                                <CardBody>
                                    <Row>
                                        <div className='col-7'>
                                            <div className='d-flex flex-row'>
                                                <div className='d-flex flex-column block-1'>
                                                    <strong className='it-fs24 text-primary'>LTC/BTC</strong>
                                                    <div className='it_light_opacity'>
                                                        <Badge pill className='bg-secondary my-badge'>
                                                            <span>Closed</span>
                                                        </Badge>
                                                    </div>
                                                </div>
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
                                                <div className='d-flex flex-column block-2'>
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
                                        </div>
                                        <div className='col-2 text-center'>
                                            <span className='text-primary detail it-pointer'>Details</span>
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
                                                <div className='block-2'>
                                                    <Badge pill className='bg-badge'>
                                                        <span>+17%</span>
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);