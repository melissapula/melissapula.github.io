<template>
    <MDBContainer class="mt-0 pt-0" fluid>
        <MDBRow
            class="justify-content-center align-items-center"
            style="min-height: calc(100vh - 56px); background-color: #f8f9fa"
        >
            <MDBCard class="card-body">
                <MDBCardTitle>Calculate</MDBCardTitle>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol col="3">
                            <MDBInput type="number" outline placeholder="First number" v-model="firstNum"></MDBInput>
                        </MDBCol>
                        <MDBCol col="3">
                            <select class="form-select mt-4" v-model="operator">
                                <option value="">Select Op</option>
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="*">*</option>
                                <option value="/">/</option>
                            </select>
                        </MDBCol>
                        <MDBCol col="3">
                            <MDBInput type="number" outline placeholder="Second number" v-model="secondNum"></MDBInput>
                        </MDBCol>
                        <MDBCol col="3" class="mt-2">
                            <MDBBtn color="success" @click="calculate">Calculate</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>{{ firstNum }} {{ operator }} {{ secondNum }} = {{ result }}</MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardBody, MDBInput, MDBBtn } from 'mdb-vue-ui-kit';
    export default {
        name: 'verify',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBCard,
            MDBCardTitle,
            MDBCardBody,
            MDBInput,
            MDBBtn
        },
        data() {
            return {
                firstNum: 0,
                secondNum: 0,
                operator: '',
                result: 0
            };
        },
        methods: {
            calculate() {
                if (this.firstNum && this.secondNum && this.operator !== '') {
                    switch (this.operator) {
                        case '+':
                            this.result = parseInt(this.firstNum) + parseInt(this.secondNum);
                            break;
                        case '-':
                            this.result = parseInt(this.firstNum) - parseInt(this.secondNum);
                            break;
                        case '*':
                            this.result = parseInt(this.firstNum) * parseInt(this.secondNum);
                            break;
                        case '/':
                            this.result = parseInt(this.firstNum) / parseInt(this.secondNum);
                            break;
                    }
                }
            }
        }
    };
</script>

<style scoped></style>
