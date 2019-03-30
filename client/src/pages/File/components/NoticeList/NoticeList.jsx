import Container from '@icedesign/container';
import React, { Component } from 'react';
import fecha from 'fecha';
import { Link } from 'react-router-dom';

// import { Pagination } from '@alifd/next';

const mokeDataTitle = [
  '新发布内容，立刻放入【内容分类】，能获得更多曝光量！',
  '【活动入口已开启】2018造物节-达人图文内容招稿说明',
  '【微淘达人训练营第3期】L1&L2等级达人看过来，福利继续喽！',
  '【爆文创作挑战开启】6月爆文红榜美妆篇 ，五步掌握爆款技巧',
];

class NoticeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: Array.from({ length: 15 }).map(() => {
        return {
          title: mokeDataTitle[Math.floor(Math.random() * 4)],
          url: `/article/content/${Math.floor(Math.random() * 10)}`,
          top: Math.random() > 0.5,
          hot: Math.random() > 0.5,
          new: Math.random() > 0.5,
          time: Date.now() - Math.floor(10000000000 * Math.random()),
        };
      }),
    };
  }

  /* handleChange = () => {
    this.setState({
      dataSource: Array.from({ length: 10 }).map(() => {
        return {
          title: mokeDataTitle[Math.floor(Math.random() * 4)],
          url: '#',
          top: Math.random() > 0.5,
          hot: Math.random() > 0.5,
          new: Math.random() > 0.5,
          time: Date.now() - Math.floor(10000000000 * Math.random()),
        };
      }),
    });
  }; */

  render() {
    return (
      <Container style={{ width: 750, padding: 0, marginBottom: 15 }}>
        <h3 style={styles.header}>分类：全部</h3>
        <div>
          {this.state.dataSource.map((notice, index) => {
            return (
              <Link
                key={index}
                target="_self"
                title={notice.title}
                to={notice.url}
                style={styles.noticeItem}
              >
                <div>
                  <span style={styles.title}>{notice.title}</span>
                  {notice.top && <span style={styles.top}>置顶</span>}
                  {notice.hot && <span style={styles.hot}>HOT</span>}
                  {notice.new && <span style={styles.new}>NEW</span>}
                </div>
                <span style={styles.time}>
                  {fecha.format(notice.time, 'MMMM Do YYYY')}
                </span>
              </Link>
            );
          })}
          {/* <div style={{ textAlign: 'right', paddingTop: 20 }}>
            <Pagination onChange={this.handleChange} />
          </div> */}
        </div>
      </Container>
    );
  }
}

const styles = {
  header: {
    fontSize: 16,
    lineHeight: '16px',
    paddingBottom: 5,
    fontWeight: 700,
  },
  noticeItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #fafafa',
    lineHeight: '48px',
    height: 48,
    textDecoration: 'none',
  },
  title: {
    color: '#333',
  },
  top: {
    backgroundColor: '#eff6ff',
    fontSize: 12,
    color: '#4196ff',
    lineHeight: '16px',
    marginLeft: 5,
    padding: '0 8px',
    borderRadius: 20,
  },
  hot: {
    backgroundColor: '#ffe8e8',
    fontSize: 12,
    color: '#f86d6d',
    lineHeight: '16px',
    marginLeft: 5,
    padding: '0 8px',
    borderRadius: 20,
  },
  new: {
    backgroundColor: '#fff4e2',
    fontSize: 12,
    color: '#fca61c',
    lineHeight: '16px',
    marginLeft: 5,
    padding: '0 8px',
    borderRadius: 20,
  },
  time: { color: '#999' },
};

export default NoticeList;
