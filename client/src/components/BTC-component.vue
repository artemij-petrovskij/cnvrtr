<template>
  <el-card
    class="box-card"
    shadow="hover"
    style="
      max-width: 400px;
      height: 600px;
      position: relative;
      margin: 0px auto;
      padding: 10px;
      text-align: center;
    "
  >
    <h2>1 BTC = {{ currency.BTC }}$</h2>
    <img
      class="btc"
      src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG35.png"
      alt="BTC-logo"
    />
    <h3>{{ USDinBTC }} BTC</h3>
    <el-form class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="USD to BTC" v-model="USDtoBTC"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fromUSDtoBTC">CONVERT USD IN BTC</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      USDtoBTC: "",
      USDinBTC: "0",
      currency: {
        BTC: "",
      },
    };
  },
  async created() {
    const currencies = await CurrencyService.getBTCCurrency();
    this.currency.BTC = currencies.USD.last;
  },

  methods: {
    async fromUSDtoBTC(){
      let response = await CurrencyService.fromUSDtoBTC({value:this.USDtoBTC})
      this.USDinBTC = response
    },
    ifNaN(e) {
      return e
        .replace(",", ".")
        .replace(/[^\d.]/g, "")
        .replace(/\./, "x")
        .replace(/\./g, "")
        .replace(/x/, ".");
    },
  },
};
</script>


