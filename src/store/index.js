import { createStore } from 'vuex';

export default createStore({
  state: {
    gekozenPrijsId: null,
    gekozenPrijsOptie: null,
    selectedOptie: null,
    selectedProviderId: null,
    selectedProviderName: null,
    postcode: null,
    huisnummer: null,
    streetName: '',
    city: '',
    subid: null,
    pubid: null,
    shouldLoadPixel: false,
  },
  mutations: {
    setGekozenPrijsId(state, prijsId) {
      state.gekozenPrijsId = prijsId;
    },
    setGekozenPrijsOptie(state, prijsOptie) {
      state.gekozenPrijsOptie = prijsOptie;
    },
    setSelectedOptie(state, optie) {
      state.selectedOptie = optie;
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
    setHuisnummer(state, huisnummer) {
      state.huisnummer = huisnummer;
    },
    setStreetName(state, streetName) {
      state.streetName = streetName;
    },
    setCity(state, city) {
      state.city = city;
    },
    setSubId(state, subid) {
      state.subid = subid;
    },
    setPubId(state, pubid) {
      state.pubid = pubid;
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
    updateHuisnummer({ commit }, huisnummer) {
      commit('setHuisnummer', huisnummer);
    },
    updateStreetName({ commit }, streetName) {
      commit('setStreetName', streetName);
    },
    updateCity({ commit }, city) {
      commit('setCity', city);
    },
    idVraag2id({ commit }, geselecteerdeId) {
      commit('setSelectedOptie', geselecteerdeId);
    },
    updateSubId({ commit }, subid) {
      commit('setSubId', subid);
    },
    updatePubId({ commit }, pubid) {
      commit('setPubId', pubid);
    },
  },
  getters: {
    getGekozenPrijsId: (state) => state.gekozenPrijsId,
    getGekozenPrijsOptie: (state) => state.gekozenPrijsOptie,
    getSelectedOptie: (state) => state.selectedOptie,
    getSelectedProviderId: (state) => state.selectedProviderId,
    getSelectedProviderName: (state) => state.selectedProviderName,
    getPostcode: (state) => state.postcode,
    getHuisnummer: (state) => state.huisnummer,
    getStreetName: (state) => state.streetName,
    getCity: (state) => state.city,
    getSubId: (state) => state.subid,
    getPubId: (state) => state.pubid,
  },
});
