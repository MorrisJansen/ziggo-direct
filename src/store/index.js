import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
  state: {
    gekozenPrijsId: null,
    gekozenPrijsOptie: null,
    selectedOptie: null, // Nieuwe property
    selectedProviderId: null,
    selectedProviderName: null,
    postcode: null,
  },
  mutations: {
    setGekozenPrijsId(state, prijsId) {
      state.gekozenPrijsId = prijsId;
    },
    setGekozenPrijsOptie(state, prijsOptie) {
      state.gekozenPrijsOptie = prijsOptie;
    },
    setSelectedOptie(state, optie) {
      state.selectedOptie = optie; // Optie opslaan
    },
    setSelectedProviderId(state, providerId) {
      state.selectedProviderId = providerId;
    },
    setSelectedProviderName(state, providerName) {
      state.selectedProviderName = providerName;
    },
    setPostcode(state, postcode) {
      state.postcode = postcode;
    },
  },
  actions: {
    updateGekozenPrijsId({ commit }, prijsId) {
      commit('setGekozenPrijsId', prijsId);
    },
    updateGekozenPrijsOptie({ commit }, prijsOptie) {
      commit('setGekozenPrijsOptie', prijsOptie);
    },
    updateSelectedOptie({ commit }, optie) {
      commit('setSelectedOptie', optie); // Optie dispatchen
    },
    updateSelectedProviderId({ commit }, providerId) {
      commit('setSelectedProviderId', providerId);
    },
    updateSelectedProviderName({ commit }, providerName) {
      commit('setSelectedProviderName', providerName);
    },
    updatePostcode({ commit }, postcode) {
      commit('setPostcode', postcode);
    },
  },
  getters: {
    getGekozenPrijsId: (state) => state.gekozenPrijsId,
    getGekozenPrijsOptie: (state) => state.gekozenPrijsOptie,
    getSelectedOptie: (state) => state.selectedOptie, // Nieuwe getter
    getSelectedProviderId: (state) => state.selectedProviderId,
    getSelectedProviderName: (state) => state.selectedProviderName,
    getPostcode: (state) => state.postcode,
  },
});
