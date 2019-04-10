import React, { Component } from 'react';

class ProductBox extends Component{

    render() {
        return(
            <div className='ui cards'>
                {this.props.productsFromApi.map(product =>
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
        )
    }
}

export default ProductBox