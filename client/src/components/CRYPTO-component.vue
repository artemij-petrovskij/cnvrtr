<template>
  <v-container fluid>
    <v-card elevation="0" class="mx-auto" max-width="400">
      <v-text-field
        type="input"
        placeholder="BTC"
        inputmode="numeric"
        @input="convertBTC"
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
        type="input"
        placeholder="USD"
        inputmode="numeric"
        @input="convertUSD"
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
    convertBTC: function () {
      this.input.USD = this.formatUSD(
        this.ifNaN(this.input.BTC) * this.currency.BTC
      );
    },
    convertUSD: function () {
      this.input.BTC = this.formatBTC(
        this.ifNaN(this.input.USD) / this.currency.BTC
      );
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
      return e
        .replace(",", ".")
        .replace(/[^\d.]/g, "")
        .replace(/\./, "x")
        .replace(/\./g, "")
        .replace(/x/, ".");
    },
    formatUSD: function (e) {
      return e
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
    formatBTC: function (e) {
      return e
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
