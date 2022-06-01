import Vue from "vue";
import Vuex from "vuex";
import {web3, contract} from "../Web3/Web3"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "",
    wallet:null,
    balance:0,
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    setWallet(state, payload) {
      state.wallet = payload;
    },
    setBalance(state, payload) {
      state.balance = payload;
    }
  },
  actions: {
    async getAccount({commit}){
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      commit("setAccount", accounts[0]);
    },
    getWallet({commit, state}){
      const account = state.account
      contract.methods.walletOfOwner(account).call({from:account}).then((data )=>{
        commit("setWallet", data);
        commit("setBalance", data.length);
      })
      
    }
  },
  modules: {},
});
