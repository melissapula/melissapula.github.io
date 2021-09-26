<template>
  <mdb-container class="h-100 m-0 p-0 mb-0" fluid>
    <mdb-row class="justify-content-center align-items-center" style="min-height: 100vh; background-color:#EFC9AF">
      <mdb-col col="8">
  <mdb-tbl v-if="tableCreated" bordered style="background-color:lightyellow" class="mt-4">
    <mdb-tbl-head>
      <tr style="background-color: hotpink">
        <th style="width: 40px"></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
    </mdb-tbl-head>
    <mdb-tbl-body>
      <tr v-for="(row, index) of board" v-bind:key="index" style="height: 150px">
        <td style="background-color: hotpink">{{index + 1}}</td>
        <td style="width: 150px" v-for="(cell, i) of row" v-bind:key="i">
          <span v-if="cell == 'B'"><img src="../assets/Bugs-Bunny.jpg" class="img-fluid px-5"></span>
          <span v-else-if="cell == 'T'"><img src="../assets/tweety.jpeg" class="img-fluid px-3"></span>
          <span v-else-if="cell == 'D'"><img src="../assets/taz.jpg" class="img-fluid"></span>
          <span v-else-if="cell == 'M'"><img src="../assets/marvin.png" class="img-fluid px-5"></span>
          <span v-else-if="cell == 'C'"><img src="../assets/carrot.png" class="img-fluid px-3"></span>
          <span v-else-if="cell == 'F'"><img src="../assets/mountain.jpg" class="img-fluid"></span>
          <span v-else-if="cell == 'B(C)'"><img src="../assets/bugsCarrot.jpg" class="img-fluid px-5"></span>
          <span v-else-if="cell == 'D(C)'"><img src="../assets/tazCarrot.jpg" class="img-fluid px-5"></span>
          <span v-else-if="cell == 'B(C&F)'"><img src="../assets/bugsWins.jpg" class="img-fluid"></span>
        </td>
      </tr>
    </mdb-tbl-body>
  </mdb-tbl>
  <mdb-btn @click.native="movePlayer()">Next Move</mdb-btn>
      </mdb-col>
    </mdb-row>
    <mdb-modal centered :show="killModal" @close="killModal = false" danger>
      <mdb-modal-header>
        <mdb-modal-title>Oh no!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <p>Marvin killed Tweety!</p>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="danger" @click.native="killModal = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal centered :show="winModal" @close="winModal = false" success>
      <mdb-modal-header>
        <mdb-modal-title>Yay!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <p>Congratulations Bugs Bunny!  You have won the game!</p>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="success" @click.native="winModal = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal centered :show="mountainModal" @close="mountainModal = false" warning>
      <mdb-modal-header>
        <mdb-modal-title>Alert!</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <p>The mountain has moved to a different cell!</p>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="warning" @click.native="mountainModal = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
export default {
  name: "BugsGame",
  data() {
    return {
      tableCreated: true,
      player: 1,
      killModal: false,
      winModal: false,
      mountainModal: false,
      board: [
        ['', '', 'C', '', 'F'],
        ['', '', '', '', ''],
        ['T', 'B', '', '', ''],
        ['', '', '', '', 'C'],
        ['M', '', '', 'D', '']
      ],
    }
  },
  methods: {

movePlayer() {
  this.tableCreated = false;
  if(this.player == 1) {
    this.board[2][1] = '';
    this.board[1][1] = 'B';
  }
  else if(this.player == 2) {
    this.board[4][3] = '';
    this.board[4][4] = 'D';
  }
  else if(this.player == 3) {
    this.board[2][0] = '';
    this.board[3][0] = 'T';
  }
  else if(this.player == 4) {
    this.board[4][0] = '';
    this.board[3][0] = 'M';
    this.killModal = true;
  }
  else if(this.player == 5) {
    this.board[1][1] = '';
    this.board[1][2] = 'B';
  }
  else if(this.player == 6) {
    this.board[4][4] = '';
    this.board[3][4] = 'D(C)';
  }
  else if(this.player == 7) {
    this.board[3][0] = '';
    this.board[3][1] = 'M';
  }
  else if(this.player == 8) {
    this.board[1][2] = '';
    this.board[0][2] = 'B(C)';
  }
  else if(this.player == 9) {
    this.board[3][4] = '';
    this.board[2][4] = 'D(C)';
  }
  else if(this.player == 10) {
    this.board[3][1] = '';
    this.board[2][1] = 'M';
  }
  else if(this.player == 11) {
    this.board[0][4] = '';
    this.board[0][1] = 'F';
    this.mountainModal = true;
  }
  else if(this.player == 12) {
    this.board[0][2] = '';
    this.board[0][1] = 'B(C&F)';
    this.winModal = true;
  }
  this.player ++;
  this.tableCreated = true;
}

  }
}
</script>

<style scoped>

</style>

