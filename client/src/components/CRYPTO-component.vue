<template>
  <v-container fluid>
    <v-card elevation="0" class="mx-auto" max-width="400">
      <v-row class="teal lighten-5 rounded-lg">
        <v-col cols="12" sm="12">
          <h3>USDT convert</h3>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            dense
            label="Value"
            outlined
            v-model="currentValue"
            inputmode="numeric"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-autocomplete
            dense
            outlined
            clearable
            v-model="selectedAsset"
            :items="assetArray"
            label="Crypto asset"
            @change="getPrice()"
            inputmode="numeric"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" sm="12">
          <h4>
            {{ currentValue }} {{ selectedAsset }} =
            {{ currentAssetPrice * currentValue }} USDT
          </h4>
        </v-col>
      </v-row>

      <v-row class="blue-grey lighten-4 rounded-lg"> </v-row>
    </v-card>
  </v-container>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      allCryptoTickers: [],
      assetArray: [],
      selectedAsset: "BTC",
      currentValue: 1,
      currentAssetPrice: "",
    };
  },
  created() {
    this.fetchIndexTickers();

    this.refreshСurrencies();
  },

  mounted() {
    this.getFirstPrice();
  },
  watch: {
    currentValue: function () {
      this.getPrice();
    },
  },

  methods: {
    async fetchIndexTickers() {
      const globalArray = await CurrencyService.fetchCurrency("/index-tickers");
      this.allCryptoTickers = await globalArray;
      const assetArray = this.allCryptoTickers.map(
        (item) => item.instId.split("-")[0]
      );
      this.assetArray = assetArray;
      this.getPrice();
    },

    getPrice: function () {
      const currentPrice = this.allCryptoTickers.find(
        (item) => item.instId == `${this.selectedAsset}-USDT`
      );
      this.currentAssetPrice = currentPrice.idxPx;
    },

    async getFirstPrice() {
      const res = await CurrencyService.fetchCurrency("/BTC");
      this.currentAssetPrice = res;
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchIndexTickers();
      }, 2000);
    },
    // ifNaN(e) {
    //   return e
    //     .replace(",", ".")
    //     .replace(/[^\d.]/g, "")
    //     .replace(/\./, "x")
    //     .replace(/\./g, "")
    //     .replace(/x/, ".");
    // },
    // formatUSD: function (e) {
    //   return e
    //     .toFixed(2)
    //     .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
    //     .replace(".", ".");
    // },
    // formatBTC: function (e) {
    //   return e
    //     .toFixed(7)
    //     .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
    //     .replace(".", ".");
    // },
  },
};
</script>
<style scoped>
.logo {
  margin-right: 1rem;
}
.v-card {
  padding: 10px;
}
.container {
  height: 100vh;
}
</style>
