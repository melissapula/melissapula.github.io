<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow v-if="code" style="height: calc(100vh - 56px); background-color: #f0f2f5" class="pt-4">
            <MDBCol lg="7" sm="12">
                <Codemirror class="CodeMirror" style="width: 100%" :value="code" :options="codeOptions"></Codemirror>
            </MDBCol>
            <MDBCol lg="5" sm="12" class="pb-4 d-flex flex-column justify-content-center align-items-center">
                <p>This code will create a game called Game of Sticks. The game is played as follows:</p>
                <p>1. The computer asks how many sticks you would like to start with (10-100).</p>
                <p>2. The two players then take turns reducing the number of sticks (1-3).</p>
                <p>3. The player who takes the last stick loses.</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import Codemirror from 'codemirror-editor-vue3';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/mode/python/python.js';
    import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
    export default {
        name: 'Sticks',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            Codemirror
        },
        data() {
            return {
                code: null,
                codeOptions: {
                    tabSize: 4,
                    mode: 'text/x-python',
                    lineNumbers: true,
                    line: true,
                    smartIndent: true,
                    indentUnit: 4,
                    indentWithTabs: true,
                    readOnly: true,
                    foldGutter: true
                }
            };
        },
        methods: {
            init() {
                this.code = `class gameOfSticks():
    def __init__(self):
        self.currentPlayer = "Player 1"
        self.numberTaken = 0
        print("Welcome to the game of sticks!")
        while True:
            self.numberOfSticks = int(input("How many sticks are there on the table initially (10-100)? "))
            if self.numberOfSticks > 9 and self.numberOfSticks < 101:
                self.play()
            else:
                print("Please enter a number between 10 and 100.")

    def play(self):
        print("There are " + str(self.numberOfSticks) + " sticks on the table.")
        self.numberTaken = int(input(str(self.currentPlayer) + ": How many sticks do you take (1-3)? "))
        self.numberOfSticks -= self.numberTaken
        print(self.numberTaken)
        print(self.numberOfSticks)
        if self.numberOfSticks < 1:
            print(str(self.currentPlayer) + ", you lose.")
        else:
            self.changePlayer()

    def changePlayer(self):
        if self.currentPlayer == "Player 1":
            self.currentPlayer = "Player 2"
        else:
            self.currentPlayer = "Player 1"
        self.play()

if __name__ == "__main__":
    gameOfSticks()`;
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped>
    .CodeMirror {
        height: calc(100vh - 90px) !important;
    }
</style>
