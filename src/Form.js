import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            qty:''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.createItem(this.state);

        this.setState({name:'',qty:''})
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                
                <input type="text"
                    name="name"
                    placeholder="Product Name"
                    onChange={this.changeHandler}
                    value={this.state.name}
                />
                <input type="text"
                    name="qty"
                    placeholder="Product Quantity"
                    onChange={this.changeHandler}
                    value={this.state.qty}
                />
                
                <button>Add Item!</button>
            </form>
        )
    }
}

export default Form;
