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
    <h2>Курс НБРБ</h2>
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
          src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg"
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

    <!-- item -->
    <el-form-item>
      <span slot="label" class="label">
        <img
          class="flag"
          src="https://www.megaflag.ru/sites/default/files/styles/galleryformatter_slide/public/images/shop/products/flag_ukraina_new.jpg"
        />
      </span>

      <el-input
        type="tel"
        name="text"
        v-model="result.UAH"
        @input="currencyUAH"
        clearable
      >
        <template slot="append">UAH</template>
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
        UAH: "",
      },
      result: {
        BYN: "",
        USD: "",
        EUR: "",
        RUB: "",
        PLN: "",
        UAH: "",
      },
    };
  },
  async created() {
    const currencies = await CurrencyService.getNBRBCurrency();
    this.currency.USD = currencies[4].Cur_OfficialRate;
    this.currency.EUR = currencies[5].Cur_OfficialRate;
    this.currency.RUB = currencies[16].Cur_OfficialRate;
    this.currency.PLN = currencies[6].Cur_OfficialRate;
    this.currency.UAH = currencies[2].Cur_OfficialRate;
  },

  methods: {
    currencyBYN: function () {
      this.result.BYN = event.target.value = this.ifNaN(event.target.value);
      this.result.USD = this.formatNumber(this.result.BYN / this.currency.USD);
      this.result.EUR = this.formatNumber(this.result.BYN / this.currency.EUR);
      this.result.RUB = this.formatNumber(
        (this.result.BYN / this.currency.RUB) * 100
      );
      this.result.PLN = this.formatNumber(
        (this.result.BYN / this.currency.PLN) * 10
      );
      this.result.UAH = this.formatNumber(
        (this.result.BYN / this.currency.UAH) * 100
      );
    },
    currencyUSD: function () {
      this.result.USD = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(this.result.USD * this.currency.USD);
      this.result.EUR = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.EUR)
      );
      this.result.RUB = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.RUB) * 100
      );
      this.result.PLN = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.PLN) * 10
      );
      this.result.UAH = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.UAH) * 100
      );
    },
    currencyEUR: function () {
      this.result.EUR = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(this.result.EUR * this.currency.EUR);
      this.result.USD = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.USD)
      );
      this.result.RUB = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.RUB) * 100
      );
      this.result.PLN = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.PLN) * 10
      );
      this.result.UAH = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.UAH) * 100
      );
    },
    currencyRUB: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(
        (this.result.RUB * this.currency.RUB) / 100
      );
      this.result.USD = this.formatNumber(
        this.result.RUB * (this.currency.RUB / this.currency.USD / 100)
      );
      this.result.EUR = this.formatNumber(
        this.result.RUB * (this.currency.RUB / this.currency.EUR / 100)
      );
      this.result.PLN = this.formatNumber(
        this.result.RUB * ((this.currency.RUB / this.currency.PLN / 100) * 10)
      );
      this.result.UAH = this.formatNumber(
        this.result.RUB * (this.currency.RUB / this.currency.UAH / 100) * 100
      );
    },
    currencyPLN: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(
        (this.result.PLN * this.currency.PLN) / 10
      );
      this.result.USD = this.formatNumber(
        this.result.PLN * (this.currency.PLN / this.currency.USD / 10)
      );
      this.result.EUR = this.formatNumber(
        this.result.PLN * (this.currency.PLN / this.currency.EUR / 10)
      );
      this.result.RUB = this.formatNumber(
        this.result.PLN * ((this.currency.PLN / this.currency.RUB) * 10)
      );
      this.result.UAH = this.formatNumber(
        this.result.PLN * ((this.currency.PLN / this.currency.UAH) * 10)
      );
    },
    currencyUAH: function () {
      this.result.UAH = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(
        (this.result.UAH * this.currency.UAH) / 100
      );
      this.result.USD = this.formatNumber(
        this.result.UAH * (this.currency.UAH / this.currency.USD / 100)
      );
      this.result.EUR = this.formatNumber(
        this.result.UAH * (this.currency.UAH / this.currency.EUR / 100)
      );
      this.result.RUB = this.formatNumber(
        this.result.UAH * (this.currency.UAH / this.currency.RUB)
      );
      this.result.PLN = this.formatNumber(
        this.result.UAH * (this.currency.UAH / this.currency.PLN / 10)
      );
    },
    clearFields: function () {
      this.result.BYN = "";
      this.result.USD = "";
      this.result.EUR = "";
      this.result.RUB = "";
      this.result.PLN = "";
      this.result.UAH = "";
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


