import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Search,
  NavBar,
  IndexBar,
  IndexAnchor,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Form,
  Field,
  Button,
  Card,
  ContactList,
  DatetimePicker,
  Popup,
  Popover,
  Notify, //引入 Notify 组件后，会自动在 Vue 的 prototype 上挂载 $notify 方法，便于在组件内调用。
} from "vant";
import store from "./store";
import { Base64 } from "js-base64";
import "vant/lib/index.css";
import "./assets/main.css";
import "./assets/iconfont/iconfont.css";
import "@vant/touch-emulator";

Vue.config.productionTip = false;
Vue.use(Base64);
Vue.use(Search)
  .use(NavBar)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Form)
  .use(Card)
  .use(Field)
  .use(ContactList)
  .use(Button)
  .use(DatetimePicker)
  .use(Popup)
  .use(Popover)
  .use(Notify);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
