/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import routerData from '../../routerConfig';

export default class BasicLayout extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routerData.map((item, index) => {
            return item.component ? (
              <Route
                key={index}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ) : null;
          })}
          {/* 默认重定向首页 */}
          <Redirect from="/" to="/index" />
          {/* 找不到页面 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
