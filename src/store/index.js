import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    gekozenPrijsId: null,
    gekozenPrijsOptie: null,
    selectedOptie: null,  // Dit is waar we de geselecteerde optie zullen opslaan
    selectedProviderId: null,
    selectedProviderName: null,
    postcode: null,
    subid: null, // Nieuwe state voor subid
    pubid: null, // Nieuwe state voor pubid
  },
  mutations: {
    setGekozenPrijsId(state, prijsId) {
      state.gekozenPrijsId = prijsId;
    },
    setGekozenPrijsOptie(state, prijsOptie) {
      state.gekozenPrijsOptie = prijsOptie;
    },
    setSelectedOptie(state, optie) {
      state.selectedOptie = optie;  // Mutatie om de geselecteerde optie te zetten
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
    setSubId(state, subid) {  // Nieuwe mutatie voor subid
      state.subid = subid;  // Voeg deze toe aan je state
    },
    setPubId(state, pubid) {  // Nieuwe mutatie voor pubid
        state.pubid = pubid;  // Voeg deze toe aan je state
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
      commit('setSelectedOptie', optie);
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
    // Nieuwe actie voor idVraag2id
    idVraag2id({ commit }, geselecteerdeId) {
      commit('setSelectedOptie', geselecteerdeId);
    },
    updateSubId({ commit }, subid) {
      commit('setSelectedOptie', subid); // of een andere mutatie, afhankelijk van waar je de subid wilt opslaan
    },
    updatePubId({ commit }, pubid) {
        commit('setSelectedProviderId', pubid); // idem hier
    },
  },
  getters: {
    getGekozenPrijsId: (state) => state.gekozenPrijsId,
    getGekozenPrijsOptie: (state) => state.gekozenPrijsOptie,
    getSelectedOptie: (state) => state.selectedOptie,  
    getSelectedProviderId: (state) => state.selectedProviderId,
    getSelectedProviderName: (state) => state.selectedProviderName,
    getPostcode: (state) => state.postcode,
    getSubId: (state) => state.subid, // Getter voor subid
    getPubId: (state) => state.pubid, // Getter voor pubid
  },
});
