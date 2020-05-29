import React from "react"
import css from "../../css/Product.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"


export default function Product(props){

    const shirt = props.shirt;

    return(
        <div>
            <img src = {shirt.img} alt = {shirt.id} className = {css.productImg}/>
            <p>  
                {shirt.description} $ {shirt.price}
                <span className = "padding10">
                  <FontAwesomeIcon icon = {faShoppingCart}/>
                </span>
              </p>
        </div>
    )
}