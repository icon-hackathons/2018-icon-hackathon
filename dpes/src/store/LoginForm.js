/* eslint-disable no-param-reassign */
import AT from './action-types';
import ServerAPI from '../api/ServerAPI';

/* mutation-types */
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const RESET = 'RESET';

export default {
  state: {
    auth: false,
    userId: 0,
  },
  mutations: {
    [LOG_IN_SUCCESS](state, payload) {
      state.auth = true;
      state.userId = payload;
    },
    [LOG_OUT_SUCCESS](state) {
      state.auth = false;
      state.userId = 0;
    },
    [SIGN_IN_SUCCESS](state, payload) {
      state.auth = true;
      state.userId = payload;
    },
    [RESET](state) {
      state.auth = false;
    },
  },
  actions: {
    async [AT.LOGIN_FORM.LOG_IN]({ commit }, payload) {
      const checkAuth = await ServerAPI.checkAuth(payload.email, payload.pw);
      if (checkAuth) {
        commit(LOG_IN_SUCCESS);
      }
    },
    [AT.LOGIN_FORM.LOG_OUT]({ commit }) {
      commit(LOG_OUT_SUCCESS);
    },
    [AT.LOGIN_FORM.RESET]({ commit }) {
      commit(RESET);
    },
  },
};
