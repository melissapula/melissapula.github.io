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
                <p>This code will create a game called Bulls and Cows.  The game is played as follows:</p>
                <p>1. The computer picks a four-digit number with no repeating digits. This is the secret number.</p>
                <p>2. The user makes a guess.</p>
                <p>3. The computer determines the number of bulls and the number of cows.</p>
                <p class="ml-4">a. Bulls are digits which are in the correct position.</p>
                <p class="ml-4">b. Cows are digits that are in the secret number but are in the wrong position.</p>
                <p>4. The computer then prints out all the guesses and their bull and cow counts.
                  NOTE: These numbers added together should never be more than four.</p>
                <p>5. If all the digits are bulls, the game is over, otherwise go to step 2.</p>
                <p>6. When the game is over the computer will ask you if you want to play again.</p>
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
  name: "BullsCows",
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
          `def main():
    import random
    print("Welcome to the game Bulls and Cows!")
    while True:
        scores = ""
        secretNumber = ""
        count = 0
        while True:
            number = str(random.randint(0,9))
            if number not in secretNumber:
                secretNumber += number
                count += 1
                if count == 4:
                    break
        secretList = list(secretNumber)
        while True:
            scores = ""
            while True:
                bull = 0
                cow = 0
                cow2 = 0
                print("I have picked a random four-digit number.  Please guess what it is: ")
                print("Bull".rjust(10) + "Cow".rjust(10) + "Guess".rjust(10))
                print(scores)
                guess = input("")
                if len(guess) != 4:
                    print("ERROR: the number you entered is the wrong length.")

                else:
                    if guess.isdigit():
                        bull = 0
                        cow = 0
                        cow2 = 0
                        guessList = list(guess)

                        for digit in guessList:
                            if digit in secretNumber:
                                cow += 1

                        for index in range(4):
                            if guessList[index] == secretList[index]:
                                bull += 1

                        cow2 = cow - bull
                        scores += str(bull).rjust(10) + str(cow2).rjust(10) + str(guess).rjust(10) + "\\n"
                        if bull == 4:
                            playAgain = int(input('''You guessed right!  Would you like to play again?  Please enter a number:
    1. Yes
    2. No
    '''))
                            if playAgain == 1:
                                break
                            else:
                                exit()
                    else:
                        print("ERROR: the characters you entered are not all integers.")

main()  `
    }
    },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>