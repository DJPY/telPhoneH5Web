import { bdtoken } from "@/services/api";
export default {
  namespaced: true,
  state: {
    bdtoken: null,
  },
  mutations: {
    SET_RESP_DATA(state, obj) {
      state[obj.key] = obj.data;
    },
  },
  actions: {
    async getToken({ commit }, payload) {
      bdtoken({ ...payload }).then((res) => {
        if (res.success) {
          commit("SET_RESP_DATA", { key: "bdtoken", data: res.data });
        }
      });
    },
  },
  getters: {},
};
