import Vue from "vue";
import Vuex from "vuex";
import contactList from "./modules/contactList";
import login from "./modules/login";

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// // const modulesFiles = require.context("./modules", true, /\.js$/); //Vite 不支持 requied，可以使用 import 来代替
// const modulesFiles = import.meta.glob("./modules/*.js");
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// // const modules = modulesFiles.keys().reduce((modules, modulePath) => {
// //   // set './app.js' => 'app'
// //   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
// //   const value = modulesFiles(modulePath);
// //   modules[moduleName] = value.default;
// //   return modules;
// // }, {});

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    contactList,
    login,
  },
});
