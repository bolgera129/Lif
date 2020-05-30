import React from "react"
import data from "../../utils/data"
import Grid from "@material-ui/core/Grid"
import Product from "./Product"

export default function Products() {

    const shirts = data.shirts

    return(
        <div>
            <Grid container spacing = {3}>
                {shirts.map(s =>
                  <Grid container item lg = {6} xs = {12} md = {6}>
                    <Product className = "padding20" shirt = {s} />
                  </Grid>
                )}
            </Grid>
        </div>
    )
}