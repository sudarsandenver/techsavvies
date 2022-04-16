import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { Grid } from "@mui/material"
import awsIam from "../images/aws-iam-logo.jpg"
import harnessAWS from "../images/harness-aws.png"

const IndexPage = () => (
  <Layout>
    <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={6} spacing={4}>
        <div>
          <img
            src={awsIam}
            alt="AWS IAM"
            height="250px"
            style={{
              marginBottom: "0px",
            }}
          ></img>
        </div>
        <div
          style={{
            float: "inherit",
            top: "50%",
            fontFamily: "sans-serif",
            margin: "5px",
          }}
        >
          <h3>AWS IAM</h3>
          <span>
            {" "}
            AWS Identity and Access Management helps to access the aws services
            or resources by the user or group of user in more secure manner.
          </span>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} spacing={4}>
        <div>
          <img
            src={harnessAWS}
            alt="AWS CloudFormation Using Harness"
            height="250px"
            style={{
              marginBottom: "0px",
            }}
          ></img>
        </div>
        <div
          style={{
            float: "inherit",
            top: "50%",
            fontFamily: "sans-serif",
            margin: "5px",
          }}
        >
          <h3>Harness CI/CD</h3>
          <span>
            {" "}
            Harness is a Continuous Integration/Continuous Deployment tool to
            build, test and deploy our softwares to cloud or on-prem
          </span>
        </div>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
