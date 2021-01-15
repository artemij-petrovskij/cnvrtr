<template>
  <el-form
    v-loading="loading"
    v-show="visible"
    element-loading-background="rgba(255, 255, 255)"
    style="
      max-width: 500px;
      position: relative;
      margin: 0px auto;
      padding: 10px;
    "
    label-width="60px"
  >
    <h2>
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="https://www.dhresource.com/0x0/f2/albu/g9/M00/27/85/rBVaVVxO822ACwv4AALYau1h4a8355.jpg/500pcs-30mm-diameter-bitcoin-logo-label-sticker.jpg"
        />
      </span>
      Bitcoin {{ actual_course_BTC }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Bitcoin')"
      ></el-link>
    </h2>

    <h2>
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="https://totalcoin.io/uploads/coins/big/eth.png"
        />
      </span>
      Etherium {{ actual_course_ETH }}$
      <el-link
        icon="el-icon-copy-document"
        @click="copyRate('Etherium')"
      ></el-link>
    </h2>

    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag btc-logo"
          src="https://www.dhresource.com/0x0/f2/albu/g9/M00/27/85/rBVaVVxO822ACwv4AALYau1h4a8355.jpg/500pcs-30mm-diameter-bitcoin-logo-label-sticker.jpg"
        />
      </span>
      <el-input
        placeholder="BTC"
        @input="convertBTC"
        v-model="fields.BTC"
        clearable
      >
        <template slot="append">BTC</template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"
        />
      </span>
      <el-input
        placeholder="USD"
        @input="convertUSD"
        v-model="fields.USD"
        clearable
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
      loading: true,
      visible: false,
      actual_course_BTC: "",
      actual_course_ETH: "",
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
    this.fetchCurrencyETH();
  },
  created() {
    this.refreshСurrencies();
  },

  methods: {
    convertBTC() {
      this.fields.BTC = event.target.value = this.ifNaN(event.target.value);
      this.fields.USD = this.fields.BTC * this.currency.BTC;
    },
    convertUSD() {
      this.fields.USD = event.target.value = this.ifNaN(event.target.value);
      this.fields.BTC = this.fields.USD / this.currency.BTC;
    },

    async fetchCurrencyBTC() {
      let currencies = await CurrencyService.getBTCCurrency();
      this.currency.BTC = currencies.USD.last;
      this.actual_course_BTC = this.formatNumber(currencies.USD.last);
    },

    async fetchCurrencyETH() {
      let currencies = await CurrencyService.getETHCurrency();
      this.currency.ETH = currencies.USD;
      this.actual_course_ETH = this.formatNumber(this.currency.ETH);
      this.visible = true;
      this.loading = false;
    },

    refreshСurrencies() {
      setInterval(() => {
        this.fetchCurrencyBTC();
        this.fetchCurrencyETH();
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
    formatNumber: function (value) {
      return parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
    copyRate(name) {
      var el = document.createElement("textarea");
      if (name == "Bitcoin") {
        el.value = `${name} ${this.actual_course_BTC}$`;
      } else if (name == "Etherium") {
        el.value = `${name} ${this.actual_course_ETH}$`;
      } else {
        null
      }

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


