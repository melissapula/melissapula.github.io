<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row class="pt-4" style="min-height: 100vh; background-color:#42a7f5">
      <mdb-col>
        <mdb-row v-if="calculator">
          <mdb-col>
            <mdb-row class="justify-content-center pb-4">
              <codemirror class="CodeMirror" style="width: 75%" v-model="calculator" :options="calculatorOptions"></codemirror>
            </mdb-row>
            <mdb-row class="justify-content-center align-items-center pb-4">
              <mdb-col lg="3" sm="12">
                <mdb-row class="justify-content-center">
                <img src="../assets/calculator.png" class="img-fluid">
                </mdb-row>
              </mdb-col>
              <mdb-col lg="3" sm="12">
                <mdb-row class="justify-content-center">
                <p>This code will create a grid for a calculator, as shown here.</p>
                </mdb-row>
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
  name: "Calculator",
  components: {
    codemirror
  },
  data() {
    return {
      calculator: null,
      calculatorOptions: {
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
      this.calculator =
          `from tkinter import *

class Calculator(Frame):
    def __init__(self):
        Frame.__init__(self)
        self.master.title("CS2321 Integer Calculator")
        self.grid()
        self.displayString = ""

        self.displayVar = IntVar()
        self.displayVar.set(0)
        self.displayEntry = Entry(self, textvariable = self.displayVar, state = DISABLED, width = 40, justify = RIGHT)
        self.displayEntry.grid(row = 0, column = 0, columnspan = 4)

        self.sevenButton = Button(self, text = "7", height = 3, width = 7, command = lambda: self.click(7))
        self.sevenButton.grid(row = 1, column = 0)

        self.eightButton = Button(self, text = "8", height = 3, width = 7, command = lambda: self.click(8))
        self.eightButton.grid(row = 1, column = 1)

        self.nineButton = Button(self, text = "9", height = 3, width = 7, command = lambda: self.click(9))
        self.nineButton.grid(row = 1, column = 2)

        self.divisionButton = Button(self, text = "/", height = 3, width = 7)
        self.divisionButton.grid(row = 1, column = 3)

        self.fourButton = Button(self, text = "4", height = 3, width = 7, command = lambda: self.click(4))
        self.fourButton.grid(row = 2, column = 0)

        self.fiveButton = Button(self, text = "5", height = 3, width = 7, command = lambda: self.click(5))
        self.fiveButton.grid(row = 2, column = 1)

        self.sixButton = Button(self, text = "6", height = 3, width = 7, command = lambda: self.click(6))
        self.sixButton.grid(row = 2, column = 2)

        self.multiplyButton = Button(self, text = "*", height = 3, width = 7)
        self.multiplyButton.grid(row = 2, column = 3)

        self.oneButton = Button(self, text = "1", height = 3, width = 7, command = lambda: self.click(1))
        self.oneButton.grid(row = 3, column = 0)

        self.twoButton = Button(self, text = "2", height = 3, width = 7, command = lambda: self.click(2))
        self.twoButton.grid(row = 3, column = 1)

        self.threeButton = Button(self, text = "3", height = 3, width = 7, command = lambda: self.click(3))
        self.threeButton.grid(row = 3, column = 2)

        self.subtractButton = Button(self, text = "-", height = 3, width = 7)
        self.subtractButton.grid(row = 3, column = 3)

        self.zeroButton = Button(self, text = "0", height = 3, width = 16, command = lambda: self.click(0))
        self.zeroButton.grid(row = 4, column = 0, columnspan = 2)

        self.addButton = Button(self, text = "+", height = 3, width = 7)
        self.addButton.grid(row = 4, column = 3)

        self.equalButton = Button(self, text = "=", height = 3, width = 7)
        self.equalButton.grid(row = 4, column = 2)

    def click(self, number):
        self.displayString += str(number)
        self.displayVar.set(self.displayString)


if __name__ == "__main__":
    Calculator().mainloop()`
    },
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>
.CodeMirror {
  height: auto;
}
</style>