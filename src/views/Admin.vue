<template>
  <v-container>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-card color="success" dark class="mx-4">
                <v-card-tile>
                  <h3 class="text-center">Balance</h3>
                </v-card-tile>
                <v-card-text>
                  <h1 class="text-center">{{ contractBalance }} Eth</h1>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card color="primary" dark class="mx-4">
                <v-card-tile>
                  <h3 class="text-center">Certs</h3>
                </v-card-tile>
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
              <v-container class="d-flex flex-wrap">
                <v-card v-for="(cert,id) in Certis" :key="id" class="mx-3">
                  <v-card-title>{{cert[1]}}</v-card-title>
                </v-card>
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
              <v-text-field
                color="dark"
                label="Mã lớp"
                v-model="classId"
              ></v-text-field>
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

      Certis: [],
      contractBalance: 0,
      numOfCert: 0,
    };
  },
  computed: {
    ...mapState(["account"]),
  },

  methods: {
    ...mapActions(["getAccount"]),
    submitForm(name, classId, ownerAddress) {
      contract.methods
        .addCertificate( classId,name, ownerAddress)
        .send({ from: this.account })
        .then(() => {
          alert("Tạo chứng chỉ thành công");
        });
      this.name = "";
      this.classId = "";
      this.ownerAddress = "";
      this.form = false;
    },

    async getCertificates() {
      const numOfCert = await contract.methods.getNextCertificateId().call();
      for (let i = 0; i < numOfCert; i++) {
        const certInfor = await contract.methods.getCertificate(i).call();
        this.Certis.push(certInfor);
      }
      console.log(this.Certis)
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
