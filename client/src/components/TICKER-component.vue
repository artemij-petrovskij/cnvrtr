<template>
  <el-form element-loading-background="transparent" label-width="60px">
    <div class="index">
      <h6>
        <span v-if="BTC_USDT.difference_currency > 0" class="up-class">
          {{ BTC_USDT.difference_currency }} + {{ BTC_USDT.difference_percent }}
        </span>

        <span v-else class="down-class">
          {{ BTC_USDT.difference_currency }} {{ BTC_USDT.difference_percent }}
        </span>
      </h6>

      <img
        class="flag btc-logo"
        src="@/assets/images/crypto-icons/bitcoin.png"
      />
      <span> BTC {{ BTC_USDT.last }}$ </span>

      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Bitcoin', BTC_USDT.last)"
      ></el-link>
    </div>

    <el-divider></el-divider>
    <div class="index">
      <h6>
        <span v-if="ETH.difference_currency > 0" class="up-class">
          {{ ETH.difference_currency }} + {{ ETH.difference_percent }}
        </span>

        <span v-else class="down-class">
          {{ ETH.difference_currency }} {{ ETH.difference_percent }}
        </span>
      </h6>

      <img
        class="flag btc-logo"
        src="@/assets/images/crypto-icons/ethereum.png"
      />
      <span> ETH {{ ETH.last }}$ </span>

      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Ethereum', ETH.last)"
      ></el-link>
    </div>

    <el-divider></el-divider>

    <div class="index">
      <h6>
        <div v-if="ADA.difference_currency > 0" class="up-class">
          {{ ADA.difference_currency }} +{{ ADA.difference_percent }}
        </div>

        <div v-else class="down-class">
          {{ ADA.difference_currency }} {{ ADA.difference_percent }}
        </div>
      </h6>
      <img
        class="flag btc-logo"
        src="@/assets/images/crypto-icons/cardano.png"
      />
      <span> ADA {{ ADA.last }}$ </span>
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Cardano', ADA.last)"
      ></el-link>
    </div>

    <el-divider></el-divider>

    <div class="index">
      <h6>
        <div v-if="DOT.difference_currency > 0" class="up-class">
          {{ DOT.difference_currency }} +{{ DOT.difference_percent }}
        </div>

        <div v-else class="down-class">
          {{ DOT.difference_currency }} {{ DOT.difference_percent }}
        </div>
      </h6>
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="@/assets/images/crypto-icons/polkadot.png"
        />
      </span>
      <span> DOT {{ DOT.last }}$ </span>
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Polkadot', DOT.last)"
      ></el-link>
    </div>

    <el-divider></el-divider>

    <div class="index">
      <h6>
        <div v-if="XRP.difference_currency > 0" class="up-class">
          {{ XRP.difference_currency }} +{{ XRP.difference_percent }}
        </div>

        <div v-else class="down-class">
          {{ XRP.difference_currency }} {{ XRP.difference_percent }}
        </div>
      </h6>
      <span slot="label" class="label">
        <img class="flag btc-logo" src="@/assets/images/crypto-icons/xrp.png" />
      </span>
      <span> XRP {{ XRP.last }}$ </span>
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('XRP', XRP.last)"
      ></el-link>
    </div>

    <el-divider></el-divider>

    <h4>All CRYPTO</h4>
    <el-table
      :data="
        links.filter(
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
      links: [],
      crypto: ['BTC'],
      BTC_USDT: {
        pare: "BTC_USDT",
        last: "",
        difference_currency: "",
        difference_percent: "",
      },

      ETH: {
        last: "",
        difference_currency: "",
        difference_percent: "",
      },

      ADA: {
        last: "",
        difference_currency: "",
        difference_percent: "",
      },

      DOT: {
        last: "",
        difference_currency: "",
        difference_percent: "",
      },

      XRP: {
        last: "",
        difference_currency: "",
        difference_percent: "",
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
    calcuDifferenceCurrency(currency) {
      let difference = currency.idxPx - currency.sodUtc0;
      return `${difference.toFixed(2)}`;
    },

    calcPercentСurrency(currency) {
      let difference = currency.idxPx - currency.sodUtc0;
      let percent = (difference / currency.idxPx) * 100;
      return `${percent.toFixed(2)}%`;
    },

    displayBTC(currency) {
      this.BTC_USDT.last = this.formatNumber(currency.idxPx);
      this.BTC_USDT.difference_currency =
        this.calcuDifferenceCurrency(currency);
      this.BTC_USDT.difference_percent = this.calcPercentСurrency(currency);
    },

    // displayETH(currency) {
    //   let ethPrice = await CurrencyService.getETHCurrency();
    //   this.ETH.last = this.formatNumber(ethPrice.last);
    //   this.ETH.difference_currency = this.calcuDifferenceCurrency(ethPrice);
    //   this.ETH.difference_percent = this.calcPercentСurrency(ethPrice);
    // },

    // displayADA(currency) {
    //   let adaPrice = await CurrencyService.getADACurrency();
    //   this.ADA.last = this.formatNumber(adaPrice.last);
    //   this.ADA.difference_currency = this.calcuDifferenceCurrency(adaPrice);
    //   this.ADA.difference_percent = this.calcPercentСurrency(adaPrice);
    // },

    // displayDOT(currency) {
    //   let dotPrice = await CurrencyService.getDOTCurrency();
    //   this.DOT.last = this.formatNumber(dotPrice.last);
    //   this.DOT.difference_currency = this.calcuDifferenceCurrency(dotPrice);
    //   this.DOT.difference_percent = this.calcPercentСurrency(dotPrice);
    // },

    // displayXRP(currency) {
    //   let xrpPrice = await CurrencyService.getXRPCurrency();
    //   this.XRP.last = this.formatNumber(xrpPrice.last);
    //   this.XRP.difference_currency = this.calcuDifferenceCurrency(xrpPrice);
    //   this.XRP.difference_percent = this.calcPercentСurrency(xrpPrice);
    // },

    async fetchIndexTickers() {
      let index_tickers = await CurrencyService.getIndexTickers();
      this.displayBTC(index_tickers[0]);

      this.links = index_tickers;

      for (let i in index_tickers) {
        if (index_tickers[i]["instId"] == "BTC-USDT") {
        }
      }
      //console.log(this.crypto)
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchIndexTickers();
      }, 2000);
    },

    formatNumber: function (value) {
      return parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },

    copyRate(name, price) {
      let el = document.createElement("textarea");
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
