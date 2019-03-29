/* eslint no-return-await:0 */
const { query } = require('./db');

class UserModel {
  async findUserProfile(x) {
    return await query('select * from user where id = ?', x);
    /* return await {
      name: '淘小宝',
      department: '技术部',
      avatar:
        'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
      userid: 10001,
    }; */
  }
}

module.exports = new UserModel();
