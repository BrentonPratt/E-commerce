import React, { Component } from 'react';
import store from './Store';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Cart extends Component {

    handleClick(item, e) {
        this.removeItem(item)
    }

    removeItem = (id) => {
        store.dispatch({
            type: 'DELETE_FROM_CART',
            cartItems: store.getState().cart.cartItems,
            id: id,
        })
    };

    checkOut = () => {
        store.dispatch({
            type: 'CHECK_OUT',
            cartItems: [],
        })
    };

    render() {
        const cartItems = store.getState().cart.cartItems;
        let Total = 0;

        for (let i=0; i<cartItems.length; i++) {
            Total += cartItems[i].price
        }

        return (
            <div className='ui items'>
                {cartItems.map((item, i) =>
                    <div className='item' key={item.id}>
                        <img src={item.img} alt='product' className='ui small image'/>
                        <div className='ui card'>
                            <div>{item.title}</div>
                            <div>${item.price}</div>
                            <div>Quantity: {item.quantity}</div>
                        </div>
                        <div className='ui extra'>
                            <Link to='/Cart' id={i} onClick={(e) => this.handleClick(i, e)}>
                                <i className='ui trash icon'></i>
                            </Link>
                        </div>
                    </div>
                )}

                <div className='ui item'>
                    <div>
                        Total: {Total}
                    </div>
                    <Link to='/' className='ui primary button' onClick={this.checkOut}>Check Out</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    arrRes: state.searcher.arrRes,
    search: state.searcher.search,
    products: state.api.items,
    error: state.api.error
});


export default connect(mapStateToProps)(Cart);