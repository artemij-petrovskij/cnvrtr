<template>
  <el-form
    element-loading-background="transparent"
    style="
      max-width: 500px;
      position: relative;
      margin: 0px auto;
      padding: 10px;
    "
    label-width="60px"
  >
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="@/assets/images/crypto-icons/BTC-USDT.png"
        />
      </span>
      <el-input
        type="tel"
        placeholder="BTC"
        @input="convertBTC"
        v-model="fields.BTC"
        
      >
        <template slot="append">BTC</template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <span slot="label" class="label">
        <img class="flag" src="@/assets/images/flags/flag_usa.jpg" />
      </span>
      <el-input
        type="tel"
        placeholder="USD"
        @input="convertUSD"
        v-model="fields.USD"
        
      >
        <template slot="append">USD</template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      currency: {
        BTC: 0,
        ETH: 0,
      },
      fields: {
        BTC: "",
        USD: "",
      },
    };
  },
  mounted() {
    this.fetchCurrencyBTC();
  },
  created() {
    this.refreshСurrencies();
  },

  methods: {
    convertBTC() {
      this.fields.BTC = event.target.value = this.ifNaN(event.target.value);
      this.fields.USD = this.formatUSD(this.fields.BTC * this.currency.BTC);
    },
    convertUSD() {
      this.fields.USD = event.target.value = this.ifNaN(event.target.value);
      this.fields.BTC = this.formatBTC(this.fields.USD / this.currency.BTC);
    },

    async fetchCurrencyBTC() {
      let btcLastPrice = await CurrencyService.fetchCurrency("/BTC");
      this.currency.BTC = btcLastPrice;
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchCurrencyBTC();
      }, 5000);
    },

    ifNaN(e) {
      if (e) {
        return e
          .replace(",", ".")
          .replace(/[^\d.]/g, "")
          .replace(/\./, "x")
          .replace(/\./g, "")
          .replace(/x/, ".");
      }
    },
    formatUSD: function (e) {
      if (e) {
        return parseFloat(e)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
          .replace(".", ".");
      }
    },
    formatBTC: function (e) {
      if (e) {
        return parseFloat(e)
          .toFixed(7)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
          .replace(".", ".");
      }
    },
  },
};
</script>
