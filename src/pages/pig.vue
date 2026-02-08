<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow v-if="code" style="height: calc(100vh - 56px); background-color: #f0f2f5" class="pt-4">
            <MDBCol lg="7" sm="12">
                <Codemirror class="CodeMirror" style="width: 100%" :value="code" :options="codeOptions"></Codemirror>
            </MDBCol>
            <MDBCol lg="5" sm="12" class="pb-4 d-flex flex-column justify-content-center align-items-center">
                <p>This code will create a game called Game of Pig. The game is played as follows:</p>
                <p>Each turn starts with the player making the choice to play or hold.</p>
                <p class="ms-4">If they play the player rolls a single die and looking at the results.</p>
                <p class="ms-4 ps-4">If a 1 was rolled the player scores no points and their turn is over.</p>
                <p class="ms-4 ps-4">
                    If any other number is rolled the player adds the number rolled to the player's turn total.
                </p>
                <p class="ms-4">
                    If they hold their turn points are added to their score and it becomes the opponent's turn.
                </p>
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
        name: 'Pig',
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
                this.code = `totalone = 0
totaltwo = 0
while True:
    rollfirst = 0
    while True:
        print ("First Player score is " + str(totalone) + ".")
        print ("Second Player score is " + str(totaltwo) + ".")
        rollone = int(input('''First Player, would you like to roll or hold?
        1. Roll
        2. Hold
        Please make a choice. '''))
        if rollone == 1:
            import random
            diceone = random.randint(1,6)
            if diceone == 1:
                print("You rolled a 1.  Your score is zero for this round.")
                rollfirst = 0
                break
            else:
                rollfirst += diceone
                print("You rolled a " + str(diceone))
                print ("Your total for this turn is " + str(rollfirst))
                print ("Your total score for the game would be " + str(totalone + rollfirst))
        elif rollone == 2:
            print("Your total score for this roll is " + str(rollfirst))
            break
    totalone += rollfirst
    print("Your total score for the game is " + str(totalone))
    if (totalone >= 100):
        print("Congratulations First Player, you won!!")
        break
    rollsecond = 0
    while True:
        print ("First Player score is " + str(totalone) + ".")
        print ("Second Player score is " + str(totaltwo) + ".")
        rolltwo = int(input('''Second Player, would you like to roll or hold?
        1. Roll
        2. Hold
        Please make a choice. '''))
        if rolltwo == 1:
            import random
            dicetwo = random.randint(1,6)
            if dicetwo == 1:
                print("You rolled a 1.  Your score is zero for this round.")
                rollsecond = 0
                break
            else:
                rollsecond += dicetwo
                print("You rolled a " + str(dicetwo))
                print ("Your total for this turn is " + str(rollsecond))
                print ("Your total score for the game would be " + str(totaltwo + rollsecond))
        elif rolltwo == 2:
            print("Your total score for this roll is " + str(rollsecond))
            break
    totaltwo += rollsecond
    print("Your total score for the game is " + str(totaltwo))
    if (totaltwo >= 100):
        print("Congratulations Second Player, you won!!")
        break`;
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
