<template>
    <div class="view">
        <div
            class="d-flex justify-content-center"
            style="background: rgba(26, 39, 68, 0.7); min-height: calc(100vh - 60px)"
        >
            <MDBContainer>
                <MDBRow class="justify-content-center mt-4"><h1>Tic Tac Toe Pets</h1></MDBRow>
                <MDBRow class="justify-content-center align-items-center">
                    <MDBTable bordered>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </MDBTable>
                </MDBRow>
            </MDBContainer>
        </div>
    </div>
</template>

<script>
    import { MDBContainer, MDBRow, MDBTable } from 'mdb-vue-ui-kit';

    export default {
        name: 'TicTacToe',
        components: {
            MDBContainer,
            MDBRow,
            MDBTable
        }
    };
</script>

<style scoped>
    .view {
        background-image: url('../assets/catsdogs.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: calc(100vh - 60px);
    }
</style>
