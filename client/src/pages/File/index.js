import React, { Component } from 'react';
import NoticeList from './components/NoticeList';

export default class File extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="file-page">
        <NoticeList />
      </div>
    );
  }
}
