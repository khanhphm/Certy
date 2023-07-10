<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card dark>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="4">
                  <div class="text-center mb-2"><h2>Tổng số chứng chỉ</h2></div>
                  <div class="text-center text-h3">{{wallet.length}}</div>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="4">
                  <div class="text-center mb-2"><h2>Chứng chỉ đã nhận</h2></div>
                  <div class="text-center text-h3">{{wallet.length-mintable}}</div>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="4">
                  <div class="text-center mb-2"><h2>Tiền cần nộp</h2></div>
                  <div class="text-center text-h3">{{payable}} Eth</div>
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
          <h3>
            My Certificate
            <v-tooltip  top>
              <template v-slot:activator="{ on, attrs }">
                  <a v-bind="attrs" v-on="on" :href="'https://goerli.etherscan.io//token/'+contractAddress+'?a='+account" target="_blank" rel="noopener noreferrer"><v-icon  color="primary" small>mdi-information</v-icon></a>
                  
              </template>
              <span>Click to view Etherscan</span>
            </v-tooltip>
          </h3>
          <v-btn icon @click="reset()"><v-icon>mdi-reload</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="payable==0" color="success" @click="pay(payable)" dark dense>Nộp tiền</v-btn>
        </v-app-bar>
        <v-container class="d-flex flex-wrap justify-space-around">

          <v-hover v-for="(cert, id) in Certis" :key="id">
                  <template v-slot:default="{ hover }">
                    <v-card
                      width="23%"
                      min-width="200"
                      :class="`elevation-${hover ? 24 : 6}`"
                      class="my-3 transition-swing"
                    >
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            v-on="on"
                            :src="
                              'https://bafybeiht3m4yn2tvqtlsykcqc5s33dlijqaph4i6pfqwmenmvlftfbm4oy.ipfs.nftstorage.link/' +
                                cert[1] +
                                '.png' ||
                              'https://cdn.doctailieu.com/images/2020/05/21/certificate-nghia-la-gi.jpg'
                            "
                            width="100%"
                            @click="cert.view = true"
                          ></v-img>
                        </template>
                        <span class="text-caption">
                          Click to view Certificate
                        </span>
                      </v-tooltip>

                      <v-dialog
                        v-model="cert.view"
                        max-width="65%"
                        transition="dialog-transition"
                        scrollable
                      >
                        <v-card>
                          <v-img
                            :src="
                              'https://bafybeiht3m4yn2tvqtlsykcqc5s33dlijqaph4i6pfqwmenmvlftfbm4oy.ipfs.nftstorage.link/' +
                              cert[1] +
                              '.png'
                            "
                            height="450px"
                          ></v-img>
                          <v-card-title>
                            {{ cert[1] }} Certificate
                          </v-card-title>
                          <v-card-text>
                            <div class="text-overline">
                              Owner:
                              <a
                                target="_blank"
                                :href="
                                  'https://goerli.etherscan.io//token/'+contractAddress+'?a=' +
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
                                :href="`https://goerli.etherscan.io//token/${contractAddress}?a=${id}#inventory`"
                                >More information...</a
                              >
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-dialog>

                      <v-card-text>
                        <div>Course: {{ cert[1] }}</div>
                        <div>
                          <v-tooltip right>
                            <template v-slot:activator="{ on, attrs }">
                              <span
                                v-bind="attrs"
                                v-on="on"
                                @click="copy(cert[2])"
                                >Owner: {{ cert[0] }}</span
                              >
                            </template>
                            <span class="text-caption"
                              >Click to copy address</span
                            >
                          </v-tooltip>
                        </div>
                        <div>
                          Status:
                          <v-icon color="success" x-small :disabled="!cert[3]"
                            >mdi-circle</v-icon
                          >
                        </div>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-hover>
          
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { contract, web3 } from "../Web3/Web3";

export default {
  data() {
    return {
      Certis:[],
      cost:0.02,
      payable:0,
      mintable:0
    };
  },
  computed: {
    ...mapState(["account", "wallet"]),
    contractAddress(){
      return contract.options.address
    },
    
  },
  methods: {
    ...mapActions(["getAccount", "getWallet"]),
    async getMintable(){
      const amount = await contract.methods.mintableCertificatesCount(this.account).call()
      this.payable=amount*this.cost
      this.mintable=amount
    },
    reset(){
      this.getWallet();
      this.getMintable();
      this.getCertificates()
    },
    pay(amount){
      contract.methods.receiveCertificate().send({from:this.account,value:web3.utils.toWei(amount.toString(), 'ether')}).then(()=>{
        alert("đã nộp tiền");
        this.reset()
      }).catch(err=>{
        alert(err.message)
      })
    },

    async getCertificates() {
      let Certis = [];
      this.wallet.forEach(async (i)=>{
        const certInfor = await contract.methods.getCertificate(i).call();
        Certis.push(certInfor);
      }) 
      this.Certis = Certis;
      console.log(this.Certis);
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
    await this.getWallet();
    this.reset()
    this.getMintable()
    window.ethereum.on("accountsChanged", async () => {
      await this.getAccount();
      await this.getWallet();
      this.getCertificates()
      this.getMintable()
      this.reset()
      
    });
    contract.events.allEvents({}, () => {
      this.reset()
    });
    await this.getCertificates()
    this.reset()
  },
};
</script>

<style scoped></style>
