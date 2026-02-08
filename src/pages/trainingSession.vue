<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow class="align-items-center justify-content-center" style="min-height: 100vh; background-color: #f8f9fa">
            <MDBCol col="4">
                <MDBCard v-if="showQuestionOne" class="card-body">
                    <MDBCardTitle>States Quiz</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow class="justify-content-center">
                            <MDBCol col="12">
                                <p>The capital of Minnesota is St. Paul</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol col="6">
                                <MDBBtn @click="showCorrect = true" color="primary">TRUE</MDBBtn>
                            </MDBCol>
                            <MDBCol col="6">
                                <MDBBtn @click="showWrong = true" color="primary">FALSE</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardText>
                </MDBCard>
                <MDBCard v-if="showQuestionTwo" class="card-body">
                    <MDBCardTitle>States Quiz</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow class="justify-content-center">
                            <MDBCol col="12">
                                <p>The capital of Wyoming is Helena</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol col="6">
                                <MDBBtn @click="showWrong = true" color="primary">TRUE</MDBBtn>
                            </MDBCol>
                            <MDBCol col="6">
                                <MDBBtn @click="showCorrect = true" color="primary">FALSE</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardText>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBModal v-model="showCorrect" success>
            <MDBModalHeader>
                <MDBModalTitle>Correct Answer</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><MDBBtn color="success">Correct!</MDBBtn></MDBModalBody>
            <MDBModalFooter>
                <MDBBtn outline="success" @click="showNextQuestion">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        <MDBModal v-model="showWrong" danger>
            <MDBModalHeader>
                <MDBModalTitle>Wrong Answer</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><MDBBtn color="danger">Nope!</MDBBtn></MDBModalBody>
            <MDBModalFooter>
                <MDBBtn outline="danger" @click="showWrong = false">Close</MDBBtn>
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
        name: 'TrainingSession',
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
                showWrong: false,
                showCorrect: false
            };
        },
        methods: {
            showNextQuestion() {
                this.showCorrect = false;
                this.showQuestionOne = false;
                this.showQuestionTwo = true;
            }
        }
    };
</script>

<style scoped></style>
