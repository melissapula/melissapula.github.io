<template>
<mdb-container>
  <mdb-row class="justify-content-center">
    <mdb-card class="card-body mt-4">
      <mdb-card-title>Calculate</mdb-card-title>
      <mdb-card-body>
        <mdb-row>
          <mdb-col col="3">
            <mdb-input type="number" outline placeholder="First number" v-model="firstNum"></mdb-input>
          </mdb-col>
          <mdb-col col="3">
            <select class="browser-default custom-select mt-4" v-model="operator">
              <option value="">Select Op</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </mdb-col>
          <mdb-col col="3">
            <mdb-input type="number" outline placeholder="Second number" v-model="secondNum"></mdb-input>
          </mdb-col>
          <mdb-col col="3" class="mt-2">
            <mdb-btn color="success" @click.native="calculate">Calculate</mdb-btn>
          </mdb-col>
        </mdb-row>
        <mdb-row>{{firstNum}} {{operator}} {{secondNum}} = {{result}}</mdb-row>
      </mdb-card-body>
    </mdb-card>
  </mdb-row>
</mdb-container>
</template>

<script>
export default {
  name: "verify",
  data() {
    return {
      firstNum: 0,
      secondNum: 0,
      operator: '',
      result: 0
    }
  },
  methods: {
    calculate() {
      if(this.firstNum && this.secondNum && this.operator !== '') {
        switch(this.operator) {
          case "+":
            this.result = parseInt(this.firstNum) + parseInt(this.secondNum);
            break
          case "-":
            this.result = parseInt(this.firstNum) - parseInt(this.secondNum);
            break
          case "*":
            this.result = parseInt(this.firstNum) * parseInt(this.secondNum);
            break
          case "/":
            this.result = parseInt(this.firstNum) / parseInt(this.secondNum);
            break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>