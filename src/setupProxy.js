/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 16:25:04
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 16:28:26
 * @FilePath: /my-app/setupProxy.js
 * @Description: 请求代理
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/xianxuan_api", {
      target: "https://xianxuan.api.master.xiyin.love/",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/xianxuan_api": "",
      },
    })
  );
};
