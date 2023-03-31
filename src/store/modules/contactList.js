import { contactlist } from "@/services/api";
export default {
  namespaced: true,
  state: {
    contactList: [],
  },
  mutations: {
    SET_RESP_DATA(state, obj) {
      state[obj.key] = obj.data;
    },
  },
  actions: {
    async getContactList({ commit }, payload) {
      contactlist({ ...payload }).then((res) => {
        if (res.success) {
          commit("SET_RESP_DATA", { key: "contactList", data: res.data });
        }
      });
    },
  },
  getters: {
    contactListData(state) {
      return state.contactList;
    },
    contactListCount(state) {
      return state.contactList.length;
    },
    contactInfo(state) {
      return function (id) {
        return state.contactList.filter((item) => item.id === id);
      };
    },
  },
};
