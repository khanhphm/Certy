<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card dark>
          <v-card-text >
            <v-container>
              <v-row>
                <v-col cols="2">
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
                  <h1 >Token Balance: {{balance}}</h1>
                  <v-divider class="my-6"></v-divider>
                  <h1 class="text-button">Contract Address: 0x1282Db2384DAd06bC0044eDbC3eAa0B7Aa1b0A34</h1>
                  <h1 class="text-button">Etherscan: <a href="https://ropsten.etherscan.io/address/0x1282Db2384DAd06bC0044eDbC3eAa0B7Aa1b0A34">ropsten.etherscan.io</a></h1>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row >
      <v-col>
        <v-app-bar dense dark>
          <h3>My Certificate</h3>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {  mapState } from "vuex";
export default {
  data() {

    return {
      
    }
  },
  computed:{
    ...mapState(["balance"])
  }
};
</script>

<style scoped></style>
