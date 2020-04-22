import Vue from 'vue';
import Vuex from 'vuex';

// 系统保留
import app from './modules/app';
import errorLog from './modules/errorLog';
import permission from './modules/permission';
import tagsView from './modules/tagsView';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // 系统保留
    app,
    errorLog,
    permission,
    tagsView,
    user,
  },
  getters,
});

export default store;
