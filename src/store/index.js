import Vue from "vue";
import Vuex from "vuex";
import {web3, contract} from "../Web3/Web3"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "",
    wallet:[],
    owner:""
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    setWallet(state, payload) {
      state.wallet = payload;
    },
    setOwner(state, payload){
      state.owner=payload
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
      contract.methods.myTokens().call({from:account}).then((data )=>{
        commit("setWallet", data);
      })
      
    },
    getOwner({commit}){
      contract.methods.owner().call().then((data)=>{
        console.log(data)
        commit("setOwner",data)
      })
    }
  },
  modules: {},
});
