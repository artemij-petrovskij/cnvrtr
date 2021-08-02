<template>
  <el-form
    style="
      max-width: 400px;
      position: relative;
      margin: 0px auto;
      padding: 10px;
    "
    label-width="60px"
  >
    <h2>Курс ЦБР</h2>
    <!-- item -->
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"
        />
      </span>

      <el-input
        type="tel"
        name="text"
        v-model="result.RUB"
        @input="currencyRUB"
        clearable
      >
        <template slot="append">RUB</template>
      </el-input>
    </el-form-item>
    <!-- item -->

    <!-- item -->
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"
        />
      </span>

      <el-input
        type="tel"
        name="text"
        v-model="result.USD"
        @input="currencyUSD"
        clearable
      >
        <template slot="append">USD</template>
      </el-input>
    </el-form-item>
    <!-- item -->

    <!-- item -->
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"
        />
      </span>

      <el-input
        type="tel"
        name="text"
        v-model="result.EUR"
        @input="currencyEUR"
        clearable
      >
        <template slot="append">EUR</template>
      </el-input>
    </el-form-item>
    <!-- item -->
    <!-- item  -->
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"
        />
      </span>

      <el-input
        type="tel"
        name="text"
        v-model="result.BYN"
        @input="currencyBYN"
        clearable
      >
        <template slot="append">BYN</template>
      </el-input>
    </el-form-item>
    <!--  item -->
    <!-- item -->
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"
        />
      </span>

      <el-input
        type="tel"
        name="text"
        v-model="result.PLN"
        @input="currencyPLN"
        clearable
      >
        <template slot="append">PLN</template>
      </el-input>
    </el-form-item>
    <!-- item -->
    <el-button type="danger" @click="clearFields" round>Очистить</el-button>
  </el-form>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      currency: {
        USD: "",
        EUR: "",
        RUB: "",
        PLN: "",
        BYN: "",
      },
      result: {
        BYN: "",
        USD: "",
        EUR: "",
        RUB: "",
        PLN: "",
      },
    };
  },
  async created() {
    const currencies = await CurrencyService.fetchCurrency('CRB');

    this.currency.USD = currencies.rates.USD;
    this.currency.EUR = currencies.rates.EUR;
    this.currency.BYN = currencies.rates.BYN;
    this.currency.PLN = currencies.rates.PLN;
  },

  methods: {
    currencyRUB: function () {
      this.result.RUB = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(this.result.RUB * this.currency.BYN);
      this.result.USD = this.formatNumber(this.result.RUB * this.currency.USD);
      this.result.EUR = this.formatNumber(this.result.RUB * this.currency.EUR);
      this.result.PLN = this.formatNumber(this.result.RUB * this.currency.PLN);
    },

    currencyUSD: function () {
      this.result.USD = event.target.value = this.ifNaN(event.target.value);
      this.result.RUB = this.formatNumber(this.result.USD / this.currency.USD);
      this.result.EUR = this.formatNumber(
        this.result.USD * (this.currency.EUR / this.currency.USD)
      );
      this.result.BYN = this.formatNumber(
        this.result.USD * (this.currency.BYN / this.currency.USD)
      );
      this.result.PLN = this.formatNumber(
        this.result.USD * (this.currency.PLN / this.currency.USD)
      );
    },
    currencyEUR: function () {
      this.result.EUR = event.target.value = this.ifNaN(event.target.value);

      this.result.RUB = this.formatNumber(this.result.EUR / this.currency.EUR);
      this.result.USD = this.formatNumber(
        this.result.EUR * (this.currency.USD / this.currency.EUR)
      );
      this.result.BYN = this.formatNumber(
        this.result.EUR * (this.currency.BYN / this.currency.EUR)
      );
      this.result.PLN = this.formatNumber(
        this.result.EUR * (this.currency.PLN / this.currency.EUR)
      );
    },
    currencyBYN: function () {
      this.result.BYN = event.target.value = this.ifNaN(event.target.value);

      this.result.RUB = this.formatNumber(this.result.BYN / this.currency.BYN);
      this.result.USD = this.formatNumber(
        this.result.BYN * (this.currency.USD / this.currency.BYN)
      );
      this.result.EUR = this.formatNumber(
        this.result.BYN * (this.currency.EUR / this.currency.BYN)
      );
      this.result.PLN = this.formatNumber(
        this.result.BYN * (this.currency.PLN / this.currency.BYN)
      );
    },
    currencyPLN: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);

      this.result.RUB = this.formatNumber(this.result.PLN / this.currency.PLN);

      this.result.USD = this.formatNumber(
        this.result.PLN * (this.currency.USD / this.currency.PLN)
      );
      this.result.EUR = this.formatNumber(
        this.result.PLN * (this.currency.EUR / this.currency.PLN)
      );
      this.result.BYN = this.formatNumber(
        this.result.PLN * (this.currency.BYN / this.currency.PLN)
      );
    },
    clearFields: function () {
      this.result.BYN = "";
      this.result.USD = "";
      this.result.EUR = "";
      this.result.RUB = "";
      this.result.PLN = "";
    },
    formatNumber: function (value) {
      return parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
        .replace(".", ".");
    },
    ifNaN(e) {
      return e
        .replace(",", ".")
        .replace(/[^\d.]/g, "")
        .replace(/\./, "x")
        .replace(/\./g, "")
        .replace(/x/, ".");
    },
  },
};
</script>

