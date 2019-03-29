/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { PureComponent } from 'react';
import { Breadcrumb } from '@alifd/next';

import './base.scss';

export default class Header extends PureComponent {
  render() {
    return (
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>gigot</Breadcrumb.Item>
        <Breadcrumb.Item link="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item link="/main">归档</Breadcrumb.Item>
        <Breadcrumb.Item>
            T-shirts&nbsp; <b>78,999</b> Results
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
