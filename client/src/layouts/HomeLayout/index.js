/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import MainRoutes from './MainRoutes';

@withRouter
export default class HomeLayout extends Component {
  render() {
    return (
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Layout>
          <Header />
          <Layout.Section scrollable>
            <Layout.Main>
              <MainRoutes />
            </Layout.Main>
            <Layout.Aside>
              <Aside />
            </Layout.Aside>
          </Layout.Section>
          <Footer />
        </Layout>
      </div>
    );
  }
}
