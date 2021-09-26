<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row class="pt-4" style="min-height: 100vh; background-color:#42a7f5">
      <mdb-col>
        <mdb-row v-if="code">
          <mdb-col>
            <mdb-row class="justify-content-center pb-4">
              <codemirror class="CodeMirror" style="width: 75%" v-model="code" :options="codeOptions"></codemirror>
            </mdb-row>
            <mdb-row class="justify-content-center align-items-center pb-4">
              <mdb-col col="8">
                <p>This code will create a game called Game of Sticks.  The game is played as follows:</p>
                <p>1. The computer asks how many sticks you would like to start with (10-100).</p>
                <p>2. The two players then take turns reducing the number of sticks (1-3).</p>
                <p>3. The player who takes the last stick loses.</p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/python/python.js'
export default {
  name: "Sticks",
  components: {
    codemirror
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
        foldGutter: true,
      },
    }
  },
  methods: {
    init() {
      this.code =
          `class gameOfSticks():
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
    gameOfSticks()`
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>