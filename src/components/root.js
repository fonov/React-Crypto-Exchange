import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from '../redux/store'
import URLS from '../constants/urls'
//Views
import Trading from './trading'
import Wallet from './wallet'
import AddCurrency from './add_currency'
import Analytics from './analytics'
import Traders from './traders'
import Trader from './trader'
import Post from './post'
import Messages from './messages'
import MarketsList from './marketsList/index'
import Account from './account/index'
import SingIn from './sign/singIn'
import SignUp from './sign/signUp'
import ResetPassword from './sign/resetPassword'


class Root extends Component {

    render() {

        return(
            <Provider store={store()}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path={URLS.Trading} component={Trading} />
                        <Route path={URLS.Wallet} component={Wallet} />
                        <Route path={URLS.AddCurrency} component={AddCurrency} />
                        <Route path={URLS.Analytics} component={Analytics} />
                        <Route path={URLS.Traders} component={Traders} />
                        <Route path={URLS.Trader} component={Trader} />
                        <Route path={URLS.Post} component={Post} />
                        <Route path={URLS.Messages} component={Messages} />
                        <Route path={URLS.MarketsList} component={MarketsList} />
                        <Route path={URLS.Account} component={Account} />
                        <Route path={URLS.SIGNIN} component={SingIn} />
                        <Route path={URLS.SIGNUP} component={SignUp} />
                        <Route path={URLS.RESETPASSWORD} component={ResetPassword} />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root