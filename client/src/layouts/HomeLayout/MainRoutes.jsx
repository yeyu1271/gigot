import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../../components/NotFound';

import routerData from '../../routerConfig';

class MainRoutes extends Component {
    static displayName = 'MainRoutes';

    render() {
      return (
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
          {/* 默认重定向主页 */}
          <Redirect from="/main" to="/main/file" />
          {/* 找不到页面 */}
          <Route component={NotFound} />
        </Switch>
      );
    }
}

export default MainRoutes;
