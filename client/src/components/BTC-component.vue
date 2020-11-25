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
    <el-form class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="BTC" @input="convertBTC" v-model="fields.BTC">
          <template slot="append">BTC</template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="USD" @input="convertUSD" v-model="fields.USD">
          <template slot="append">USD</template>
        </el-input>
      </el-form-item>
   
    </el-form>
  </el-card>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      currency: {
        BTC: 0,
      },
      fields:{
        BTC:"",
        USD:""
      }
    };
  },
  mounted() {
    this.fetchCurrencyBTC();
  },
  created() {
    this.refreshCurrencyBTC();
  },

  methods: {
    convertBTC() {
      this.fields.BTC = event.target.value = this.ifNaN(event.target.value);
      this.fields.USD = this.fields.BTC * this.currency.BTC
    },
    convertUSD() {
       this.fields.USD = event.target.value = this.ifNaN(event.target.value);
       this.fields.BTC = this.fields.USD / this.currency.BTC
    },
    /*
    async fromUSDtoBTC() {
      let response = await CurrencyService.fromUSDtoBTC({
        value: this.USDtoBTC,
      });
      this.USDinBTC = response;
    },
    */
  

    async fetchCurrencyBTC() {
      let currencies = await CurrencyService.getBTCCurrency();
      this.currency.BTC = currencies.USD.last;
    },
    refreshCurrencyBTC() {
      setInterval(() => {
        this.fetchCurrencyBTC();
      }, 5000);
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


