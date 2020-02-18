import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  message: 'Hello',
  username: 'ilteriskeskin',
};

const getters = {
  welcomeMessage(state) {
    return `${state.message} ${state.username}`;
  },
};

const mutations = {
  setUserName(state, name) {
    state.username = name;
  },
};

const actions = {
  updateUserName({ commit }, name) {
    commit('setUserName', name);
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
