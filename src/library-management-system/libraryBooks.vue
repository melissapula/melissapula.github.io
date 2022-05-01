<template>
  <mdb-container class="amber-text" fluid style="background-color: mediumblue; height: 100vh">
    <vue-good-table
        v-if="!loading"
        :columns="columns"
        :rows="rows"
        :search-options="{enabled: true}"
        class="pt-4"
    >
      <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'cover'">
      <img src="../assets/61iRBvRYEcL._SY498_BO1,204,203,200_ (1).jpg" style="max-width: 20px">
      <!--<img :src="props.row.cover">-->
    </span>
        <span v-else-if="props.column.field == 'view'">
          <mdb-btn color="info" size="sm" @click.native="openBookModal(props.row)" title="View Book Info"><mdb-icon icon="book-open"></mdb-icon></mdb-btn>
    </span>
        <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
      </template>
    </vue-good-table>
    <mdb-modal v-if="bookView" :show="showBookModal" @close="showBookModal = false" class="black-text" size="lg" centered>
      <mdb-modal-header>
        <mdb-modal-title class="w-100">
          <mdb-row class="justify-content-between">
            <mdb-col col="8">
              <span>{{bookView.title}}</span>
            </mdb-col>
            <mdb-col col="4">
              <span>Status: {{ bookView.status == 'In' ? 'Available' : 'Checked Out' }}</span>
            </mdb-col>
          </mdb-row>
        </mdb-modal-title>
          <!--</mdb-row><span class="text-left">{{ bookView.title }}</span><span class="text-right">Status: Checked Out</span></mdb-modal-title>-->
      </mdb-modal-header>
      <mdb-modal-body>
        <p>Author: {{bookView.author}}</p>
        <p>Publisher: {{bookView.publisher}}</p>
        <p>Review: this is where the list of reviews will go.</p>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="showBookModal = false">Close</mdb-btn>
        <mdb-btn color="primary">Check Out</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
export default {
  name: "LibraryBooks",
  data() {
    return {
      loading: true,
      bookView: null,
      showBookModal: false,
      columns: [
        {label: '', field: 'cover', sortable: false},
        {label: 'Title', field: 'title'},
        {label: 'Author', field: 'author'},
        {label: 'Genre', field: 'genre'},
        {label: 'Publisher', field: 'publisher'},
        {label: 'ISBN', field: 'isbn'},
        {label: 'ID', field: 'id'},
        {label: 'Status', field: 'status'},
        {label: '', field: 'view', sortable: false},
      ],
      rows: [
        {cover: '61iRBvRYEcL._SY498_BO1,204,203,200_ (1).jpg', title: 'Game of Thrones', author: 'George R.R. Martin', genre: 'Fantasy', publisher: 'Bantam', isbn: '0345535529', id: 1, status: 'Out'},
        {cover: '', title: 'Harry Potter', author: 'J. K. Rowling', genre: 'Fantasy', publisher: 'Arthur A. Levine Books', isbn: '0545162076', id: 2, status: 'In'},
        {cover: '', title: 'Lord of the Rings', author: 'J. R. R. Tolkien', genre: 'Fantasy', publisher: 'William Morrow', isbn: '0358653037', id: 3, status: 'In'}
      ]
    }
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
}
</script>

<style scoped>

</style>