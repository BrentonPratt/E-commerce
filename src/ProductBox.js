import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import axios from "axios";

class ProductBox extends Component{

    state = {
        products: []
    };

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
            .then((response) => {
                this.setState({
                    products: response.data
                });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        let products = this.state.products;

        return(
            <>
                <SearchBar productsToSearch={products}/>
                <div className='ui cards'>
                    {products.map(product =>
                        <div className='ui card' key={product.id}>
                            <h2 className='ui header'>{product.title}</h2>
                            <img src={product.img} alt='product' className='ui small image'/>
                            <div>Product Details: {product.description}</div>
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

export default ProductBox