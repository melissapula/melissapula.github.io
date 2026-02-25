<template>
    <MDBContainer class="mt-0 pt-0" fluid>
        <MDBRow
            class="align-items-center justify-content-center"
            style="height: calc(100vh - 56px); background-color: #f8f9fa; overflow: hidden"
        >
            <MDBCol lg="5" sm="12">
                <MDBRow class="justify-content-center">
                    <MDBCol col="12">
                        <img
                            src="../assets/Family.jpeg"
                            class="img-fluid rounded"
                            style="max-height: calc(100vh - 100px); object-fit: contain; width: 100%"
                        />
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol lg="5" sm="12">
                <MDBRow class="mb-4">
                    <MDBCol col="12">
                        <div class="d-flex justify-content-center mb-4">
                            <div ref="spinnerRef"></div>
                        </div>
                        <h1 class="text-center text-nowrap" style="color: #1a2744">
                            <b>M E L I S S A</b>
                        </h1>
                        <h1 class="text-center text-nowrap" style="color: #1a2744">
                            <b>F R E U N D S C H U H - P U L A</b>
                        </h1>
                        <h5 class="text-center text-nowrap" style="color: #1a2744">Wife. Mother. Nerd.</h5>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
    import { createSpinner } from 'love-is-love-spinners';
    export default {
        name: 'Home',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol
        },
        data() {
            return {
                spinner: null
            };
        },
        mounted() {
            this.spinner = createSpinner(this.$refs.spinnerRef, {
                size: 'lg',
                speed: 5,
                ringText: 'cycle',
                ringColor: 'rainbow',
                shuffle: true
            });
        },
        beforeUnmount() {
            this.spinner?.destroy();
        }
    };
</script>

<style scoped></style>
