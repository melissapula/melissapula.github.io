<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow class="align-items-center justify-content-center" style="min-height: 100vh; background-color: #f8f9fa">
            <MDBCol>
                <MDBRow class="align-items-center justify-content-center">
                    <div class="form-group">
                        <label for="input">Enter a word:</label>
                        <input type="text" id="input" class="form-control" v-model="original" />
                    </div>
                </MDBRow>
                <MDBRow class="align-items-center justify-content-center">
                    <MDBBtn color="info" @click="verify">Verify</MDBBtn>
                </MDBRow>
                <MDBModal v-model="showVerify">
                    <MDBModalHeader>
                        <MDBModalTitle>{{ original }}</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody
                        ><p>{{ original }} is <span v-if="!palindrome">not </span>a Palindrome!</p></MDBModalBody
                    >
                    <MDBModalFooter>
                        <MDBBtn color="secondary" @click="showVerify = false">Okay</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter
    } from 'mdb-vue-ui-kit';
    export default {
        name: 'FinalPractice',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBBtn,
            MDBModal,
            MDBModalHeader,
            MDBModalTitle,
            MDBModalBody,
            MDBModalFooter
        },
        data() {
            return {
                original: '',
                backward: '',
                palindrome: false,
                showVerify: false
            };
        },
        methods: {
            verify() {
                this.backward = this.original.split('').reverse().join('');
                if (this.backward == this.original) {
                    this.palindrome = true;
                } else {
                    this.palindrome = false;
                }
                this.showVerify = true;
            }
        }
    };
</script>

<style scoped></style>
