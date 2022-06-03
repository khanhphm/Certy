<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-app-bar dense dark><h3>
            Tên chứng chỉ
          </h3></v-app-bar>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    computed:{
    },
    methods:{
      TokenId(){
        console.log(this)
        return this.$route.params.tokenId
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>