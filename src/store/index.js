import { createStore } from 'vuex';
export default createStore({
    state: {
      gekozenPrijsId: null,
      gekozenPrijsOptie: null,
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
      updateGekozenPrijsId({ state, commit }, prijsId) {
        if (state.gekozenPrijsId !== prijsId) {  // Controleer of de nieuwe waarde anders is
          commit('setGekozenPrijsId', prijsId);
        }
      },
      updateGekozenPrijsOptie({ state, commit }, prijsOptie) {
        if (state.gekozenPrijsOptie !== prijsOptie) {  // Controleer of de nieuwe waarde anders is
          commit('setGekozenPrijsOptie', prijsOptie);
        }
      },
      updateSelectedProviderId({ state, commit }, providerId) {
        if (state.selectedProviderId !== providerId) {  // Controleer of de nieuwe waarde anders is
          commit('setSelectedProviderId', providerId);
        }
      },
      updateSelectedProviderName({ state, commit }, providerName) {
        if (state.selectedProviderName !== providerName) {  // Controleer of de nieuwe waarde anders is
          commit('setSelectedProviderName', providerName);
        }
      },
      updatePostcode({ state, commit }, postcode) {
        if (state.postcode !== postcode) {  // Controleer of de nieuwe waarde anders is
          commit('setPostcode', postcode);
        }
      },
    },
    getters: {
      getGekozenPrijsId: (state) => state.gekozenPrijsId,
      getGekozenPrijsOptie: (state) => state.gekozenPrijsOptie,
      getSelectedProviderId: (state) => state.selectedProviderId,
      getSelectedProviderName: (state) => state.selectedProviderName,
      getPostcode: (state) => state.postcode,
    }
  });
