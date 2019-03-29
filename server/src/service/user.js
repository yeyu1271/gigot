const UserModel = require('../model/User');

class UserService {
  async profile() {
    // eslint-disable-next-line prefer-rest-params
    const data = await UserModel.findUserProfile(...arguments);
    return { data };
  }
}

module.exports = new UserService();
