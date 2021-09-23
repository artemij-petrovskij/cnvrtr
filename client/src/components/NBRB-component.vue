<template>
  <v-container fluid>
    <v-card elevation="0" class="mx-auto" max-width="400">
      <h2>Exchange NBRB</h2>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.BYN"
        @input="currencyBYN"
        inputmode="numeric"
        clearable
      >
        <template slot="prepend">
          <v-img
            height="25"
            width="40"
            class="logo"
            cleareble
            src="@/assets/images/flags/by.jpg"
          />
        </template>
        <template slot="append">BYN</template>
      </v-text-field>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.USD"
        @input="currencyUSD"
        inputmode="numeric"
        clearable
      >
        <template slot="prepend">
          <v-img
            height="25"
            width="40"
            class="logo"
            cleareble
            src="@/assets/images/flags/us.jpg"
          />
        </template>
        <template slot="append">USD</template>
      </v-text-field>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.EUR"
        @input="currencyEUR"
        inputmode="numeric"
        clearable
      >
        <template slot="prepend">
          <v-img
            height="25"
            width="40"
            class="logo"
            cleareble
            src="@/assets/images/flags/eu.jpg"
          />
        </template>
        <template slot="append">EUR</template>
      </v-text-field>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.RUB"
        @input="currencyRUB"
        inputmode="numeric"
        clearable
      >
        <template slot="prepend">
          <v-img
            height="25"
            width="40"
            class="logo"
            cleareble
            src="@/assets/images/flags/ru.jpg"
          />
        </template>
        <template slot="append">RUB</template>
      </v-text-field>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.PLN"
        @input="currencyPLN"
        inputmode="numeric"
        clearable
      >
        <template slot="prepend">
          <v-img
            height="25"
            width="40"
            class="logo"
            cleareble
            src="@/assets/images/flags/pl.jpg"
          />
        </template>
        <template slot="append">PLN</template>
      </v-text-field>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.UAH"
        @input="currencyUAH"
        inputmode="numeric"
        clearable
      >
        <template slot="prepend">
          <v-img
            height="25"
            width="40"
            class="logo"
            cleareble
            src="@/assets/images/flags/ua.jpg"
          />
        </template>
        <template slot="append">UAH</template>
      </v-text-field>
    </v-card>
  </v-container>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  data() {
    return {
      tenScale: 10,
      hundredScale: 100,
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
    const currencies = await CurrencyService.fetchCurrency("/NBRB");
    this.currency.USD = currencies[5].Cur_OfficialRate;
    this.currency.EUR = currencies[6].Cur_OfficialRate;
    this.currency.RUB = currencies[17].Cur_OfficialRate;
    this.currency.PLN = currencies[7].Cur_OfficialRate;
    this.currency.UAH = currencies[3].Cur_OfficialRate;
  },

  methods: {
    currencyBYN: function () {
      this.result.BYN = event.target.value = this.ifNaN(event.target.value);
      this.result.USD = this.formatNumber(this.result.BYN / this.currency.USD);
      this.result.EUR = this.formatNumber(this.result.BYN / this.currency.EUR);
      this.result.RUB = this.formatNumber(
        (this.result.BYN / this.currency.RUB) * this.hundredScale
      );
      this.result.PLN = this.formatNumber(
        (this.result.BYN / this.currency.PLN) * this.tenScale
      );
      this.result.UAH = this.formatNumber(
        (this.result.BYN / this.currency.UAH) * this.hundredScale
      );
    },
    currencyUSD: function () {
      this.result.USD = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(this.result.USD * this.currency.USD);
      this.result.EUR = this.formatNumber(
        this.result.USD * (this.currency.USD / this.currency.EUR)
      );
      this.result.RUB = this.formatNumber(
        this.result.USD *
          (this.currency.USD / this.currency.RUB) *
          this.hundredScale
      );
      this.result.PLN = this.formatNumber(
        this.result.USD *
          (this.currency.USD / this.currency.PLN) *
          this.tenScale
      );
      this.result.UAH = this.formatNumber(
        this.result.USD *
          (this.currency.USD / this.currency.UAH) *
          this.hundredScale
      );
    },
    currencyEUR: function () {
      this.result.EUR = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(this.result.EUR * this.currency.EUR);
      this.result.USD = this.formatNumber(
        this.result.EUR * (this.currency.EUR / this.currency.USD)
      );
      this.result.RUB = this.formatNumber(
        this.result.EUR *
          (this.currency.EUR / this.currency.RUB) *
          this.hundredScale
      );
      this.result.PLN = this.formatNumber(
        this.result.EUR *
          (this.currency.EUR / this.currency.PLN) *
          this.tenScale
      );
      this.result.UAH = this.formatNumber(
        this.result.EUR *
          (this.currency.EUR / this.currency.UAH) *
          this.hundredScale
      );
    },
    currencyRUB: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(
        (this.result.RUB * this.currency.RUB) / this.hundredScale
      );
      this.result.USD = this.formatNumber(
        this.result.RUB *
          (this.currency.RUB / this.currency.USD / this.hundredScale)
      );
      this.result.EUR = this.formatNumber(
        this.result.RUB *
          (this.currency.RUB / this.currency.EUR / this.hundredScale)
      );
      this.result.PLN = this.formatNumber(
        this.result.RUB *
          ((this.currency.RUB / this.currency.PLN / this.hundredScale) *
            this.tenScale)
      );
      this.result.UAH = this.formatNumber(
        this.result.RUB *
          (this.currency.RUB / this.currency.UAH / this.hundredScale) *
          this.hundredScale
      );
    },
    currencyPLN: function () {
      this.result.PLN = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(
        (this.result.PLN * this.currency.PLN) / this.tenScale
      );
      this.result.USD = this.formatNumber(
        this.result.PLN *
          (this.currency.PLN / this.currency.USD / this.tenScale)
      );
      this.result.EUR = this.formatNumber(
        this.result.PLN *
          (this.currency.PLN / this.currency.EUR / this.tenScale)
      );
      this.result.RUB = this.formatNumber(
        this.result.PLN *
          ((this.currency.PLN / this.currency.RUB) * this.tenScale)
      );
      this.result.UAH = this.formatNumber(
        this.result.PLN *
          ((this.currency.PLN / this.currency.UAH) * this.tenScale)
      );
    },
    currencyUAH: function () {
      this.result.UAH = event.target.value = this.ifNaN(event.target.value);
      this.result.BYN = this.formatNumber(
        (this.result.UAH * this.currency.UAH) / this.hundredScale
      );
      this.result.USD = this.formatNumber(
        this.result.UAH *
          (this.currency.UAH / this.currency.USD / this.hundredScale)
      );
      this.result.EUR = this.formatNumber(
        this.result.UAH *
          (this.currency.UAH / this.currency.EUR / this.hundredScale)
      );
      this.result.RUB = this.formatNumber(
        this.result.UAH * (this.currency.UAH / this.currency.RUB)
      );
      this.result.PLN = this.formatNumber(
        this.result.UAH *
          (this.currency.UAH / this.currency.PLN / this.tenScale)
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
    formatNumber: function (e) {
      if (e) {
        return parseFloat(e)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
          .replace(".", ".");
      }
    },
    ifNaN(e) {
      if (e) {
        return e
          .replace(",", ".")
          .replace(/[^\d.]/g, "")
          .replace(/\./, "x")
          .replace(/\./g, "")
          .replace(/x/, ".");
      }
    },
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
}
.logo{
   box-shadow: 0 0 10px rgba(0,0,0,0.5); 
}
</style>


