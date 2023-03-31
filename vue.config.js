const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        // target: "http://192.168.0.81:8000/h5",
        target: "http://192.168.0.81:8080/h5",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
      "/baidu": {
        // target: "http://192.168.0.81:8000/h5",
        target: "https://aip.baidubce.com/",
        changeOrigin: true,
        pathRewrite: { "^/baidu": "" },
      },
    },
  },
});

// not usefor
// module.exports = {
//   dev: {
//     proxyTable: {
//       "/api": {
//         // target: "http://192.168.0.81:8000/h5",
//         target: "http://192.168.0.81:8080/h5",
//         changeOrigin: true,
//         pathRewrite: { "^/api": "" },
//       },
//       "/baidu": {
//         // target: "http://192.168.0.81:8000/h5",
//         target: "https://aip.baidubce.com/",
//         changeOrigin: true,
//         pathRewrite: { "^/baidu": "" },
//       },
//     },
//   },
// };
