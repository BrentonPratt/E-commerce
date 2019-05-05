import React, { Component } from 'react';
import store from './Store';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class ProductDetails extends Component {

    Products = store.getState().api.items;

    addToCart = () => {
        let id = this.props.match.params.id;
        for (let i in this.Products) {
            if (this.Products[i].id === Number(id)) {
                this.Products[i].quantity = 1;
                store.dispatch({
                    type: 'ADD_TO_CART',
                    item: this.Products[i]
                });
            }
        }
    };

    render() {
        if (store.getState().api.items !== []) {
            const productSelected = store.getState().api.items[this.props.match.params.id - 1];
            console.log(productSelected);
            return (
                <>
                    <Link to={`/products`} className='item'>
                        <button className='ui primary button'>Back to Product List</button>
                    </Link>
                    <div className='ui cards'>
                            <div className='ui card' key={productSelected.id}>
                                <Link to={`/products/${productSelected.id}`} className='item'>
                                    <h2 className='ui header'>{productSelected.title}</h2>
                                    <img src={productSelected.img} alt='product' className='ui small image'/>
                                </Link>
                                <div>${productSelected.price}</div>
                                <div className='ui heart rating'>Rating: {productSelected.rating}</div>
                                <div>Product Category: {productSelected.category}</div>
                                <div>Product Description: {productSelected.description}</div>
                                <Link to='/products'>
                                    <button onClick={this.addToCart} className='ui primary button'>Add to cart</button>
                                </Link>
                            </div>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = state => ({
    arrRes: state.searcher.arrRes,
    search: state.searcher.search,
    products: state.api.items,
    error: state.api.error
});


export default connect(mapStateToProps)(ProductDetails)