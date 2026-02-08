<template>
    <MDBContainer class="amber-text" fluid style="background-color: #1a2744; height: 100vh">
        <vue-good-table
            v-if="!loading"
            :columns="columns"
            :rows="rows"
            :search-options="{ enabled: true }"
            class="pt-4"
        >
            <template #table-row="props">
                <span v-if="props.column.field == 'cover'">
                    <img src="../assets/61iRBvRYEcL._SY498_BO1,204,203,200_ (1).jpg" style="max-width: 20px" />
                    <!--<img :src="props.row.cover">-->
                </span>
                <span v-else-if="props.column.field == 'view'">
                    <MDBBtn color="info" size="sm" @click="openBookModal(props.row)" title="View Book Info"
                        ><MDBIcon icon="book-open"></MDBIcon
                    ></MDBBtn>
                </span>
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
        <MDBModal v-if="bookView" v-model="showBookModal" class="black-text" size="lg" centered>
            <MDBModalHeader>
                <MDBModalTitle class="w-100">
                    <MDBRow class="justify-content-between">
                        <MDBCol col="8">
                            <span>{{ bookView.title }}</span>
                        </MDBCol>
                        <MDBCol col="4">
                            <span>Status: {{ bookView.status == 'In' ? 'Available' : 'Checked Out' }}</span>
                        </MDBCol>
                    </MDBRow>
                </MDBModalTitle>
                <!--</MDBRow><span class="text-left">{{ bookView.title }}</span><span class="text-right">Status: Checked Out</span></MDBModalTitle>-->
            </MDBModalHeader>
            <MDBModalBody>
                <p>Author: {{ bookView.author }}</p>
                <p>Publisher: {{ bookView.publisher }}</p>
                <p>Review: this is where the list of reviews will go.</p>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" @click="showBookModal = false">Close</MDBBtn>
                <MDBBtn color="primary">Check Out</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
</template>

<script>
    import {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBIcon,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter
    } from 'mdb-vue-ui-kit';
    import { VueGoodTable } from 'vue-good-table-next';
    import 'vue-good-table-next/dist/vue-good-table-next.css';

    export default {
        name: 'LibraryBooks',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBBtn,
            MDBIcon,
            MDBModal,
            MDBModalHeader,
            MDBModalTitle,
            MDBModalBody,
            MDBModalFooter,
            VueGoodTable
        },
        data() {
            return {
                loading: true,
                bookView: null,
                showBookModal: false,
                columns: [
                    { label: '', field: 'cover', sortable: false },
                    { label: 'Title', field: 'title' },
                    { label: 'Author', field: 'author' },
                    { label: 'Genre', field: 'genre' },
                    { label: 'Publisher', field: 'publisher' },
                    { label: 'ISBN', field: 'isbn' },
                    { label: 'ID', field: 'id' },
                    { label: 'Status', field: 'status' },
                    { label: '', field: 'view', sortable: false }
                ],
                rows: [
                    {
                        cover: '61iRBvRYEcL._SY498_BO1,204,203,200_ (1).jpg',
                        title: 'Game of Thrones',
                        author: 'George R.R. Martin',
                        genre: 'Fantasy',
                        publisher: 'Bantam',
                        isbn: '0345535529',
                        id: 1,
                        status: 'Out'
                    },
                    {
                        cover: '',
                        title: 'Harry Potter',
                        author: 'J. K. Rowling',
                        genre: 'Fantasy',
                        publisher: 'Arthur A. Levine Books',
                        isbn: '0545162076',
                        id: 2,
                        status: 'In'
                    },
                    {
                        cover: '',
                        title: 'Lord of the Rings',
                        author: 'J. R. R. Tolkien',
                        genre: 'Fantasy',
                        publisher: 'William Morrow',
                        isbn: '0358653037',
                        id: 3,
                        status: 'In'
                    }
                ]
            };
        },
        methods: {
            openBookModal(book) {
                console.info(book);
                this.bookView = book;
                this.showBookModal = true;
            }
        },
        mounted() {
            this.loading = false;
        }
    };
</script>

<style scoped></style>
