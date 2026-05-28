<template>
    <ProjectShell center-summary>
        <template #code>
            <CodeBlock :code="code" />
        </template>
        <template #summary>
            <p>This code will create a game called Game of Pig. The game is played as follows:</p>
            <p>Each turn starts with the player making the choice to play or hold.</p>
            <p class="ml-lg">If they play the player rolls a single die and looking at the results.</p>
            <p class="ml-lg pl-lg">If a 1 was rolled the player scores no points and their turn is over.</p>
            <p class="ml-lg pl-lg">
                If any other number is rolled the player adds the number rolled to the player's turn total.
            </p>
            <p class="ml-lg">
                If they hold their turn points are added to their score and it becomes the opponent's turn.
            </p>
        </template>
    </ProjectShell>
</template>

<script>
    import CodeBlock from '@/components/CodeBlock.vue';
    import ProjectShell from '@/components/ProjectShell.vue';
    export default {
        name: 'Pig',
        components: { CodeBlock, ProjectShell },
        data() {
            return {
                code: `totalone = 0
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
        break`
            };
        }
    };
</script>

<style scoped></style>
