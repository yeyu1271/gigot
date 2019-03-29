const userService = require('../service/user');

class UserController {
  async profile(ctx) {
    const x = 1;
    const res = await userService.profile(x);
    console.log(1, res.data);
    ctx.body = res.data;
  }

  async login(ctx) {
    const { username, password } = ctx.query;
    console.log(ctx);
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
      ctx.body = {
        status: 200,
        statusText: 'ok',
        currentAuthority: 'admin',
      };
    } else if (username === 'user' && password === 'user') {
      ctx.body = {
        status: 200,
        statusText: 'ok',
        currentAuthority: 'user',
      };
    } else {
      ctx.body = {
        status: 401,
        statusText: 'unauthorized',
        currentAuthority: 'guest',
      };
    }
  }

  async register(ctx) {
    ctx.body = {
      status: 200,
      statusText: 'ok',
      currentAuthority: 'user',
    };
  }

  async logout(ctx) {
    ctx.body = {
      status: 200,
      statusText: 'ok',
      currentAuthority: 'guest',
    };
  }
}

module.exports = new UserController();
