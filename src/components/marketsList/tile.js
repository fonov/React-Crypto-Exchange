import React, {Component} from 'react';
import {
    AreaChart, Area, Cell, BarChart, CartesianGrid, XAxis,
    YAxis, Tooltip, Legend, Bar, ResponsiveContainer
} from 'recharts';
import {
    Row, Col, Progress, Card, CardBody, CardText, Badge,
    Button, ListGroup, ListGroupItem,
    Input, FormGroup, Label, Table
} from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import {connect} from "react-redux";


const tile = (props) => {

    const data = [
        {uv: 4000, pv: 2400, amt: 2400},
        {uv: 3000, pv: 1398, amt: 2210},
        {uv: 2000, pv: 9800, amt: 2290},
        {uv: 2780, pv: 3908, amt: 2000},
        {uv: 1890, pv: 4800, amt: 2181},
        {uv: 2390, pv: 3800, amt: 2500},
        {uv: 3490, pv: 4300, amt: 2100},
        {uv: 4000, pv: 2400, amt: 2400},
        {uv: 3000, pv: 1398, amt: 2210},
        {uv: 2000, pv: 9800, amt: 2290},
        {uv: 2780, pv: 3908, amt: 2000},
        {uv: 1890, pv: 4800, amt: 2181},
        {uv: 2390, pv: 3800, amt: 2500},
        {uv: 3490, pv: 4300, amt: 2100},
        {uv: 4000, pv: 2400, amt: 2400},
        {uv: 3000, pv: 1398, amt: 2210},
        {uv: 2000, pv: 9800, amt: 2290},
        {uv: 2780, pv: 3908, amt: 2000},
        {uv: 1890, pv: 4800, amt: 2181},
        {uv: 2390, pv: 3800, amt: 2500},
        {uv: 3490, pv: 4300, amt: 2100},
    ], {theme} = props;

    const base_chart = () => (
        <ResponsiveContainer width='100%' height={145}>
            <AreaChart data={data} margin={{top: 15, right: 0, bottom: 20, left: 0}}>
                <Area type='monotone' dataKey='uv' strokeWidth={3} stroke={theme.trader_chart_stroke} fill={theme.trader_chart_fill} />
            </AreaChart>
        </ResponsiveContainer>
    );

    return (
        <div className='tile-block'>
            <Row>
                {
                    [
                        [true, 'LTC/BTC', '+24.7%', '0.01810002', '0.01799996', '0.01799996', '0.01799996'],
                        [true, 'LTC/BTC', '+24.7%', '0.01810002', '0.01799996', '0.01799996', '0.01799996'],
                        [false, 'LTC/BTC', '+24.7%', '0.01810002', '0.01799996', '0.01799996', '0.01799996']
                    ].map((item, index) => (
                        <Col className='col-4' key={index}>
                            <Card>
                                <CardBody>
                                    <div className='d-flex justify-content-between'>
                                        <span className='it-fs24 it-fw6'>{item[1]}</span>
                                        <div className='it-medium it-fs16'>
                                            <Badge color={item[0] ? 'success' : 'danger'} pill className='it-fw6'>
                                                {item[2]}
                                            </Badge>
                                        </div>
                                    </div>
                                    <span className={`${item[0] ? 'text-success' : 'text-danger'} it-fs16 it-medium`}>
                                        <FontAwesome name='sort-asc'/> {item[3]}
                                    </span>
                                    {base_chart()}
                                    <Row>
                                        <Col sm={4} md={4} lg={4} xl={4} className='text-truncate'>
                                            <div className='text-center'>
                                                <span className='it-fs12 it-half-opacity'>Bid</span>
                                                <div className='text-truncate'>
                                                    <span className='it-fs18'>{item[4]}</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4} md={4} lg={4} xl={4} className='border-left border-right'>
                                            <div className='text-center text-truncate'>
                                                <span className='it-fs12 it-half-opacity'>Bid</span>
                                                <div className='text-truncate'>
                                                    <span className='it-fs18'>{item[4]}</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4} md={4} lg={4} xl={4}>
                                            <div className='text-center'>
                                                <span className='it-fs12 it-half-opacity'>Ask</span>
                                                <div className='text-truncate'>
                                                    <span className='it-fs18'>{item[6]}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(tile);