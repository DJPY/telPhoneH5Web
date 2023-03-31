import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout";
// import ContactList from "../views/contactList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    meta: { title: "首页", index: 0, navigationBarTextStyle: "white" },
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("../views/login"),
        meta: { title: "登录", index: 1, navigationBarTextStyle: "white" },
      },
      {
        path: "/contactFavorite",
        name: "ContactFavorite",
        component: () => import("../views/contactFavorite"),
        meta: {
          title: "收藏夹",
          index: 1,
          navigationBarTextStyle: "white",
        },
      },
      {
        path: "/contactList",
        name: "ContactList",
        component: () => import("../views/contactList"),
        meta: {
          title: "联系人列表",
          index: 2,
          navigationBarTextStyle: "white",
        },
      },
      {
        path: "/contactAdd",
        name: "ContactAdd",
        component: () => import("../views/contactAdd"),
        meta: {
          title: "联系人添加",
          index: 3,
          navigationBarTextStyle: "white",
        },
      },
      {
        path: "/contactInfo",
        name: "ContactInfo",
        component: () => import("../views/contactInfo"),
        meta: {
          title: "联系人信息",
          index: 4,
          navigationBarTextStyle: "white",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
