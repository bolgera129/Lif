import React, { useState } from "react"
import css from "../../css/Product.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"


export default function Product(props){

    //const [cart, setCart] = useState();

    const shirt = props.shirt;

    function addToCart () {
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
                        <Button onClick = {addToCart} className = {css.shoppingCart}>
                            <FontAwesomeIcon icon = {faShoppingCart}/>
                        </Button>
                    </OverlayTrigger>

                </span>
              </p>
        </div>
    )
}