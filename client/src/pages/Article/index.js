import React, { Component } from 'react';
import TermsInfo from './components/TermsInfo';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="article-page">
        <TermsInfo />
      </div>
    );
  }
}
