// const path = require("path");

// module.exports = ({ file }) => {
//   // const viewWidth = webpack.resourcePath.includes(
//   //   path.join("node_modules", "vant")
//   // )
//   //   ? 375
//   //   : 750;
//   const viewportWidth = file.includes(path.join("node_modules", "vant"))
//     ? 375
//     : 750;
//   return {
//     plugins: {
//       autoprefixer: {},
//       "postcss-px-to-viewport": {
//         unitToConvert: "px",
//         viewportWidth: viewportWidth,
//         unitPrecision: 6,
//         propList: ["*"],
//         viewportUnit: "vw",
//         fontViewportUnit: "vw",
//         selectorBlackList: [],
//         minPixelValue: 1,
//         mediaQuery: true,
//         exclude: [],
//         landscape: false,
//       },
//     },
//   };
// };
