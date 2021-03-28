<template>
  <el-form
    v-loading="loading"
    v-show="visible"
    element-loading-background="transparent"
    style="
      max-width: 500px;
      position: relative;
      margin: 0px auto;
      padding: 10px;
    "
    label-width="60px"
  >

    <div class="index">
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="@/assets/images/crypto-icons/bitcoin.png"
        />
      </span>
      BTC {{ formatted_price_BTC }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Bitcoin', formatted_price_BTC)"
      ></el-link>
    </div>
    <el-divider></el-divider>
    <div class="index">
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="@/assets/images/crypto-icons/ethereum.png"
        />
      </span>
      ETH {{ formatted_price_ETH }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Etherium', formatted_price_ETH)"
      ></el-link>
    </div>
    <el-divider></el-divider>
    <div class="index">
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="@/assets/images/crypto-icons/cardano.png"
        />
      </span>
      ADA {{ formatted_price_ADA }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Cardano', formatted_price_ADA)"
      ></el-link>
    </div>
    <el-divider></el-divider>
    <div class="index">
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="@/assets/images/crypto-icons/polkadot.png"
        />
      </span>
      DOT {{ formatted_price_DOT }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Polkadot', formatted_price_DOT)"
      ></el-link>
    </div>
    <el-divider></el-divider>
    <div class="index">
      <span slot="label" class="label">
        <img class="flag btc-logo" src="@/assets/images/crypto-icons/xrp.png" />
      </span>
      XRP {{ formatted_price_XRP }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('XRP', formatted_price_XRP)"
      ></el-link>
    </div>
    <el-divider></el-divider>
  </el-form>
</template>

<script>

import CurrencyService from "../CurrencyService";


export default {

  data() {
    return {
           
      loading: true,
      visible: false,
      formatted_price_BTC: "",
      formatted_price_ETH: "",
      formatted_price_ADA: "",
      formatted_price_DOT: "",
      formatted_price_XRP: "",
      currency: {
        BTC: 0,
        ETH: 0,
        ADA: 0,
      },
      fields: {
        BTC: "",
        USD: "",
      },
    };
  },

  mounted() {
      
    this.fetchCurrencyBTC();
    this.fetchCurrencyETH();
    this.fetchCurrencyADA();
    this.fetchCurrencyDOT();
    this.fetchCurrencyXRP();
  },
  created() {
    this.refreshСurrencies();
  },

  methods: {
    convertBTC() {
      this.fields.BTC = event.target.value = this.ifNaN(event.target.value);
      this.fields.USD = this.fields.BTC * this.currency.BTC;
    },
    convertUSD() {
      this.fields.USD = event.target.value = this.ifNaN(event.target.value);
      this.fields.BTC = this.fields.USD / this.currency.BTC;
    },

    async fetchCurrencyBTC() {
      let btcPrice = await CurrencyService.getBTCCurrency();
      this.currency.BTC = btcPrice;
      this.formatted_price_BTC = this.formatNumber(this.currency.BTC);
    },

    async fetchCurrencyETH() {
      let ethPrice = await CurrencyService.getETHCurrency();
      this.currency.ETH = ethPrice;
      this.formatted_price_ETH = this.formatNumber(this.currency.ETH);
    },

    async fetchCurrencyADA() {
      let adaPrice = await CurrencyService.getADACurrency();
      this.formatted_price_ADA = this.formatNumber(adaPrice);
    },

    async fetchCurrencyDOT() {
      let dotPrice = await CurrencyService.getDOTCurrency();
      this.formatted_price_DOT = this.formatNumber(dotPrice);
    },

    async fetchCurrencyXRP() {
      let dotPrice = await CurrencyService.getXRPCurrency();
      this.formatted_price_XRP = this.formatNumber(dotPrice);
      this.visible = true;
      this.loading = false;
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchCurrencyBTC();
        this.fetchCurrencyETH();
        this.fetchCurrencyADA();
        this.fetchCurrencyDOT();
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
    formatNumber: function (value) {
      return parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
    copyRate(name, price) {
      var el = document.createElement("textarea");

      el.value = `${name} ${price}$`;

      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      this.$message({
        message: `Скопировано ${el.value}`,
        type: "success",
      });
    },
  },
};
</script>


