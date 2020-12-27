<template>
  <el-form
    style="
      max-width: 500px;
      position: relative;
      margin: 0px auto;
      padding: 10px;
    "
    label-width="60px"
  >
    <h2>
      Bitcoin {{ actual_course }}$<br /><el-link
        icon="el-icon-copy-document"
        @click="copyRate"
        >Копировать</el-link
      >
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
      actual_course: "",
      currency: {
        BTC: 0,
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
    this.refreshCurrencyBTC();
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
      this.actual_course = this.formatNumber(currencies.USD.last);
    },
    refreshCurrencyBTC() {
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
    formatNumber: function (value) {
      return parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
    copyRate() {
      var el = document.createElement("textarea");
      el.value = `Bitcoin ${this.actual_course}$`;
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


