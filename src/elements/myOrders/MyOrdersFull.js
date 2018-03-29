import React, { Component } from 'react';
import {connect} from "react-redux";
import FontAwesome from 'react-fontawesome'
import {
    Button, Progress, Row, Col, Input, Form,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import ReactSVG from 'react-svg';
import {set_my_orders, set_top_panel} from "../../actions/menu";
import {push} from "react-router-redux";
import CheckBox from '../checkBox'


class MyOrdersFull extends Component{

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen1: false,
            dropdownOpen2: false,
            dropdownOpen3: false,
            dropdownOpen4: false,
            dropdownOpen5: false,
        };
    }

    render() {

        const {set_my_orders, set_top_panel} = this.props;

        const ExportBtn = props => (
            <Button color='light' className={`border ml-4 ${props.extraClass} it-fs14`}>
                <span>
                    <FontAwesome name='file' className='mr-2 it-fs12'/> <span className='it_light_opacity'>Export order list</span>
                </span>
            </Button>
        );

        return (
            <div>
                <Row className='justify-content-between mt-3 ml-4'>
                    <Col>
                        <p className='it_page_title'>
                            <strong>My orders</strong>
                        </p>
                    </Col>
                    <Col>
                        <div className='it_cycle_times main' onClick={() => {
                            set_my_orders(0);
                            set_top_panel(2)
                        }}>
                            <ReactSVG
                                path={require('../../assets/icons/close_bg.svg')}
                            />
                        </div>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between body'>
                    <Form inline className='ml-4'>
                        <div className="d-flex flex-row it-btn-group form-rm">
                            <div className="it-btn active ">Opened</div>
                            <div className="it-btn border-left-0 "><span>Closed</span></div>
                        </div>
                        <Dropdown isOpen={this.state.dropdownOpen1} toggle={() => this.setState({
                            dropdownOpen1: !this.state.dropdownOpen1
                        })} className='mr-2'>
                            <DropdownToggle color='light small'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mr-3'>19/10/2016</div>
                                    <FontAwesome name='caret-down'/>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem disabled>
                                    <FontAwesome name='check' className='dropdown-check'/> 19/10/2016
                                </DropdownItem>
                                <DropdownItem>19/10/2016</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <div className='it-delimiter' />
                        <Dropdown isOpen={this.state.dropdownOpen2} toggle={() => this.setState({
                            dropdownOpen2: !this.state.dropdownOpen2
                        })} className='form-rm ml-2'>
                            <DropdownToggle color='light small'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mr-3'>19/10/2016</div>
                                    <FontAwesome name='caret-down'/>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem disabled>
                                    <FontAwesome name='check' className='dropdown-check'/> 19/10/2016
                                </DropdownItem>
                                <DropdownItem>19/10/2016</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen3} toggle={() => this.setState({
                            dropdownOpen3: !this.state.dropdownOpen3
                        })} className='mr-2'>
                            <DropdownToggle color='light small'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mr-3'>All</div>
                                    <FontAwesome name='caret-down'/>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem disabled>
                                    <FontAwesome name='check' className='dropdown-check'/> All
                                </DropdownItem>
                                <DropdownItem>All</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <div className='it-delimiter' />
                        <Dropdown isOpen={this.state.dropdownOpen4} toggle={() => this.setState({
                            dropdownOpen4: !this.state.dropdownOpen4
                        })} className='ml-2 form-rm'>
                            <DropdownToggle color='light small'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mr-3'>BTC</div>
                                    <FontAwesome name='caret-down'/>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem disabled>
                                    <FontAwesome name='check' className='dropdown-check'/> BTC
                                </DropdownItem>
                                <DropdownItem>BTC</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen5} toggle={() => this.setState({
                            dropdownOpen5: !this.state.dropdownOpen5
                        })} className='form-rm'>
                            <DropdownToggle color='light small'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mr-3'>All type</div>
                                    <FontAwesome name='caret-down'/>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem disabled>
                                    <FontAwesome name='check' className='dropdown-check'/> All type
                                </DropdownItem>
                                <DropdownItem>All type</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <CheckBox label={
                            <span className='it_light_opacity checkbox-label it-pointer'>
                                Hide all canceled
                            </span>
                        }/>
                    </Form>
                    <div>
                        <ExportBtn extraClass='export_btn_big'/>
                    </div>
                </div>
                <div className='mt-3 mx-4'>
                    <table className="table table-night">
                        <thead className='mt-3'>
                        <tr>
                            <th scope="col" style={{paddingTop: 3.5+'em'}}>Pair</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actual price</th>
                            <th scope="col">Order price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Total</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Created</th>
                            <th scope="col" />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='align-middle'>
                                <span className='text-primary it-fw6'>XMR/BTC</span>
                            </td>
                            <td className='text-danger align-middle arrow'>
                                <div className='d-flex flex-row'>
                                    <ReactSVG
                                        path={require('../../assets/icons/raw_down.svg')}
                                    />
                                    <span className='text-danger'>
                                            Market
                                    </span>
                                </div>
                            </td>
                            <td className='align-middle'>0.023238</td>
                            <td className='align-middle'>0.02315878</td>
                            <td className='align-middle'>0.33023974</td>
                            <td className='align-middle'>0.00764794 BTC</td>
                            <td className='align-middle'>
                                <Progress color="success" value="50">50%</Progress>
                            </td>
                            <td className='text-success align-middle'>+18.09 %</td>
                            <td className='align-middle'>04:44 27/11/2017 </td>
                            <td>
                                <div className='it_cycle_times position-static'>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>
                                <span className='text-primary it-fw6'>XMR/BTC</span>
                            </td>
                            <td className='text-danger align-middle arrow'>
                                <div className='d-flex flex-row'>
                                    <ReactSVG
                                        path={require('../../assets/icons/raw_down.svg')}
                                    />
                                    <span className='text-danger'>
                                            Market
                                        </span>
                                </div>
                            </td>
                            <td className='align-middle'>0.023238</td>
                            <td className='align-middle'>0.02315878</td>
                            <td className='align-middle'>0.33023974</td>
                            <td className='align-middle'>0.00764794 BTC</td>
                            <td className='align-middle'>
                                <Progress color="success" value="50">50%</Progress>
                            </td>
                            <td className='text-success align-middle'>+18.09 %</td>
                            <td className='align-middle'>04:44 27/11/2017 </td>
                            <td>
                                <div className='it_cycle_times position-static'>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>
                                <span className='text-primary it-fw6'>XMR/BTC</span>
                            </td>
                            <td className='text-danger align-middle arrow'>
                                <div className='d-flex flex-row'>
                                    <ReactSVG
                                        path={require('../../assets/icons/raw_down.svg')}
                                    />
                                    <span className='text-danger'>
                                            Market
                                        </span>
                                </div>
                            </td>
                            <td className='align-middle'>0.023238</td>
                            <td className='align-middle'>0.02315878</td>
                            <td className='align-middle'>0.33023974</td>
                            <td className='align-middle'>0.00764794 BTC</td>
                            <td className='align-middle'>
                                <Progress color="success" value="50">50%</Progress>
                            </td>
                            <td className='text-success align-middle'>+18.09 %</td>
                            <td className='align-middle'>04:44 27/11/2017 </td>
                            <td>
                                <div className='it_cycle_times position-static'>
                                    <ReactSVG
                                        path={require('../../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <ExportBtn extraClass='export_btn_small'/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        my_orders: state.menu.my_orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        set_top_panel: number => dispatch(set_top_panel(number)),
        set_my_orders: number => dispatch(set_my_orders(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersFull);