<template>
  <v-container fluid>
    <v-text-field
      type="tel"
      placeholder="BTC"
      @input="convertBTC"
      v-model="fields.BTC"
    >
      <template slot="prepend">
        <v-img
          height="30"
          width="30"
          class="logo"
          src="@/assets/images/crypto-icons/BTC-USDT.png"
        />
      </template>
      <template slot="append">BTC</template>
    </v-text-field>

    <v-text-field
      type="tel"
      placeholder="USD"
      @input="convertUSD"
      v-model="fields.USD"
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
<style scoped>
.container {
  max-width: 550px;
  height: 100vh;
  position: relative;
  margin: 0px auto;
  padding: 10px;
  border-radius: 4px;
}
.logo {
  margin-right: 1rem;
}
</style>
