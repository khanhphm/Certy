<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
      <div class="d-flex align-center">
        <v-avatar
        class="shrink mr-4"
          size="40"
          color="dark"
          
        >
          <img  src="https://static.vecteezy.com/ti/vecteur-libre/p3/2463890-ethereum-logo-couleur-vecteur-crypto-monnaie-symbole-isole-vectoriel.jpg" alt="alt">
        </v-avatar>
        
        <h1 transition="scale-transition">CERTY</h1>
        
      </div>

      <v-divider class="mx-6" vertical color="gray"></v-divider>
      <v-tabs
        dark
      >
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/check-certy">
          Check Certy
        </v-tab>
        <v-tab to="/about">
          About
        </v-tab>
        <v-tab to="/contact">
          Contact
        </v-tab> 

      </v-tabs>

      <div><v-chip color="dark"><span>0xb54...2e39</span></v-chip></div>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
