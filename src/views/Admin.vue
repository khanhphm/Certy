<template>
  <v-container>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-card
                    v-bind="attrs"
                    v-on="on"
                    color="success"
                    dark
                    class="mx-4"
                    @click="withdraw()"
                  >
                    <div>
                      <h3 class="text-center">Balance</h3>
                    </div>
                    <v-card-text>
                      <h1 class="text-center">{{ contractBalance }} Eth</h1>
                    </v-card-text>
                  </v-card></template
                >

                <span class="text-caption">Click to withdraw</span>
              </v-tooltip>
            </v-col>
            <v-col cols="6">
              <v-card color="primary" dark class="mx-4">
                <div>
                  <h3 class="text-center">Certs</h3>
                </div>
                <v-card-text>
                  <h1 class="text-center">{{ numOfCert }}</h1>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-6"></v-divider>
          <v-row>
            <v-col>
              <v-app-bar dark dense
                ><h2>Certificate List</h2>
                <v-spacer></v-spacer>
                <v-btn @click="form = true" color="success" dark> Add </v-btn>
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
                            @click="viewCert = cert[4]"
                          ></v-img>
                        </template>
                        <span class="text-caption">
                          Click to view Certificate
                        </span>
                      </v-tooltip>

                      <v-dialog
                        v-model="viewCert"
                        max-width="75%"
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
                            height="400px"
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
                                  'https://ropsten.etherscan.io/token/0x04c8e2935262c4ef5605c22d136ec063cb15e28c?a=' +
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
                              suscipit animi et. Corrupti voluptatum distinctio.
                            </div>
                            <div class="my-3 text-caption align-right">
                              <a
                                target="_blank"
                                :href="`https://ropsten.etherscan.io/token/0x04c8e2935262c4ef5605c22d136ec063cb15e28c?a=${id}#inventory`"
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
                          <v-icon color="success" x-small :disabled="!cert[4]"
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

        <v-dialog width="70%" v-model="form">
          <v-card>
            <v-app-bar dense dark><h3>Cấp chứng chỉ</h3></v-app-bar>
            <v-card-text>
              <v-text-field
                color="dark"
                label="Tên học viên"
                v-model="name"
              ></v-text-field>
              <v-combobox
                v-model="classId"
                :items="classList"
                label="Course"
                color="dark"
                dense
              ></v-combobox>
              <v-text-field
                color="dark"
                label="Địa chỉ ví học viên"
                v-model="ownerAddress"
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
              <v-btn
                text
                @click="submitForm(name, classId, ownerAddress)"
                color="success"
                >Accept</v-btn
              >
              <v-btn text @click="form = !form" color="error">Cancle</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { contract, web3 } from "../Web3/Web3";
import { mapState, mapActions } from "vuex";
//const Moralis = require("moralis");
export default {
  data() {
    return {
      form: false,
      name: "",
      classId: "",
      ownerAddress: "",
      classList: ["A01", "A02", "A03", "A04"],

      Certis: [],
      contractBalance: 0,
      numOfCert: 0,

      viewCert: false,
    };
  },
  computed: {
    ...mapState(["account"]),
  },

  methods: {
    ...mapActions(["getAccount"]),
    submitForm(name, classId, ownerAddress) {
      contract.methods
        .addCertificate(classId, name, ownerAddress)
        .send({ from: this.account })
        .then(() => {
          alert("Tạo chứng chỉ thành công");
          this.getCertificates();
        });
      this.name = "";
      this.classId = "";
      this.ownerAddress = "";
      this.form = false;
    },

    async getCertificates() {
      let Certis = [];
      const numOfCert = await contract.methods.getNextCertificateId().call();
      for (let i = 0; i < numOfCert; i++) {
        const certInfor = await contract.methods.getCertificate(i).call();
        Certis.push(certInfor);
      }
      this.Certis = Certis;
      console.log(this.Certis);
    },
    async getTokenUri(id) {
      return await contract.methods.tokenURI(id).call();
    },
    async getContractBalance() {
      this.contractBalance = web3.utils.fromWei(
        await web3.eth.getBalance(contract.options.address),
        "ether"
      );
    },

    async getNumOfCert() {
      this.numOfCert = await contract.methods.getNextCertificateId().call();
    },
    copy(text) {
      navigator.clipboard.writeText(text);
    },
     withdraw(){
      
      contract.methods.withdraw().send({from:this.account}).then(()=>{
        this.getContractBalance();
      })
    }
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
    window.ethereum.on("accountsChanged", async () => {
      await this.getAccount();
    });
    this.getCertificates();
    this.getContractBalance();
    this.getNumOfCert();

    //update data
    contract.events.allEvents({}, () => {
      this.getCertificates();
      this.getContractBalance();
      this.getNumOfCert();
    });
  },
};
</script>

<style scoped></style>
