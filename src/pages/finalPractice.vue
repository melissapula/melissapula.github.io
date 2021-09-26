<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row class="align-items-center justify-content-center" style="min-height: 100vh; background-color:#EFC9AF">
      <mdb-col>
        <mdb-row class="align-items-center justify-content-center">
      <div class="form-group">
        <label for="input">Enter a word:</label>
        <input type="text" id="input" class="form-control" v-model="original">
      </div>
          </mdb-row>
    <mdb-row class="align-items-center justify-content-center">
      <mdb-btn color="info" @click.native="verify">Verify</mdb-btn>
    </mdb-row>
        <mdb-modal :show="showVerify" @close="showVerify = false">
          <mdb-modal-header>
            <mdb-modal-title>{{original}}</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body><p>{{original}} is <span v-if="!palindrome">not </span>a Palindrome!</p></mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="showVerify = false">Okay</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
export default {
  name: "FinalPractice",
  data() {
    return {
      original: '',
      backward: '',
      palindrome: false,
      showVerify: false,
    };
  },
  methods: {
    verify() {
      this.backward = this.original.split("").reverse().join("");
      if(this.backward == this.original) {
        this.palindrome = true;
      }
      else {
        this.palindrome = false;
      }
      this.showVerify = true;
    }
  }
}
</script>

<style scoped>

</style>