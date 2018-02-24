import React, { Component } from 'react';
import {LeftPanel, TopPanel} from './index'
import { StyleSheet, css } from 'aphrodite';


export default class BasePage extends Component{

    render() {

        const {children} = this.props;

        return (
            <div className={css(styles.container_fluid)}>
                <LeftPanel />
                <TopPanel />
                <div className={css(styles.main)}>
                    {children}
                </div>
            </div>
        )
    }
}

const coolFont = {
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "normal",
    src: `url('${require('../assets/fonts/Avenir Next Regular.otf')}')`
};

const styles = StyleSheet.create({
   container_fluid: {
       width: '100%',
       minWidth: 1024,
       padding: 0,
       margin: 0,
       height: '100%',
       minHeight: 800,
       fontFamily: [coolFont, "sans-serif"],
       fontSize: 14,
       color: '#1b1f2b',
       backgroundColor: 'rgba(40, 46, 61, 0.07);'
   },
   main: {
       position: 'relative',
       marginLeft: 94,
       backgroundColor: '#ffffff',
       height: 'auto',
       borderTopLeftRadius: 5,
       boxShadow: '-1px -1px 8px 0 rgba(0, 0, 0, .2);',
       paddingLeft: '2em'
   }
});