import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',

        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = () => {
        this.props.onSubmit(this.state.value);
        this.setState({
            value: '',
        });
    };

    onSearch = () => {
        let reg = /i/g;
        for (let i = 0; this.props.productsToSearch > i; i++) {

        }
    };

    render() {
        return(
            <form className='ui input focus'>
                <input type='text' placeholder='Search' value={this.state.value} onChange={this.onChange}/>
                <button type='submit' onClick={this.handleSubmit} className='ui primary button'>Let's Go!</button>
            </form>
        )
    }
}

export default SearchBar