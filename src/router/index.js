import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/register",
    name: "Registration",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "registration" */ "../views/Registration.vue")
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      requireAuth: true
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      requireAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    // console.log("检查登录状态...");
    if (sessionStorage.token) {
      // 判断登录存入的token是否存在
      console.log("已登录!");
      next();
    } else {
      next({
        path: "/",
        /* 跳转回认证页面，并将目标路由的url路径保存在query中 */
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
