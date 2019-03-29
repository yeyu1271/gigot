/**
 * 定义应用路由
 */
import { HashRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';
import Normalout from './layouts/Normalout';
import HomeLayout from './layouts/HomeLayout';
import ArticleLayout from './layouts/ArticleLayout';

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const router = () => {
  return (
    <HashRouter>
      <Switch>
        {/* 匹配后台登录 */}
        <Route path="/user" component={UserLayout} />
        {/* 匹配后台管理 */}
        <Route path="/admin" component={BasicLayout} />
        {/* 匹配主页 */}
        <Route path="/main" component={HomeLayout} />
        {/* 匹配文章 */}
        <Route path="/article" component={ArticleLayout} />
        {/* 匹配首页 */}
        <Route path="/" component={Normalout} />
      </Switch>
    </HashRouter>
  );
};

export default router();
