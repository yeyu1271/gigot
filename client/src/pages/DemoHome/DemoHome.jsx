import React, { Component } from 'react';
import NoticeList from './components/NoticeList';
import './DemoHome.scss';

export default class DemoHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="demo-home-page">
        <div>
          <NoticeList />
        </div>
      </div>
    );
  }
}

