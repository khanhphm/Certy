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
        <v-tab to="/my-certy"> My Certy </v-tab>
        <v-tab to="/admin"> Admin </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const Moralis = require("moralis");
const serverUrl = "https://0pi3aryzbveg.usemoralis.com:2053/server";
const appId = "ERpaelo8j5rMwc4uFZKyhItKjQ08oIKJIJzRZbp4";
Moralis.start({ serverUrl, appId });
import { mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    
  },
  methods: {
    ...mapActions(["getOwner"])
  },
  created() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then(() => {});
  },
  async mounted() {
    
    
    
  },
};
</script>
