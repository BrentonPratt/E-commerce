import React, { Component } from 'react';
import './App.css';
import ProductBox from './ProductBox';
import{
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Cart from './Cart'
import { Provider } from "react-redux";
import store from './Store';


class App extends Component {

  render() {

    return (
        <Router>
            <div>
                <div className="ui menu">
                    <Link to='/products' className='item'>
                        Products
                    </Link>
                    <Link to='/cart' className='item'>
                        Shopping Cart
                    </Link>
                </div>
                <Switch>
                    <Route exact path='/products' component={ProductBox}/>
                    <Route path='/products/:id' render={() => (
                        <div>Multiple Companies</div>
                    )} />
                    <Route path='/cart' component={Cart}/>
                    <Redirect from="/" to="/products" />
                    <Route render={() => (
                        <div>404 NOT FOUND</div>
                    )}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

const WrappedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default WrappedApp;
