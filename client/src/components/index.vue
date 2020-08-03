<template>
  <el-container>
    <el-header>
      <h1>CNVRTR</h1>
    </el-header>
    <el-main>
      <el-form
        style="max-width: 400px;position: relative;margin:0px auto;padding:10px;"
        label-width="60px"
      >
        <!-- item  -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"
            />
          </span>

          <el-input type="tel" name="text" v-model="result.BLR" @input="currencyBLR" clearable>
            <template slot="append">BLR</template>
          </el-input>
        </el-form-item>
        <!--  item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"
            />
          </span>

          <el-input type="tel" name="text" v-model="result.USD" @input="currencyUSD" clearable>
            <template slot="append">USD</template>
          </el-input>
        </el-form-item>
        <!-- item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"
            />
          </span>

          <el-input type="tel" name="text" v-model="result.EUR" @input="currencyEUR" clearable>
            <template slot="append">EUR</template>
          </el-input>
        </el-form-item>
        <!-- item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"
            />
          </span>

          <el-input type="tel" name="text" v-model="result.RUB" @input="currencyRUB" clearable>
            <template slot="append">RUB</template>
          </el-input>
        </el-form-item>
        <!-- item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"
            />
          </span>

          <el-input type="tel" name="text" v-model="result.PLN" @input="currencyPLN" clearable>
            <template slot="append">PLN</template>
          </el-input>
        </el-form-item>
        <el-button type="danger" @click="clearFields" round>Очистить</el-button>
        <!-- item -->
      </el-form>
    </el-main>
  </el-container>
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
      },
      result: {
        BLR: "",
        USD: "",
        EUR: "",
        RUB: "",
        PLN: "",
      },
    };
  },
  async created() {
    const currencies = await CurrencyService.getCurrency();

    this.currency.USD = currencies[4].Cur_OfficialRate;
    this.currency.EUR = currencies[5].Cur_OfficialRate;
    this.currency.RUB = currencies[16].Cur_OfficialRate;
    this.currency.PLN = currencies[6].Cur_OfficialRate;
  },

  methods: {
    currencyBLR: function () {
      this.result.BLR = event.target.value = this.ifNaN(event.target.value);
      this.result.USD = this.formatNumber(this.result.BLR / this.currency.USD);
      this.result.EUR = this.formatNumber(this.result.BLR / this.currency.EUR);
      this.result.RUB = this.formatNumber(
        (this.result.BLR / this.currency.RUB) * 100
      );
      this.result.PLN = this.formatNumber(
        (this.result.BLR / this.currency.PLN) * 10
      );
    },
    currencyUSD: function () {
      this.result.USD = event.target.value = this.ifNaN(event.target.value);
      this.result.BLR = this.formatNumber(this.result.USD * this.currency.USD);
      this.result.EUR = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.EUR)
      );
      this.result.RUB = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.RUB) * 100
      );
      this.result.PLN = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.PLN) * 10
      );
    },
    currencyEUR: function () {
      this.result.EUR = event.target.value = this.ifNaN(event.target.value);
      this.result.BLR = this.formatNumber(this.result.EUR * this.currency.EUR);
      this.result.USD = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.USD)
      );
      this.result.RUB = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.RUB) * 100
      );
      this.result.PLN = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.PLN) * 10
      );
    },
    currencyRUB: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);
      this.result.BLR = this.formatNumber(
        (this.result.PLN * this.currency.RUB) / 100
      );
      this.result.USD = this.formatNumber(
        this.result.PLN * (this.currency.RUB / this.currency.USD / 100)
      );
      this.result.EUR = this.formatNumber(
        this.result.PLN * (this.currency.RUB / this.currency.EUR / 100)
      );
      this.result.PLN = this.formatNumber(
        this.result.PLN * ((this.currency.RUB / this.currency.PLN / 100) * 10)
      );
    },
    currencyPLN: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);
      this.result.BLR = (this.result.PLN * this.currency.PLN) / 10;
      this.result.USD = this.formatNumber(
        this.result.PLN * (this.currency.PLN / this.currency.USD / 10)
      );
      this.result.EUR = this.formatNumber(
        this.result.PLN * (this.currency.PLN / this.currency.EUR / 10)
      );
      this.result.RUB = this.formatNumber(
        this.result.PLN * ((this.currency.PLN / this.currency.RUB) * 10)
      );
    },
    clearFields: function () {
      this.result.BLR = "";
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body,
html {
  font-family: "Assistant", sans-serif;
  margin: 0;
  padding: 0;
}
.el-header {
  text-align: center;
}
h1 {
  text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}
img {
  margin-top: 10px;
  margin-right: 10px;
  max-height: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
div.el-input-group__append {
  width: 30px !important;
  font-size: 15px;
}
.el-button {
  width: 100%;
}
input {
  outline: none;
}
input:focus {
  outline: 0;
}
</style>
