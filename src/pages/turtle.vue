<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow v-if="code" style="height: calc(100vh - 56px); background-color: #f0f2f5" class="pt-4">
            <MDBCol lg="7" sm="12">
                <Codemirror class="CodeMirror" style="width: 100%" :value="code" :options="codeOptions"></Codemirror>
            </MDBCol>
            <MDBCol
                lg="5"
                sm="12"
                class="pb-4 d-flex flex-column align-items-center"
                style="overflow-y: auto; height: calc(100vh - 90px)"
            >
                <img src="../assets/turtleGraphics.png" class="img-fluid" />
                <p class="mt-3">This code will create a picture (as shown) using Turtle Graphics.</p>
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
        name: 'Turtle',
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
                this.code = `from turtle import Turtle
def main():
    t = Turtle()
    t.pensize(2)
    roof(t)
    houseFrame(t)
    chimney(t)
    door(t)
    window(t)
    sun(t)
    yard(t)
    tree(t)

def roof(t):
    t.fillcolor("green")
    t.begin_fill()
    t.forward(200)
    t.goto(100, 100)
    t.goto(0,0)
    t.end_fill()

def houseFrame(t):
    t.penup()
    t.goto(20, 0)
    t.pendown()
    t.fillcolor("red")
    t.begin_fill()
    t.right(90)
    t.forward(150)
    t.left(90)
    t.forward(160)
    t.left(90)
    t.forward(150)
    t.left(90)
    t.forward(160)
    t.end_fill()

def chimney(t):
    t.penup()
    t.goto(20, 20)
    t.pendown()
    t.fillcolor("green")
    t.begin_fill()
    t.goto(20, 80)
    t.goto(40, 80)
    t.goto(40, 40)
    t.goto(20, 20)
    t.end_fill()

def door(t):
    t.penup()
    t.goto(160, -150)
    t.pendown()
    t.setheading(90)
    t.fillcolor("yellow")
    t.begin_fill()
    t.forward(60)
    t.left(90)
    t.forward(40)
    t.left(90)
    t.forward(60)
    t.left(90)
    t.forward(40)
    t.end_fill()

def window(t):
    t.penup()
    t.goto(40, -40)
    t.setheading(0)
    t.pendown()
    t.fillcolor("white")
    t.begin_fill()
    t.forward(40)
    t.right(90)
    t.forward(40)
    t.right(90)
    t.forward(40)
    t.right(90)
    t.forward(40)
    t.end_fill()
    t.right(90)
    t.forward(20)
    t.right(90)
    t.forward(40)
    t.right(90)
    t.forward(20)
    t.right(90)
    t.forward(20)
    t.right(90)
    t.forward(40)

def sun(t):
    t.penup()
    t.goto(-75, 250)
    t.pendown()
    t.fillcolor("yellow")
    t.begin_fill()
    t.circle(50)
    t.end_fill()
    t.penup()
    t.goto(-135, 300)
    t.pendown()
    t.pencolor("yellow")
    t.setheading(180)
    t.pensize(4)
    t.forward(60)
    t.penup()
    t.goto(-75, 360)
    t.pendown()
    t.setheading(90)
    t.forward(60)
    t.penup()
    t.goto(-15, 300)
    t.pendown()
    t.setheading(0)
    t.forward(60)
    t.penup()
    t.goto(-75, 240)
    t.pendown()
    t.setheading(270)
    t.forward(60)
    t.penup()
    t.goto(-75, 300)
    t.setheading(225)
    t.forward(60)
    t.pendown()
    t.forward(60)
    t.penup()
    t.goto(-75,300)
    t.setheading(135)
    t.forward(60)
    t.pendown()
    t.forward(60)
    t.penup()
    t.goto(-75, 300)
    t.setheading(45)
    t.forward(60)
    t.pendown()
    t.forward(60)
    t.penup()
    t.goto(-75, 300)
    t.setheading(315)
    t.forward(60)
    t.pendown()
    t.forward(60)
    t.pensize(2)
    t.pencolor("black")

def yard(t):
    t.penup()
    t.goto(20, -150)
    t.pendown()
    t.setheading(180)
    t.fillcolor("#608038")
    t.begin_fill()
    t.forward(500)
    t.left(90)
    t.forward(300)
    t.left(90)
    t.forward(1000)
    t.left(90)
    t.forward(300)
    t.left(90)
    t.forward(500)
    t.end_fill()

def tree(t):
    t.penup()
    t.goto(-200, -150)
    t.pendown()
    t.setheading(90)
    t.fillcolor("brown")
    t.begin_fill()
    t.forward(200)
    t.left(90)
    t.forward(20)
    t.left(90)
    t.forward(200)
    t.left(90)
    t.forward(20)
    t.end_fill()
    t.penup()
    t.left(90)
    t.forward(200)
    t.pendown()
    t.right(90)
    t.fillcolor("#608038")
    t.begin_fill()
    t.forward(20)
    for i in range(7):
        t.circle(40, 90)
        t.right(45)
    t.goto(- 200, 50)
    t.end_fill()
    t.penup()

if __name__ == "__main__":
    main()`;
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
