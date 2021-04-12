import React, { Component } from 'react'
import Form from './Form';
import { v4 as uuid } from 'uuid';

class ShopList extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    id:uuid(),
                    name: 'egg',
                    qty:'5'
                }
            ]
        }
    }

    createItemHandler=(item)=> {
        
        const newItems = this.state.items.slice();
        newItems.push(item);
        this.setState({ items: newItems });
    
    }

    deleleItemHandler = (idx) => {
        const newItems = this.state.items.slice()
        newItems.splice(idx, 1);
        this.setState({ items: newItems });
    }

    render() {

        let items = this.state.items.map((i,idx) => {
            return <li onClick={this.deleleItemHandler.bind(this,idx)} key={uuid()}>Name : {i.name}- Quantity : {i.qty}</li>
        })

        return (
            <div>
                <h1>Shopping List</h1>
                <ul>
                    {items}
                </ul>

                <Form createItem={this.createItemHandler} />
                
            </div>
        )
    }
}

export default ShopList;
