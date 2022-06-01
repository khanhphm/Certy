<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-avatar class="shrink mr-4" size="40" color="dark">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/p3/2463890-ethereum-logo-couleur-vecteur-crypto-monnaie-symbole-isole-vectoriel.jpg"
            alt="alt"
          />
        </v-avatar>

        <h1 transition="scale-transition">CERTY</h1>
      </div>

      <v-divider class="mx-6" vertical color="gray"></v-divider>
      <v-tabs dark>
        <v-tab to="/"> Home </v-tab>
        <v-tab to="/check-certy"> Check Certy </v-tab>
        <v-tab to="/about"> About </v-tab>
        <v-tab to="/contact"> Contact </v-tab>
      </v-tabs>

      <div>
        <v-chip  color="dark"
          ><span>{{ showAcc(account) }}</span></v-chip
        >
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["account"]),
  },
  methods: {
    ...mapActions(["getAccount","getWallet"]),

    showAcc(account) {
      if (account.length > 0) {
        return (
          account.slice(0, 5) +
          "..." +
          account.slice(account.length - 4, account.length)
        );
      } else return "Not Connected";
    },
  },
  created() {
    window.ethereum.request({
      method: "eth_requestAccounts",
    }).then(()=>{
      
    });
  },
  async mounted() {
    await this.getAccount();
    await this.getWallet();
    window.ethereum.on("accountsChanged", () => {
      this.getWallet();
    });
  },
};
</script>
