<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card dark>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col class="d-flex align-center" cols="2">
                  <div>
                    <v-avatar size="90%">
                      <img
                        src="https://static.vecteezy.com/ti/vecteur-libre/p3/2463890-ethereum-logo-couleur-vecteur-crypto-monnaie-symbole-isole-vectoriel.jpg"
                      />
                    </v-avatar>
                  </div>
                    
                
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="10">
                  <h1>Token Balance: {{ balance }}</h1>
                  <v-divider class="my-6"></v-divider>
                  <div class="text-button">Account: {{account}}</div>
                  <h1 class="text-button">
                    Contract Address: 0x9709B9d0fEE23102dB34eA853556F8c8F3a7269E
                  </h1>
                  <h1 class="text-button">
                    Etherscan:
                    <a
                      href="https://ropsten.etherscan.io/address/0x9709B9d0fEE23102dB34eA853556F8c8F3a7269E"
                      >ropsten.etherscan.io</a
                    >
                  </h1>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row>
      <v-col>
        <v-app-bar dense dark>
          <h3>My Certificate</h3>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["account","balance"]),
  },
  methods: {
    ...mapActions(["getAccount", "getWallet"]),

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
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then(() => {});
  },
  async mounted() {
    await this.getAccount();
    await this.getAccount();
    await this.getWallet();
    window.ethereum.on("accountsChanged", async () => {
      await this.getAccount();
      await this.getWallet();
    });
  },
};
</script>

<style scoped></style>
