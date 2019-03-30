import React, { Component } from 'react';
import TermsInfo from './components/TermsInfo';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params ? this.props.match.params.id : 0,
    };
  }
  componentDidMount() {
    console.log(this.props);
    console.log(this.state.id);
  }
  render() {
    return (
      <div className="article-page">
        <TermsInfo />
      </div>
    );
  }
}
