<template>
  <v-container fluid>
    <div class="index" v-for="value in favoritesArray" :key="value.asset">
      <v-card class="mx-auto" max-width="600" outlined>
        <v-list-item two-line>
          <v-avatar class="ma-3" size="40" tile>
            <v-img
              :src="require(`../assets/images/crypto-icons/${value.asset}.png`)"
            ></v-img>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              <div v-if="value.valueDifference > 0" class="up-class">
                {{ value.valueDifference }} {{ value.percentDifference }}
              </div>

              <div v-else class="down-class">
                {{ value.valueDifference }} {{ value.percentDifference }}
              </div>
            </v-list-item-title>
            <div class="text-overline">{{ value.asset }} {{ value.last }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import CurrencyService from "../CurrencyService";

export default {
  data() {
    return {
      search: "",
      allCryptoTickers: [],
      favoritesArray: [],
      favoritesPare: [
        "BTC-USDT",
        "ETH-USDT",
        "DOT-USDT",
        // "DOGE-USDT"
        "ADA-USDT",
        "XRP-USDT",
      ],
      crypto: {},
    };
  },

  mounted() {
    this.fetchIndexTickers();
  },
  created() {
    this.refreshСurrencies();
  },

  methods: {
    creatingFavoritesArray() {
      const tikers = this.allCryptoTickers;
      const indexes = [];

      for (const value in tikers) {
        for (let index in this.favoritesPare) {
          if (this.favoritesPare[index] === tikers[value]["instId"]) {
            indexes.push({
              asset: tikers[value]["instId"],
              last: `${this.formatNumber(tikers[value]["idxPx"])}$`,
              opening: tikers[value]["sodUtc0"],
              valueDifference: this.calcDifferenceCurrency(tikers[value]),
              percentDifference: this.calcPercentСurrency(tikers[value]),
            });
          }
        }
      }
      this.favoritesArray = indexes;
    },

    async fetchIndexTickers() {
      this.allCryptoTickers = await CurrencyService.fetchCurrency(
        "/index-tickers"
      );
      this.creatingFavoritesArray();
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchIndexTickers();
      }, 2000);
    },

    calcDifferenceCurrency(currency) {
      let difference = currency.idxPx - currency.sodUtc0;
      return `${difference.toFixed(2)}`;
    },

    calcPercentСurrency(currency) {
      let difference = currency.idxPx - currency.sodUtc0;
      let percent = (difference / currency.idxPx) * 100;
      return `${percent.toFixed(2)}%`;
    },

    formatNumber: function (value) {
      return parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },

    copyRate(name, price) {
      let el = document.createElement("textarea");
      el.value = `${name} ${price}`;
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
<style scoped>
* {
  text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}
.text-overline {
  font-weight: bold;
  font-size: 1.4rem;
}
.up-class {
  color: green;
}
.down-class {
  color: red;
}
.container {
  max-width: 550px;
  height: 100vh;
  position: relative;
  margin: 0px auto;
  padding: 10px;
  border-radius: 4px;
}
.v-list-item__content {
  padding-left: 20px;
}
</style>