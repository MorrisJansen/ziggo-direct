import { createStore } from 'vuex';
export default createStore({
    state: {
      gekozenPrijsId: null,
      gekozenPrijsOptie: null,
      selectedProviderId: null,
      selectedProviderName: null,
      postcode: null,  // Voeg deze regel toe
    },
    mutations: {
      setGekozenPrijsId(state, prijsId) {
        state.gekozenPrijsId = prijsId;
      },
      setGekozenPrijsOptie(state, prijsOptie) {
        state.gekozenPrijsOptie = prijsOptie;
      },
      setSelectedProviderId(state, providerId) {
        state.selectedProviderId = providerId;
      },
      setSelectedProviderName(state, providerName) {
        state.selectedProviderName = providerName;
      },
      setPostcode(state, postcode) {  // Voeg deze mutation toe
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
      updateSelectedProviderId({ commit }, providerId) {
        commit('setSelectedProviderId', providerId);
      },
      updateSelectedProviderName({ commit }, providerName) {
        commit('setSelectedProviderName', providerName);
      },
      updatePostcode({ commit }, postcode) {  // Voeg deze action toe
        commit('setPostcode', postcode);
      },
    },
    getters: {
      getGekozenPrijsId: (state) => state.gekozenPrijsId,
      getGekozenPrijsOptie: (state) => state.gekozenPrijsOptie,
      getSelectedProviderId: (state) => state.selectedProviderId,
      getSelectedProviderName: (state) => state.selectedProviderName,
      getPostcode: (state) => state.postcode,  // Voeg deze getter toe
    }
  });
  