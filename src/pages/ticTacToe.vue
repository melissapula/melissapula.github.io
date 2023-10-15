<template>
    <mdb-view>
        <mdb-mask class="gradient d-flex justify-content-center">
            <mdb-container>
    <mdb-row class="justify-content-center mt-4"><h1>Tic Tac Toe Pets</h1></mdb-row>
    <mdb-row class="justify-content-center align-items-center">
        <mdb-tbl bordered>
            <mdb-tbl-body>
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
            </mdb-tbl-body>
        </mdb-tbl>
    </mdb-row>
            </mdb-container>
        </mdb-mask>
    </mdb-view>
</template>

<script>
export default {
    name: "TicTacToe"
}
</script>

<style scoped>
.view {
    background-image: url("../assets/catsdogs.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh - 60px);
}

</style>