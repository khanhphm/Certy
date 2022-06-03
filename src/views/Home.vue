<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-app-bar dark dense
            ><h3 class="text-center">Kiểm tra Token</h3></v-app-bar
          >
          <v-card-text class="d-flex">
            <v-text-field
              name="Token Id"
              label="Nhập Token ID của chứng chỉ"
              v-model="tokenId"
            ></v-text-field>
            <v-btn dark class="ma-2" @click="checkToken(tokenId)"  >Kiểm tra</v-btn>
            
          </v-card-text>
          
        </v-card>

        
      </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tokenId:null
    }
  },

methods:{
  checkToken(tokenId){
    if(tokenId!=null){
      this.$router.push("/certy/"+tokenId);
      return
    }
    return
  }
}
  
};
</script>

<style scoped></style>
