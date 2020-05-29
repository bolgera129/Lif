import React from "react"
import css from "../../css/Main.module.css"
import Products from "./Products"


export default function Main() {


    return(
      <div id = "main">
          <img src = "/assets/icon.svg" alt = "lif logo" id = {css.mainlogo}/>
          <div>
            <h4 className = "justifyTextLeft padding20"> Products </h4>
            <Products/>
          </div>
      </div>

    )
}