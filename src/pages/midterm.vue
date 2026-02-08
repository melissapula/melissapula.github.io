<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow class="align-items-center justify-content-center" style="min-height: 100vh; background-color: #f8f9fa">
            <MDBCol col="4">
                <MDBCard v-if="showQuestionOne" class="card-body">
                    <MDBCardTitle>This or That?</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow class="justify-content-center">
                            <MDBCol col="12">
                                <p>Select what you would like most ...</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol col="6">
                                <MDBBtn @click="showEat = true" color="primary"
                                    ><img src="../assets/eatSign.jpg" class="img-fluid"
                                /></MDBBtn>
                            </MDBCol>
                            <MDBCol col="6">
                                <MDBBtn @click="showTravel = true" color="primary"
                                    ><img src="../assets/travelSign.jpg" class="img-fluid"
                                /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardText>
                </MDBCard>
                <MDBCard v-if="showQuestionTwo" class="card-body">
                    <MDBCardTitle>This or That?</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow class="justify-content-center">
                            <MDBCol col="12">
                                <p>Would you rather be Batman or Spiderman?</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol col="6">
                                <MDBBtn @click="showBatman = true" color="primary"
                                    ><img src="../assets/batmanLogo.jpg" class="img-fluid"
                                /></MDBBtn>
                            </MDBCol>
                            <MDBCol col="6">
                                <MDBBtn @click="showSpiderman = true" color="primary"
                                    ><img src="../assets/spidermanLogo.jpg" class="img-fluid"
                                /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardText>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBModal v-model="showEat" success>
            <MDBModalHeader>
                <MDBModalTitle>You chose eat!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><img src="../assets/eat.jpg" class="img-fluid" /></MDBModalBody>
            <MDBModalFooter>
                <MDBBtn outline="success" @click="showNextQuestion">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        <MDBModal v-model="showTravel" success>
            <MDBModalHeader>
                <MDBModalTitle>You chose travel!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><img src="../assets/travel.jpg" class="img-fluid" /></MDBModalBody>
            <MDBModalFooter>
                <MDBBtn outline="success" @click="showNextQuestion">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        <MDBModal v-model="showBatman" success>
            <MDBModalHeader>
                <MDBModalTitle>You chose Batman!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><img src="../assets/batman.jpg" class="img-fluid" /></MDBModalBody>
            <MDBModalFooter>
                <MDBBtn outline="success" @click="restartQuestions">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        <MDBModal v-model="showSpiderman" success>
            <MDBModalHeader>
                <MDBModalTitle>You chose Spiderman!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><img src="../assets/spiderman.png" class="img-fluid" /></MDBModalBody>
            <MDBModalFooter>
                <MDBBtn outline="success" @click="restartQuestions">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
</template>

<script>
    import {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBCard,
        MDBCardTitle,
        MDBCardText,
        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter
    } from 'mdb-vue-ui-kit';
    export default {
        name: 'Midterm',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBCard,
            MDBCardTitle,
            MDBCardText,
            MDBBtn,
            MDBModal,
            MDBModalHeader,
            MDBModalTitle,
            MDBModalBody,
            MDBModalFooter
        },
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
    };
</script>

<style scoped></style>
