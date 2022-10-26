import React from 'react';
import Layout from '../components/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps}s />
  </Layout>
}

export default MyApp
