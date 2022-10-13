<template>
  <v-container class="px-12">
    <v-row>
      <v-col>
        <v-card >
          <v-app-bar dense dark><h3>Thông tin chứng chỉ</h3></v-app-bar>
          <v-img
            :src="
              'https://bafybeiht3m4yn2tvqtlsykcqc5s33dlijqaph4i6pfqwmenmvlftfbm4oy.ipfs.nftstorage.link/' +
              cert[1] +
              '.png'
            "
            height="500px"
          ></v-img>
          <v-card-title> {{ cert[1] }} Certificate <v-icon color="success" x-small :disabled="!cert[3]"
                            >mdi-circle</v-icon
                          > </v-card-title>
          <v-card-text>
            <div class="text-overline">
              Owner:
              <a
                target="_blank"
                :href="
                  'https://sepolia.etherscan.io/token/' +
                  contractAddress +
                  '?a=' +
                  cert[2]
                "
                >{{ cert[0] }}</a
              >
            </div>
            <div>
              Neque qui modi dolores accusamus a saepe ducimus
                              qui. Nesciunt dignissimos impedit quia neque omnis
                              sit qui est et. Accusamus qui dolores. Rerum
                              explicabo voluptas aut voluptatibus corrupti
                              laboriosam quo inventore porro. Non enim non ea
                              consequatur eius ad fugit labore at. Quos sed
                              consequatur dolores dolorem cumque magnam.
                              Voluptatum dolores aut. Provident reiciendis et
                              quibusdam. Qui laborum autem animi asperiores qui
                              maiores. Occaecati occaecati fuga. Quo dicta
                              explicabo voluptatibus ab nulla consequatur
                              suscipit animi et. Corrupti voluptatum
                              distinctio. <br>
                              Numquam id nesciunt nesciunt
                              repudiandae iusto ut. Et quaerat recusandae
                              dolores iusto est aut recusandae et. Magni
                              consectetur nam consequatur. Nesciunt omnis vel
                              debitis eum unde. Tempore et voluptas. Quos
                              voluptatem dolor vero placeat id ex dolorum saepe.
                              Cumque nemo suscipit et hic minima dolor. Magni et
                              modi. Numquam reiciendis consequatur et voluptatem
                              eos qui. Perspiciatis qui deleniti similique alias
                              est. Repudiandae velit quia eligendi rem quia quis
                              sint. Est et delectus in voluptatem et quas.
                              Perferendis dignissimos quaerat molestias
                              laboriosam nemo enim dolorem. <br>
                              Neque qui modi dolores accusamus a saepe ducimus
                              qui. Nesciunt dignissimos impedit quia neque omnis
                              sit qui est et. Accusamus qui dolores. Rerum
                              explicabo voluptas aut voluptatibus corrupti
                              laboriosam quo inventore porro. Non enim non ea
                              consequatur eius ad fugit labore at. Quos sed
                              consequatur dolores dolorem cumque magnam.
                              Voluptatum dolores aut. Provident reiciendis et
                              quibusdam. Qui laborum autem animi asperiores qui
                              maiores. Occaecati occaecati fuga. Quo dicta
                              explicabo voluptatibus ab nulla consequatur
                              suscipit animi et. Corrupti voluptatum
                              distinctio. <br>
                              Numquam id nesciunt nesciunt
                              repudiandae iusto ut. Et quaerat recusandae
                              dolores iusto est aut recusandae et. Magni
                              consectetur nam consequatur. Nesciunt omnis vel
                              debitis eum unde. Tempore et voluptas. Quos
                              voluptatem dolor vero placeat id ex dolorum saepe.
                              Cumque nemo suscipit et hic minima dolor. Magni et
                              modi. Numquam reiciendis consequatur et voluptatem
                              eos qui. Perspiciatis qui deleniti similique alias
                              est. Repudiandae velit quia eligendi rem quia quis
                              sint. Est et delectus in voluptatem et quas.
                              Perferendis dignissimos quaerat molestias
                              laboriosam nemo enim dolorem.
            </div>
            <div class="my-3 text-caption align-right">
              <a
                target="_blank"
                :href="`https://sepolia.etherscan.io/token/${contractAddress}?a=${TokenId}#inventory`"
                >More information...</a
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import{contract} from "../Web3/Web3"
export default {
  data() {
    return {
      cert:[]
    }
  },
  computed: {
    TokenId() {
      console.log(this);
      return this.$route.params.tokenId;
    },
    contractAddress(){
      return contract.options.address
    },
  },
  methods: {
    async getCert(tokenId){
      this.cert= await contract.methods.getCertificate(tokenId).call()
      console.log(this.cert)
    }
  },
  beforeMount(){
    this.getCert(this.TokenId)
  }
};
</script>

<style lang="scss" scoped></style>
