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
                <img src="../assets/pygame.png" class="img-fluid" style="max-width: 60%" />
                <p class="mt-3">This code will create a pygame program as shown.</p>
                <p>
                    You import a list of movies to choose from, then you enter a number in the input box and the program
                    will randomly choose a movie for you.
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
        name: 'Pygame',
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
                this.code = `import pygame
import sys
import random

pygame.init()
clock = pygame.time.Clock()
screen = pygame.display.set_mode([800, 1000])
white = (255, 255, 255)
green = (0, 255, 0)
blue = (0, 0, 128)
stack_odd = []
stack_even = []
count = 1

file = open("input.txt", "r")
lines = file.readlines()

for line in lines:
    if count % 2 == 0:
        stack_even.append(line)
    else:
        stack_odd.append(line)
    count += 1

pygame.display.set_caption("Movie Night")
icon = pygame.image.load('clapperboard.png')
pygame.display.set_icon(icon)

cinemaImg = pygame.image.load('cinema.jpg')
cinemaImg = pygame.transform.scale(cinemaImg, (400, 400))

orderBtn = pygame.image.load('orderBtn.jpg')
orderBtn = pygame.transform.scale(orderBtn, (100, 100))
btnPosition = pygame.Rect(550, 525, 100, 100)

exitBtn = pygame.image.load('exit.png')
exitBtn = pygame.transform.scale(exitBtn, (50, 50))
exitBtnPos = pygame.Rect(575, 700, 50, 50)

arrows = pygame.image.load('arrowDown.png')
arrows = pygame.transform.scale(arrows, (150, 150))

base_font = pygame.font.Font(None, 32)

text = base_font.render('Enter a number:', True, green, blue)
textRect = text.get_rect()
textRect.center = (400, 500)

randMovie = 'What movie will you watch tonight?'
movie = base_font.render(randMovie, True, green, blue)
movieRect = movie.get_rect()
movieRect.center = (400, 900)

user_text = ''
input_rect = pygame.Rect(250, 565, 200, 32)
color_active = pygame.Color('lightskyblue3')
color_passive = pygame.Color('chartreuse4')
color = color_passive
active = False

def showMovie():
    try:
        int(user_text)
        if int(user_text):
            if int(user_text) % 2 == 0:
                if len(stack_even) > 0:
                    randMovie = random.choice(stack_even)
                    stack_even.remove(randMovie)
                else:
                    if len(stack_odd) > 0:
                        randMovie = random.choice(stack_odd)
                        stack_odd.remove(randMovie)
                    else:
                        randMovie = 'No other available films'
            else:
                if len(stack_odd) > 0:
                    randMovie = random.choice(stack_odd)
                    stack_odd.remove(randMovie)
                else:
                    if len(stack_even) > 0:
                        randMovie = random.choice(stack_even)
                        stack_even.remove(randMovie)
                    else:
                        randMovie = 'No other available films'
            return base_font.render(randMovie, True, green, blue)
    except:
        randMovie = 'Please enter an integer'
        return base_font.render(randMovie, True, green, blue)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN:
            if exitBtnPos.collidepoint(event.pos):
                pygame.quit()
                sys.exit()
            if btnPosition.collidepoint(event.pos):
                movie = showMovie()
                user_text = ''
            if input_rect.collidepoint(event.pos):
                active = True
            else:
                active = False
        if event.type == pygame.KEYDOWN:
            if int(event.key) == pygame.K_RETURN or int(event.key) == pygame.K_KP_ENTER:
                movie = showMovie()
                user_text = ''
            elif event.key == pygame.K_BACKSPACE:
                user_text = user_text[:-1]
            else:
                user_text += event.unicode

    screen.fill((255, 255, 255))

    if active:
        color = color_active
    else:
        color = color_passive

    screen.blit(cinemaImg, (200, 50))
    screen.blit(orderBtn, (550, 525))
    screen.blit(arrows, (325, 650))
    screen.blit(exitBtn, (575, 700))
    screen.blit(text, textRect)
    screen.blit(movie, movieRect)

    pygame.draw.rect(screen, color, input_rect)

    text_surface = base_font.render(user_text, True, (255, 255, 255))
    screen.blit(text_surface, (input_rect.x + 5, input_rect.y + 5))
    input_rect.w = max(200, text_surface.get_width() + 10)

    pygame.display.update()
    clock.tick(60)`;
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
