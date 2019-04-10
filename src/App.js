import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ProductBox from './ProductBox';
import SearchBar from './SearchBar';

class App extends Component {

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

    return (
        <>
            <SearchBar productsToSearch={products}/>
            <ProductBox productsFromApi={products}/>
        </>
    );
  }
}

export default App;
