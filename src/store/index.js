import Vue from 'vue';
import Vuex from 'vuex';
import vuexPersistedstate from 'vuex-persistedstate';

import app from './modules/app';
import auth from './modules/auth';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const persistedState = vuexPersistedstate({
  key: 'spotify_app_state',
  reducer: state => ({
    auth: state.auth,
  }),
});

export default new Vuex.Store({
  modules: {
    app,
    auth
  },
  plugins: [persistedState],
  strict: debug
});
