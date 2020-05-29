import React from "react"
import data from "../../utils/data"
import Grid from "@material-ui/core/Grid"
import Product from "./Product"

export default function Prodcuts() {

    const shirts = data.shirts

    return(
        <div>
            <Grid container spacing = {3}>
                {shirts.map(s =>
                  <Grid container item>
                    <Product shirt = {s} />
                  </Grid>
                )}
            </Grid>
        </div>
    )
}