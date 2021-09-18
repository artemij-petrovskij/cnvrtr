<template>
  <v-container fluid>
    <v-card elevation="0" class="mx-auto" max-width="400">
      <v-text-field
        type="tel"
        placeholder="BTC"
        @input="convertBTC($event.target.value)"
        v-model="input.BTC"
      >
        <template slot="prepend">
          <v-img
            height="30"
            width="30"
            class="logo"
            cleareble
            src="@/assets/images/crypto-icons/BTC-USDT.png"
          />
        </template>
        <template slot="append">BTC</template>
      </v-text-field>

      <v-text-field
        type="tel"
        placeholder="USD"
        @input="convertUSD($event.target.value)"
        v-model="input.USD"
      >
        <template slot="prepend">
          <v-img
            height="30"
            width="30"
            class="logo"
            src="@/assets/images/crypto-icons/tether.webp"
          />
        </template>
        <template slot="append">USD</template>
      </v-text-field>
    </v-card>
  </v-container>
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
      input: {
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
    // BTC: function () {
    //   this.USD = this.BTC * this.currency.BTC;
    // },
    // USD: function () {
    //   this.BTC = this.USD / this.currency.BTC;
    // },
    convertBTC(val) {
     
      this.input.USD = val;
    },
    convertUSD() {
      this.input.USD = event.target.value = this.ifNaN(event.target.value);
      this.input.BTC = this.formatBTC(this.input.USD / this.currency.BTC);
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

    ifNaN: function (e) {
      return e
        .replace(",", ".")
        .replace(/[^\d]/g, "")
        .replace(/\./, "x")
        .replace(/\./g, "")
        .replace(/x/, ".");
    },
    formatUSD: function (e) {
      return parseFloat(e)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
    formatBTC: function (e) {
      return parseFloat(e)
        .toFixed(7)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
  },
};
</script>
<style scoped>
.logo {
  margin-right: 1rem;
}
</style>
