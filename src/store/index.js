import { createStore } from "vuex";

export default createStore({
  state: {
    baseUrl: "/",
    user: {
      loggedIn: false,
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
  },
  actions: {
    loginUser({ commit }) {
      commit("SET_LOGGED_IN", true);
    },
    logoutUser({ commit }) {
      commit("SET_LOGGED_IN", false);
    },
  },
  modules: {
  },
  getters: {
    isLoggedIn: (state) => {
      return state.user.loggedIn;
    },
  },
});