import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import FontAwesome from 'react-fontawesome'
import { Row, Col, Button, Badge } from 'reactstrap';


export default class TopPanel extends Component {

    render() {
        return(
            <div className={css(styles.left_panel)}>
                <Row>
                    <Col>
                        <div className="d-flex flex-row">
                            {
                                [
                                    ['ETH/BTC', 'success', '+ 10.4%', '0.049806'],
                                    ['DASH/BTC', 'danger', '- 0.5%', '0.076863'],
                                    ['XMR/BTC', 'success', '+ 2.02%', '0.023360', true]
                                ].map((item, i) => (
                                    <div className={`${css(styles.nav_item)} ${item[4] === true ? css(styles.nav_item__active) : ''}`} key={i}>
                                        <div className="d-flex flex-row">
                                            <FontAwesome name='times' className={css(styles.times)}/>
                                            <div className="d-flex flex-column ml-2">
                                                <span className={css(styles.nav_title)}>{item[0]}</span>
                                                <div className={`d-flex flex-row ${css(styles.nav_desc)}`}>
                                                    <p><Badge color={item[1]} pill>{item[2]}</Badge></p>
                                                    <p className={css(styles.nav_desc_number)}>{item[3]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className={`${css(styles.nav_item, styles.nav_item__add)}`}>
                                <div className="d-flex flex-column">
                                    <FontAwesome name='plus-circle' className={css(styles.nav_item__add_icon)}/>
                                    <p>Add market</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex flex-row-reverse mr-3'>
                            {
                                [
                                    'sign-out',
                                    'question-circle',
                                    'cog',
                                    'bell'
                                ].map((item, i) => (
                                    <FontAwesome key={i} name={item} className={css(styles.icon)}/>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    left_panel: {
        height: 46,
        width: 'auto',
        backgroundColor: '#f5f7fa',
        marginLeft: 94,
        position: 'relative'
    },
    icon: {
        fontSize: 18,
        marginRight: 10,
        marginLeft: 10,
        opacity: 0.8,
        lineHeight: '46px',
        verticalAlign: 'middle'
    },
    switch: {
        marginRight: 28,
        marginTop: 9
    },
    nav_item: {
        backgroundColor: 'rgba(40, 46, 61, 0.07)',
        height: 44,
        marginTop: 2,
        width: 180,
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        paddingLeft: 5,
        marginRight: 2,
        position: 'relative',
        textAlign: 'left',
        opacity: 0.8
    },
    nav_item__active: {
        backgroundColor: '#ffffff',
        opacity: 1,
        zIndex: 10
    },
    nav_item__add: {
        paddingTop: 6,
        width: 102,
        textAlign: 'center',
        fontSize: 12,
        border: '1px dashed #717171',
        borderBottom: 0
    },
    nav_item__add_icon: {
      color: '#4865d5',
      fontSize: 16,
    },
    times: {
        opacity: 0.3,
        color: '#282e3d',
        fontSize: 12
    },
    nav_title: {
      fontSize: 16,
      fontWeight: 600,
    },
    nav_desc: {
        position: 'absolute',
        top: 20,
        opacity: 0.8
    },
    nav_desc_number: {
        paddingLeft: '0.5em',
        lineHeight: '25px',
        fontSize: 12,
    }
});