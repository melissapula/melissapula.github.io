<template>
    <ProjectShell>
        <template #code>
            <CodeBlock :code="calculator" />
        </template>
        <template #summary>
            <img src="../assets/calculator.png" class="img-fluid" alt="Screenshot of the resulting calculator GUI" />
            <p class="mt-md">This code will create a grid for a calculator, as shown here.</p>
        </template>
    </ProjectShell>
</template>

<script>
    import CodeBlock from '@/components/CodeBlock.vue';
    import ProjectShell from '@/components/ProjectShell.vue';
    export default {
        name: 'Calculator',
        components: { CodeBlock, ProjectShell },
        data() {
            return {
                calculator: `from tkinter import *

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
            };
        }
    };
</script>

<style scoped></style>
