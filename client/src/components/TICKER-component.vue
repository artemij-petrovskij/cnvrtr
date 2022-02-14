<template>
  <v-container fluid>
    <v-img
      contain
      style="margin-left: auto; margin-right: auto"
      max-height="100%"
      max-width="400px"
      src="https://alternative.me/crypto/fear-and-greed-index.png"
    ></v-img>
    <div class="index" v-for="value in favoritesArray" :key="value.asset">
      <v-card class="mx-auto" max-width="400" outlined>
        <v-list-item two-line>
          <v-list-item-avatar tile size="40">
            <v-img
              :src="require(`../assets/images/crypto-icons/${value.asset}.png`)"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle>
              <div v-if="value.valueDifference > 0" class="up-class">
                {{ value.valueDifference }} {{ value.percentDifference }}
              </div>

              <div v-else class="down-class">
                -{{ value.valueDifference }} {{ value.percentDifference }}
              </div></v-list-item-subtitle
            >
            <v-list-item-title class="text-h6 mb-1">
              {{ value.asset }} {{ value.last }}
            </v-list-item-title>
          </v-list-item-content>
          <v-card-actions>
            <v-btn
              @click="copyRate(value.asset, value.last)"
              class="mx-2"
              fab
              x-small
              dark
              color="indigo"
              ><v-icon dark small>content_copy</v-icon></v-btn
            >
          </v-card-actions>
        </v-list-item>
      </v-card>

    </div>

    <v-snackbar v-model="snackbar">
      {{ text }}
    </v-snackbar>
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
        "LTC-USDT",
        "BCH-USDT",
        "DASH-USDT",
        "ADA-USDT",
        "XRP-USDT",
      ],
      crypto: {},
      snackbar: false,
      text: "",
      fngIndex: {
        // name:'',
        // data:[]
      },
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
        "/okex-index-tickers"
      );
      this.creatingFavoritesArray();

      const fearAndGreedIndex = await CurrencyService.fng();
      this.fngIndex = fearAndGreedIndex;
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
      this.snackbar = true;
      this.text = `Скопировано ${el.value}`;
    },
  },
};
</script>
<style scoped>
* {
  text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}
.text-overline {
  font-weight: bold !important;
  font-size: 1.4rem;
}
.up-class {
  color: green;
  text-align: left;
}
.down-class {
  color: red;
  text-align: left;
}
.v-list-item-title {
  text-align: left;
}

.v-list-item__title {
  text-align: left;
}
.v-card {
  margin: 10px;
}
.container {
  height: 100vh; 
}
</style>