import React, { Component } from 'react';
import store from './Store';
import { connect } from "react-redux";
import {fetchProducts} from "./Api";

class SearchBar extends Component {
    state = {
        value: '',
    };

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.onSearch(this.state.value);
        this.setState({
            value: '',
        });
    };

    onSearch = (result) => {
        let reg = new RegExp(result, 'ig');
        let arrRes = [];
        let products = store.getState().api.items;
        console.log(products);
        for (let i = 0; i < products.length; i++) {
            if (products[i].title.match(reg)) {
                arrRes.push(products[i]);
                store.dispatch({
                    type: 'ADD_SEARCH_RESULT',
                    arrRes: arrRes,
                    search: result,
                });
                console.log(arrRes);
            }
        }
    };

    render() {
        const { error, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return(
            <form className='ui input focus'>
                <input type='text' placeholder='Search' value={this.state.value} onChange={this.onChange}/>
                <button type='submit' onClick={this.handleSubmit} className='ui primary button'>Let's Go!</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    arrRes: state.searcher.arrRes,
    search: state.searcher.search,
    products: state.api.items,
    error: state.api.error
});

export default connect(mapStateToProps)(SearchBar)