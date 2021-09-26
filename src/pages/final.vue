<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row class="align-items-center justify-content-center" style="min-height: 100vh; background-color:#EFC9AF">
      <mdb-col>
        <mdb-row class="align-items-center justify-content-center">
      <mdb-input v-model="input" outline type="textarea" rows="5" style="background-color: white" />
          </mdb-row>
        <mdb-row class="align-items-center justify-content-center">
          <mdb-btn color="info" @click.native="verify_count">Verify Count</mdb-btn>
        </mdb-row>
        <mdb-modal :show="showVerify" @close="showVerify = false">
          <mdb-modal-header>
            <mdb-modal-title>Counting</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body><p>You entered: {{input}} </p>
          <p>The number of words provided by the user is: {{total_words}}</p>
            <p>Character count per word is:</p>
          <ul>
            <li v-for="(word, index) of characters_per_word" v-bind:key="index">{{word.word}}: {{word.count}}</li>
          </ul>
            <p>The total number of characters is: {{total_characters}}</p></mdb-modal-body>
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
  name: "Final",
  data() {
    return {
      input: null,
      original: null,
      total_words: null,
      characters_per_word: null,
      total_characters: null,
      showVerify: false,
    };
  },
  methods: {
    verify_count() {
      this.original = this.input.split(' ');
      this.total_characters = 0;
      this.characters_per_word = [];
      this.total_words = this.original.length;
      for(let i = 0; i<this.original.length; i++) {
        let charCount = this.original[i].split('').length;
        this.total_characters += charCount;
        this.characters_per_word.push({word: this.original[i], count: charCount});
      }
      this.showVerify = true;
    }
  }
}
</script>

<style scoped>

</style>