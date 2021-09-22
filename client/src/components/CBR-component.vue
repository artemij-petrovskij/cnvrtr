<template>
  <v-container fluid>
    <v-card elevation="0" class="mx-auto" max-width="400">
      <h2>Exchange ЦБР</h2>

      <v-text-field
        type="tel"
        name="text"
        v-model="result.RUB"
        @input="currencyRUB"
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
        v-model="result.USD"
        @input="currencyUSD"
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
        v-model="result.BYN"
        @input="currencyBYN"
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
        v-model="result.PLN"
        @input="currencyPLN"
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
    </v-card>
  </v-container>
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
    const currencies = await CurrencyService.fetchCurrency("/CRB");

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

