import React, { Component } from 'react';
import {
    UncontrolledButtonDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Badge
  } from "reactstrap";

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledButtonDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Your Cart 
                </DropdownToggle>
                <DropdownMenu end>
                {
                    this.props.cart.map(cartItem=>(
                  <DropdownItem key={cartItem.product.id}>
                  <Badge color='danger' onClick={()=>{this.props.removeFromCart(cartItem.product)}}> X</Badge>
                    {cartItem.product.productName}
                    <Badge color='success'>{cartItem.quantity}</Badge>
                  </DropdownItem>
                    ))
                }
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledButtonDropdown>
      </div>
    )
  }
}
