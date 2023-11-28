import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/index";

// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// routes
const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/admin" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Needed to reroute to login if user not logged in
router.beforeEach((to, from, next) => {
  if (to.path !== "/auth/login" && !store.getters.isLoggedIn) {
    next({ path: "/auth/login" });
  } else if (to.path === "/auth/login" && store.getters.isLoggedIn) {
    next({ name: "/admin/dashboard" });
  } else {
    next();
  }
});

export default router;