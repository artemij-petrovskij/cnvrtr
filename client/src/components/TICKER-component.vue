<template>
  <el-form element-loading-background="transparent" label-width="60px">
    <div class="index" v-for="value in favoritesArray">
      <h6>
        <div v-if="value.valueDifference > 0" class="up-class">
          {{ value.valueDifference }} {{ value.percentDifference }}
        </div>

        <div v-else class="down-class">
          {{ value.valueDifference }} {{ value.percentDifference }}
        </div>
      </h6>
      <img
        class="flag btc-logo"
        src="@/assets/images/crypto-icons/BTC-USDT.png"
        alt=""
      />
      <span> {{ value.asset }} {{ value.last }} </span>
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate(value.asset, value.last)"
      ></el-link>
    </div>

    <el-divider></el-divider>

    <h4>All CRYPTO</h4>
    <el-table
      :data="
        allCryptoTickers.filter(
          (data) =>
            !search || data.instId.toLowerCase().includes(search.toLowerCase())
        )
      "
      height="250"
      style="width: 100%"
    >
      <el-table-column label="Asset" prop="instId"> </el-table-column>
      <el-table-column label="Last" prop="idxPx"> </el-table-column>

      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
import CurrencyService from "../CurrencyService";

export default {
  data() {
    return {
      search: "",
      allCryptoTickers: [],
      favoritesArray: [],
      favoritesPare: ["BTC-USDT", "ETH-USDT", "ADA-USDT", "OKT-USDT", "OKB"],
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
              image:'@/assets/images/crypto-icons/BTC-USDT.png',
            });
           
          }
        }
       
      }
      this.favoritesArray = indexes;
       console.log(this.favoritesArray[0].image)
  
    },

    async fetchIndexTickers() {
      this.allCryptoTickers = await CurrencyService.getIndexTickers();
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
