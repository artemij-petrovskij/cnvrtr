<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-form
        style="max-width: 400px;position: relative;margin:0px auto;padding:20px;"
        label-width="150px"
      >
        <!-- item  -->
        <el-form-item>
          <p>{{currency.USD}}</p>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"
            />BLR
          </span>

          <el-input name="text" v-model="valBLR"></el-input>
        </el-form-item>
        <!--  item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"
            />USD
          </span>

          <el-input name="text" v-model="result.USD" @input="currencyUSD"></el-input>
        </el-form-item>
        <!-- item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"
            />EUR
          </span>

          <el-input name="text" v-model="result.EUR" @input="currencyEUR"></el-input>
        </el-form-item>
        <!-- item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"
            />RUB
          </span>

          <el-input name="text" v-model="result.RUB" @input="currencyRUB"></el-input>
        </el-form-item>
        <!-- item -->

        <!-- item -->
        <el-form-item>
          <span slot="label" class="label">
            <img
              src="https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"
            />PLN
          </span>

          <el-input name="text" v-model="result.PLN" @input="currencyPLN"></el-input>
        </el-form-item>
        <!-- item -->
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import CurrencyService from "../CurrencyService";
export default {
  name: "HelloWorld",
  data() {
    return {
      currency: {
        USD: "",
        EUR: "",
        RUB: "",
        PLN: "",
      },
      result: {
        USD: "",
        EUR: "",
        RUB: "",
        PLN: "",
      },
      valBLR:''
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
    currencyUSD: function (e) {
      this.result.BLR = e * this.currency.USD;
      this.result.EUR = e * (this.currency.USD / this.currency.EUR);
      this.result.RUB = e * (this.currency.USD / this.currency.RUB) * 100;
      this.result.PLN = e * (this.currency.USD / this.currency.PLN) * 10;
    },
    currencyEUR: function (e) {
      this.result.BLR = e * this.currency.EUR;
      this.result.USD = e * (this.currency.EUR / this.currency.USD);
      this.result.RUB = e * (this.currency.EUR / this.currency.RUB) * 100;
      this.result.PLN = e * (this.currency.EUR / this.currency.PLN) * 10;
    },
    currencyRUB: function (e) {
      this.result.BLR = (e * this.currency.RUB) / 100;
      this.result.USD = e * (this.currency.RUB / this.currency.USD / 100);
      this.result.EUR = e * (this.currency.RUB / this.currency.EUR / 100);
      this.result.PLN =
        e * ((this.currency.RUB / this.currency.PLN / 100) * 10);
    },
    currencyPLN: function (e) {
      this.result.BLR = (e * this.currency.PLN) / 10;
      this.result.USD = e * (this.currency.PLN / this.currency.USD / 10);
      this.result.EUR = e * (this.currency.PLN / this.currency.EUR / 10);
      this.result.RUB = e * ((this.currency.PLN / this.currency.RUB) * 10);
    },
  },
  watch: {
    valBLR(e) {
      this.result.USD = e / this.currency.USD;
      this.result.EUR = e / this.currency.EUR;
      this.result.RUB = (e / this.currency.RUB) * 100;
      this.result.PLN = (e / this.currency.PLN) * 10;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img {
  margin-top: 10px;
  margin-right: 10px;
  max-height: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
span.label {
  margin-bottom: 15px !important;
}
</style>
