import React, { Component } from 'react';
import './App.css';
import ProductBox from './ProductBox';
import SearchBar from './SearchBar';
import{
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Cart from './Cart'


class App extends Component {

  render() {

    return (
        <Router>
            <div>
                <div className="ui menu">
                    <Link to='/products' className='item'>
                        Products
                    </Link>
                    <Link to='/search' className='item'>
                        Search
                    </Link>
                    <Link to='/cart' className='item'>
                        Shopping Cart
                    </Link>
                </div>
                <Switch>
                    <Route
                        path='/products'
                        render={(props) => <ProductBox {...props} />}
                    />
                    <Route path='/company/:companyID' render={() => (
                        <div>Multiple Companies</div>
                    )} />
                    <Route path='/search' component={SearchBar} />
                    <Route path='/cart' component={Cart}/>
                    <Route render={() => (
                        <div>404 NOT FOUND</div>
                    )}/>
                </Switch>
            </div>
        </Router>
        /*<>
            <SearchBar productsToSearch={products}/>
            <ProductBox productsFromApi={products}/>
        </>*/
    );
  }
}

export default App;
