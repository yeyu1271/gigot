import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
// import Logo from '../Logo';

import './Footer.scss';

export default class Footer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().getFullYear(),
      email: {
        qq: '982060782@qq.com',
        url: 'http://email.qq.com',
      },
      github: 'https://github.com/yeyu1271',
    };
  }

  render() {
    return (
      <Layout.Footer className="ice-design-layout-footer">
        <div className="ice-design-layout-footer-body">
          {/* <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
            <Logo />
          </div> */}
          <div className="copyright">
            <a
              href="https://github.com/alibaba/ice"
              target="_blank"
              className="copyright-link"
              rel="noopener noreferrer"
            >
              © {this.state.time} Theme designed by{' '}
              ICE
            </a>
            <a
              href={this.state.email.url}
              className="copyright-link"
            >
              {this.state.email.qq}
            </a>
            <a
              href={this.state.github}
              className="copyright-link"
            >
              Github
            </a>
          </div>
        </div>
      </Layout.Footer>
    );
  }
}
