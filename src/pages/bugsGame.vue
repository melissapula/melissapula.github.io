<template>
    <MDBContainer class="h-100 m-0 p-0 mb-0" fluid>
        <MDBRow
            class="justify-content-center align-items-center"
            style="height: calc(100vh - 56px); background-color: #f0f2f5"
        >
            <MDBCol col="8">
                <MDBTable v-if="tableCreated" bordered style="background-color: white" class="mb-2">
                    <thead>
                        <tr style="background-color: #2c3e50; color: white">
                            <th style="width: 40px"></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) of board" v-bind:key="index" class="bugs-row">
                            <td style="background-color: #2c3e50; color: white">{{ index + 1 }}</td>
                            <td class="bugs-cell" v-for="(cell, i) of row" v-bind:key="i">
                                <span v-if="cell == 'B'"
                                    ><img src="../assets/Bugs-Bunny.jpg" class="img-fluid px-5"
                                /></span>
                                <span v-else-if="cell == 'T'"
                                    ><img src="../assets/tweety.jpeg" class="img-fluid px-3"
                                /></span>
                                <span v-else-if="cell == 'D'"><img src="../assets/taz.jpg" class="img-fluid" /></span>
                                <span v-else-if="cell == 'M'"
                                    ><img src="../assets/marvin.png" class="img-fluid px-5"
                                /></span>
                                <span v-else-if="cell == 'C'"
                                    ><img src="../assets/carrot.png" class="img-fluid px-3"
                                /></span>
                                <span v-else-if="cell == 'F'"
                                    ><img src="../assets/mountain.jpg" class="img-fluid"
                                /></span>
                                <span v-else-if="cell == 'B(C)'"
                                    ><img src="../assets/bugsCarrot.jpg" class="img-fluid px-5"
                                /></span>
                                <span v-else-if="cell == 'D(C)'"
                                    ><img src="../assets/tazCarrot.jpg" class="img-fluid px-5"
                                /></span>
                                <span v-else-if="cell == 'B(C&F)'"
                                    ><img src="../assets/bugsWins.jpg" class="img-fluid"
                                /></span>
                            </td>
                        </tr>
                    </tbody>
                </MDBTable>
                <MDBBtn @click="movePlayer()">Next Move</MDBBtn>
            </MDBCol>
        </MDBRow>
        <MDBModal centered v-model="killModal" danger>
            <MDBModalHeader>
                <MDBModalTitle>Oh no!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
                <p>Marvin killed Tweety!</p>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="danger" @click="killModal = false">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        <MDBModal centered v-model="winModal" success>
            <MDBModalHeader>
                <MDBModalTitle>Yay!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
                <p>Congratulations Bugs Bunny! You have won the game!</p>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="success" @click="winModal = false">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        <MDBModal centered v-model="mountainModal" warning>
            <MDBModalHeader>
                <MDBModalTitle>Alert!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
                <p>The mountain has moved to a different cell!</p>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="warning" @click="mountainModal = false">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
</template>

<script>
    import {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBTable,
        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter
    } from 'mdb-vue-ui-kit';
    export default {
        name: 'BugsGame',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBTable,
            MDBBtn,
            MDBModal,
            MDBModalHeader,
            MDBModalTitle,
            MDBModalBody,
            MDBModalFooter
        },
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
                ]
            };
        },
        methods: {
            movePlayer() {
                this.tableCreated = false;
                if (this.player == 1) {
                    this.board[2][1] = '';
                    this.board[1][1] = 'B';
                } else if (this.player == 2) {
                    this.board[4][3] = '';
                    this.board[4][4] = 'D';
                } else if (this.player == 3) {
                    this.board[2][0] = '';
                    this.board[3][0] = 'T';
                } else if (this.player == 4) {
                    this.board[4][0] = '';
                    this.board[3][0] = 'M';
                    this.killModal = true;
                } else if (this.player == 5) {
                    this.board[1][1] = '';
                    this.board[1][2] = 'B';
                } else if (this.player == 6) {
                    this.board[4][4] = '';
                    this.board[3][4] = 'D(C)';
                } else if (this.player == 7) {
                    this.board[3][0] = '';
                    this.board[3][1] = 'M';
                } else if (this.player == 8) {
                    this.board[1][2] = '';
                    this.board[0][2] = 'B(C)';
                } else if (this.player == 9) {
                    this.board[3][4] = '';
                    this.board[2][4] = 'D(C)';
                } else if (this.player == 10) {
                    this.board[3][1] = '';
                    this.board[2][1] = 'M';
                } else if (this.player == 11) {
                    this.board[0][4] = '';
                    this.board[0][1] = 'F';
                    this.mountainModal = true;
                } else if (this.player == 12) {
                    this.board[0][2] = '';
                    this.board[0][1] = 'B(C&F)';
                    this.winModal = true;
                }
                this.player++;
                this.tableCreated = true;
            }
        }
    };
</script>

<style scoped>
    .bugs-row {
        height: calc((100vh - 56px - 80px) / 5);
    }
    .bugs-cell {
        width: 150px;
    }
    .bugs-cell img {
        max-height: calc((100vh - 56px - 80px) / 5 - 20px);
        object-fit: contain;
    }
</style>
