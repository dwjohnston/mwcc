import React from 'react'
import { Link } from 'gatsby'
import withRoot from "../withRoot";
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Image name="homepage" />

  </Layout>
)

export default withPage(IndexPage)
