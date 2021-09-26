<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row class="align-items-center justify-content-center" style="min-height: 100vh; background-color:#EFC9AF">
      <mdb-col col="4">
      <mdb-card v-if="showQuestionOne" class="card-body">
        <mdb-card-title>States Quiz</mdb-card-title>
        <mdb-card-text>
          <mdb-row class="justify-content-center">
            <mdb-col col="12">
              <p>The capital of Minnesota is St. Paul</p>
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col col="6">
              <mdb-btn @click.native="showCorrect = true" color="primary">TRUE</mdb-btn>
            </mdb-col>
            <mdb-col col="6">
              <mdb-btn @click.native="showWrong = true" color="primary">FALSE</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-card-text>
      </mdb-card>
        <mdb-card v-if="showQuestionTwo" class="card-body">
          <mdb-card-title>States Quiz</mdb-card-title>
          <mdb-card-text>
            <mdb-row class="justify-content-center">
              <mdb-col col="12">
                <p>The capital of Wyoming is Helena</p>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col col="6">
                <mdb-btn @click.native="showWrong = true" color="primary">TRUE</mdb-btn>
              </mdb-col>
              <mdb-col col="6">
                <mdb-btn @click.native="showCorrect = true" color="primary">FALSE</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-card-text>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-modal :show="showCorrect" @close="showNextQuestion" success>
      <mdb-modal-header>
        <mdb-modal-title>Correct Answer</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body><mdb-btn color="success">Correct!</mdb-btn></mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="success" @click.native="showNextQuestion">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal :show="showWrong" @close="showWrong = false" danger>
      <mdb-modal-header>
        <mdb-modal-title>Wrong Answer</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body><mdb-btn color="danger">Nope!</mdb-btn></mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="danger" @click.native="showWrong = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>

export default {
  name: "TrainingSession",
  data() {
    return {
      showQuestionOne: true,
      showQuestionTwo: false,
      showWrong: false,
      showCorrect: false,
    };
  },
  methods: {
    showNextQuestion() {
      this.showCorrect = false;
      this.showQuestionOne = false;
      this.showQuestionTwo = true;
    }
  }
}
</script>

<style scoped>

</style>