import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../../elements'
import {
    Row, Col, Progress, Card, CardBody, CardText, Badge, Button,
    ListGroup, ListGroupItem, Input, FormGroup, Label
} from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../../constants/urls'
import {push} from "react-router-redux";
import {set_top_panel} from "../../actions/menu";
import ReactSVG from 'react-svg';
import Tile from './tile'
import Table from './table'


class MarketList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            tile: true
        }
    }

    componentDidMount() {
        const {set_top_panel} = this.props;

        set_top_panel(3)
    }

    changeView() {
        this.setState({tile: !this.state.tile})
    }

    render() {

        const {push, theme} = this.props,
            {tile} = this.state;


        return (
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-page'>
                    <div className='it-market-list'>
                        <Row className='justify-content-between'>
                            <Col className='mt-3'>
                                <p className='it_page_title'>Markets</p>
                            </Col>
                            <Col className='mt-3'>
                                <div className='it_cycle_times' onClick={() => push(URLS.Trading)}>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-between top-nav'>
                            <div className='d-flex flex-row'>
                                <div className='item'>
                                    <span className='it-fs18 it_light_opacity it-medium'>All</span>
                                    <span className='it-fs18 it-half-opacity ml-2'>10</span>
                                </div>
                                <div className='item'>
                                    <img src='https://chain.so/Bitcoin@2x.png' />
                                    <span className='it-fs18 it_light_opacity it-medium'>Bitcoin BTC</span>
                                    <span className='it-fs18 it-half-opacity ml-2'>10</span>
                                    <div className='active' />
                                </div>
                                <div className='item'>
                                    <img src='https://avatars1.githubusercontent.com/u/7450663?v=3' />
                                    <span className='it-fs18 it_light_opacity it-medium'>Ethereum ETH</span>
                                    <span className='it-fs18 it-half-opacity ml-2'>10</span>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className="input-group search mr-2">
                                    <input type="text" className="form-control border-right-0" placeholder='Search'/>
                                    <div className="input-group-append">
                                    <span className="input-group-text border-left-0">
                                        <FontAwesome name='search' />
                                    </span>
                                    </div>
                                </div>
                                <div className={`ml-4 type_icon mr-4 ${tile ? 'non_active' : ''}`} onClick={this.changeView.bind(this)}>
                                    <img src={theme.colomn} />
                                </div>
                                <div className={`type_icon ${!tile ? 'non_active' : ''} mr-2`} onClick={this.changeView.bind(this)}>
                                    <img src={theme.tile} />
                                </div>
                            </div>
                        </div>
                        {tile ? <Tile />: <Table />}
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
        push: url => dispatch(push(url)),
        set_top_panel: number => dispatch(set_top_panel(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);