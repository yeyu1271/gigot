import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import cx from 'classnames';
import FoundationSymbol from '@icedesign/foundation-symbol';

const Atype = [
  'JavaScript',
  'HTML',
  'CSS',
  'Node',
  'Java',
  'Python',
];

@withRouter
export default class Aside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: Array.from({ length: 10 }).map(() => {
        return {
          title: Atype[Math.floor(Math.random() * 4)],
          url: '#',
          top: Math.random() > 0.5,
          hot: Math.random() > 0.5,
          new: Math.random() > 0.5,
          time: Date.now() - Math.floor(10000000000 * Math.random()),
        };
      }),
    };
  }

  render() {
    return (
      <ul style={styles.type}>
        <li style={styles.title}>
          分类
        </li>
        {this.state.dataSource.map((notice, index) => {
          return (
            <li
              key={index}
              title={notice.title}
              style={styles.item}
            >
              <a
                target="_self"
                href={notice.url}
                style={styles.itemName}
              >
                {notice.title}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

const styles = {
  type: {
    minWidth: 210,
    marginTop: 20,
    border: '1px solid #ccc',
    borderRadius: 10,
    padding: '20px 5px 10px 35px',
    marginRight: 20,
    listStyle: 'square',
  },
  title: {
    listStyle: 'none',
    fontSize: 16,
    paddingBottom: 12,
    paddingLeft: 11,
    marginLeft: -28,
    borderBottom: '1px solid #ccc',
  },
  item: {
    marginTop: 12,
    lineHeight: 1.5,
  },
  itemName: {
    display: 'block',
  },
};
