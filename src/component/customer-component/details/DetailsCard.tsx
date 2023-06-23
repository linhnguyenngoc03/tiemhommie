import { Paper, Grid } from '@mui/material'
import React from 'react'
import DetailsImg from './DetailsImg'
import DetailsInfor from './DetailsInfor'

export default function DetailsCard({product} : any) {
  return (
    <Paper sx={{
        padding: {
          lg: "3rem",
          sm: "0rem"
        }
      }}>
        <Grid container>
        <Grid item xs={5} sx={{
          padding: "2rem",
          border: "1px solid gray",
          borderRadius: "1rem"
        }}>
            <DetailsImg image={product.image}/>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={6}>
            <DetailsInfor product={product}/>
        </Grid>
        </Grid>
      </Paper>
  )
}
