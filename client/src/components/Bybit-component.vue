<template>
  <div>
    <v-data-table
      height="100%"
      :headers="headers"
      fixed-headers
      :hide-default-footer="true"
      :items="allCryptoTickers"
      :items-per-page="-1"
      dark
    ></v-data-table>
  </div>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      allCryptoTickers: [],
      headers: [
        { text: "Index", align: "start", value: "symbol" },
        { text: "Last price", value: "last_price" },
        { text: "Market", value: "mark_price" },
        { text: "Volume", value: "total_volume" },
        { text: "Funding", value: "funding_rate" },
        { text: "Predicted", value: "predicted_funding_rate" },
           { text: "Predicted", value: `predicted_funding_rate` },
      ],

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

  watch: {
    currentValue: function () {
      this.getPrice();
    },
  },

  methods: {
    async fetchIndexTickers() {
      const globalArray = await CurrencyService.fetchCurrency(
        "/bybit-index-tickers"
      );
      this.allCryptoTickers = await globalArray;
      console.log(this.allCryptoTickers);
      //   const assetArray = this.allCryptoTickers.map(
      //     (item) => item.instId.split("-")[0]
      //   );
      //   console.log(assetArray)
      //   this.assetArray = assetArray;
      //   this.getPrice();
    },

    getPrice: function () {
      const currentPrice = this.allCryptoTickers.find(
        (item) => item.instId == `${this.selectedAsset}-USDT`
      );
      this.currentAssetPrice = currentPrice.idxPx;
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchIndexTickers();
      }, 2000);
    },
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
</style>
