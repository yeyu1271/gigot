const { createPool } = require('mysql');
const { dbConfig } = require('../config/DBConfig');

const pool = createPool(dbConfig);
const db = {};

db.query = function (sql, params) {
  return new Promise((resolve, reject) => {
    // 取出链接
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.query(sql, params, (error, results, fields) => {
        console.log(`${sql}=>${params}`);
        // 释放连接      注意：并发访问无法释放，可换 pool.releaseConnection(connection);
        connection.release();
        if (error) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  });
};

// 导出对象
module.exports = db;
