import Vue from 'vue-native-core';
import Vuex from 'vuex';
import user from './user'
import shared from './shared'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared
  },
  
  state: {
    activeType: 'posts',
    posts: [],
    logging_in: false,
    userObj: {},
    loadingPosts: false
  }
});

export default store;