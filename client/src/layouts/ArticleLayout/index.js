/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';

@withRouter
export default class ArticleLayout extends Component {
  render() {
    return (
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Layout>
          <Header />
          <Layout.Section scrollable>
            <Layout.Main style={{ padding: 0 }}>
              <MainRoutes />
            </Layout.Main>
          </Layout.Section>
          <Footer />
        </Layout>
      </div>
    );
  }
}
