import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import{
    Link,
} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchProducts } from "./Api";
import './ProductBox.css';

class ProductBox extends Component{

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

        render() {

            const {error, products, arrRes, search} = this.props;

            if (error) {
                return <div>Error! {error.message}</div>;
            } else if (search !== '') {
                return (
                    <>
                        <SearchBar onSubmit={this.forceUpdate}/>
                        <div className='ui cards'>
                            {arrRes.map(product =>
                                <div className='ui card' key={product.id}>
                                    <Link to={`/products/${product.id}`} className='item' key={product.id}>
                                        <h2 className='ui header'>{product.title}</h2>
                                    </Link>
                                    <img src={product.img} alt='product' className='ui image'/>
                                    <div>${product.price}</div>
                                    <div className='ui heart rating'>Rating: {product.rating}</div>
                                    <div>Product Category: {product.category}</div>
                                </div>
                            )}
                        </div>
                    </>
                )
            } else {
            return (
                <>
                    <SearchBar onSubmit={this.forceUpdate}/>
                    <div className='ui cards'>
                        {products.map(product =>
                            <div className='ui card' key={product.id}>
                                <Link to={`/products/${product.id}`} className='item'>
                                    <h2 className='ui header'>{product.title}</h2>
                                    <img src={product.img} alt='product' className='ui image'/>
                                </Link>
                                <div>${product.price}</div>
                                <div className='ui heart rating'>Rating: {product.rating}</div>
                                <div>Product Category: {product.category}</div>
                            </div>
                        )}
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

export default connect(mapStateToProps)(ProductBox);