<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow class="align-items-center justify-content-center" style="min-height: 100vh; background-color: #f8f9fa">
            <MDBCol>
                <MDBRow class="align-items-center justify-content-center">
                    <MDBInput v-model="input" outline type="textarea" rows="5" style="background-color: white" />
                </MDBRow>
                <MDBRow class="align-items-center justify-content-center">
                    <MDBBtn color="info" @click="verify_count">Verify Count</MDBBtn>
                </MDBRow>
                <MDBModal v-model="showVerify">
                    <MDBModalHeader>
                        <MDBModalTitle>Counting</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody
                        ><p>You entered: {{ input }}</p>
                        <p>The number of words provided by the user is: {{ total_words }}</p>
                        <p>Character count per word is:</p>
                        <ul>
                            <li v-for="(word, index) of characters_per_word" v-bind:key="index">
                                {{ word.word }}: {{ word.count }}
                            </li>
                        </ul>
                        <p>The total number of characters is: {{ total_characters }}</p></MDBModalBody
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
        MDBInput,
        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter
    } from 'mdb-vue-ui-kit';
    export default {
        name: 'Final',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBInput,
            MDBBtn,
            MDBModal,
            MDBModalHeader,
            MDBModalTitle,
            MDBModalBody,
            MDBModalFooter
        },
        data() {
            return {
                input: null,
                original: null,
                total_words: null,
                characters_per_word: null,
                total_characters: null,
                showVerify: false
            };
        },
        methods: {
            verify_count() {
                this.original = this.input.split(' ');
                this.total_characters = 0;
                this.characters_per_word = [];
                this.total_words = this.original.length;
                for (let i = 0; i < this.original.length; i++) {
                    let charCount = this.original[i].split('').length;
                    this.total_characters += charCount;
                    this.characters_per_word.push({ word: this.original[i], count: charCount });
                }
                this.showVerify = true;
            }
        }
    };
</script>

<style scoped></style>
