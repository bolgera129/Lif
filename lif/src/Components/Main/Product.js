import React, { useState, useContext } from "react"
import css from "../../css/Product.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import {StoreContext} from "../../contexts/contexts"


export default function Product(props){

    const shirt = props.shirt;
    let { addToCart,cartItems } = useContext(StoreContext);
    
    function handleAddToCart (item) {
        addToCart(item)
    }

    return(
        <div>
            <img src = {shirt.img} alt = {shirt.id} className = {css.productImg}/>
            <p>  
                {shirt.description} $ {shirt.price}
                <span className = "padding10">
                    <OverlayTrigger
                      overlay ={ 
                        <Tooltip>
                            Add To Cart
                        </Tooltip>
                    }>
                        <Button onClick = { i => handleAddToCart(shirt.id)} className = {css.shoppingCart}>
                            <FontAwesomeIcon icon = {faShoppingCart}/>
                        </Button>
                    </OverlayTrigger>

                </span>
              </p>
        </div>
    )
}