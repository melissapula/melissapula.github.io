<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row class="align-items-center justify-content-center" style="min-height: 100vh; background-color:#EFC9AF">
      <mdb-col col="4">
        <mdb-card v-if="showQuestionOne" class="card-body">
          <mdb-card-title>This or That?</mdb-card-title>
          <mdb-card-text>
            <mdb-row class="justify-content-center">
              <mdb-col col="12">
                <p>Select what you would like most ...</p>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col col="6">
                <mdb-btn @click.native="showEat = true" color="primary"><img src="../assets/eatSign.jpg" class="img-fluid"></mdb-btn>
              </mdb-col>
              <mdb-col col="6">
                <mdb-btn @click.native="showTravel = true" color="primary"><img src="../assets/travelSign.jpg" class="img-fluid"></mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-card-text>
        </mdb-card>
        <mdb-card v-if="showQuestionTwo" class="card-body">
          <mdb-card-title>This or That?</mdb-card-title>
          <mdb-card-text>
            <mdb-row class="justify-content-center">
              <mdb-col col="12">
                <p>Would you rather be Batman or Spiderman?</p>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col col="6">
                <mdb-btn @click.native="showBatman = true" color="primary"><img src="../assets/batmanLogo.jpg" class="img-fluid"></mdb-btn>
              </mdb-col>
              <mdb-col col="6">
                <mdb-btn @click.native="showSpiderman = true" color="primary"><img src="../assets/spidermanLogo.jpg" class="img-fluid"></mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-card-text>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-modal :show="showEat" @close="showNextQuestion" success>
      <mdb-modal-header>
        <mdb-modal-title>You chose eat!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body><img src="../assets/eat.jpg" class="img-fluid"></mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="success" @click.native="showNextQuestion">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal :show="showTravel" @close="showNextQuestion" success>
      <mdb-modal-header>
        <mdb-modal-title>You chose travel!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body><img src="../assets/travel.jpg" class="img-fluid"></mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="success" @click.native="showNextQuestion">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal :show="showBatman" @close="restartQuestions" success>
      <mdb-modal-header>
        <mdb-modal-title>You chose Batman!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body><img src="../assets/batman.jpg" class="img-fluid"></mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="success" @click.native="restartQuestions">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal :show="showSpiderman" @close="restartQuestions" success>
      <mdb-modal-header>
        <mdb-modal-title>You chose Spiderman!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body><img src="../assets/spiderman.png" class="img-fluid"></mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="success" @click.native="restartQuestions">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
export default {
  name: "Midterm",
  data() {
    return {
      showQuestionOne: true,
      showQuestionTwo: false,
      showEat: false,
      showTravel: false,
      showBatman: false,
      showSpiderman: false
    };
  },
  methods: {
    showNextQuestion() {
      this.showEat = false;
      this.showTravel = false;
      this.showQuestionOne = false;
      this.showQuestionTwo = true;
    },
    restartQuestions() {
      this.showEat = false;
      this.showTravel = false;
      this.showBatman = false;
      this.showSpiderman = false;
      this.showQuestionTwo = false;
      this.showQuestionOne = true;
    }
  }
}
</script>

<style scoped>

</style>