import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import ImgMediaCard from "../templates/ImgMediaCard"
import { Grid } from "@mui/material"

const IndexPage = () => (
  <Layout>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ImgMediaCard style={{
          backgroundColor: "#edebe9"
        }}>xs=4</ImgMediaCard>
      </Grid>
      <Grid item xs={6}>
        <ImgMediaCard></ImgMediaCard>
      </Grid>
      <Grid item xs={8}>
        <ImgMediaCard></ImgMediaCard>
      </Grid>
      <Grid item xs={8}>
        <ImgMediaCard></ImgMediaCard>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
