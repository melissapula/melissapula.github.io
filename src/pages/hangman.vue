<template>
    <MDBContainer class="mt-0 pt-0" fluid>
        <MDBRow
            style="background-color: #f0f2f5; height: calc(100vh - 56px)"
            class="justify-content-center align-items-center"
        >
            <MDBCol md="8" lg="5">
                <div id="gameCard">
                    <p id="gameTitle">H A N G M A N</p>
                    <div class="text-center">
                        <img
                            :src="images[wrongLetters.length]"
                            class="img-fluid"
                            style="max-height: 35vh; object-fit: contain"
                        />
                    </div>
                    <p id="rongLetters">Wrong Guesses: {{ wrongLetters.toUpperCase() }}</p>
                    <p id="secretWord">Secret Word: <span id="showWord"></span></p>
                    <div id="guessDiv">
                        <input
                            ref="inputBox"
                            type="text"
                            id="guess"
                            v-model="guess"
                            @keyup.enter="btnClik_onclick('enter')"
                        />
                        <MDBBtn id="button" type="button" @click="btnClik_onclick('click')">Guess</MDBBtn>
                    </div>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-vue-ui-kit';
    import image0 from '../assets/H0.jpg';
    import image1 from '../assets/H1.jpg';
    import image2 from '../assets/H2.jpg';
    import image3 from '../assets/H3.jpg';
    import image4 from '../assets/H4.jpg';
    import image5 from '../assets/H5.jpg';
    import image6 from '../assets/H6.jpg';
    import image7 from '../assets/H7.jpg';
    import image8 from '../assets/H8.jpg';
    import image9 from '../assets/H9.jpg';
    import image10 from '../assets/H10.jpg';
    import image11 from '../assets/H11.jpg';
    import image12 from '../assets/H12.jpg';
    import image13 from '../assets/H13.jpg';
    import image14 from '../assets/H14.jpg';
    export default {
        name: 'Hangman',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBBtn
        },
        data() {
            return {
                secretWord: 'hangmanrox',
                shownWord: '',
                wrongLetters: '',
                rightLetters: '',
                guess: '',
                imageName: '',
                images: [
                    image0,
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    image6,
                    image7,
                    image8,
                    image9,
                    image10,
                    image11,
                    image12,
                    image13,
                    image14
                ]
            };
        },
        methods: {
            getInit() {
                this.wordBlendr(this.secretWord, this.guess);
                this.focusOnInbox();
            },
            btnClik_onclick(value) {
                if (value == 'click' || value == 'enter') {
                    this.isValid();
                }
                this.guess = '';
                this.focusOnInbox();
            },

            isValid() {
                if (this.guess.length == 1 && /^[A-Za-z]+$/.test(this.guess)) {
                    if (this.rightLetters.includes(this.guess) || this.wrongLetters.includes(this.guess)) {
                        alert('You have already guessed this letter');
                    } else {
                        if (this.secretWord.includes(this.guess)) {
                            this.rightLetters += this.guess;
                            this.wordBlendr(this.secretWord, this.rightLetters);
                        } else {
                            this.wrongLetters += this.guess;
                            if (this.wrongLetters.length >= 14) {
                                alert('You lose');
                            }
                        }
                    }
                    return true;
                } else {
                    alert('Please enter a valid letter');
                    return false;
                }
            },

            wordBlendr(wrd1, wrd2 = '') {
                let pos;
                let ary = new Array();
                let len2 = wrd2.length;
                let len1 = wrd1.length;
                this.shownWord = '';
                ary.length = len1;
                for (let i = 0; i < len1; i++) {
                    ary[i] = '*';
                }
                for (let j = 0; j < len2; j++) {
                    let char = wrd2.charAt(j);
                    pos = wrd1.indexOf(char);
                    while (pos != -1) {
                        ary[pos] = char;
                        pos = wrd1.indexOf(char, pos + 1);
                    }
                }

                for (let k = 0; k < len1; k++) {
                    this.shownWord += ary[k].toUpperCase();
                    this.shownWord += ' ';
                }
                if (!ary.includes('*')) {
                    alert('Congratulation, you win!');
                }
                document.getElementById('showWord').innerHTML = this.shownWord;
            },

            focusOnInbox() {
                const inputBoxRef = this.$refs.inputBox;
                inputBoxRef.focus();
            }
        },
        mounted() {
            this.getInit();
        }
    };
</script>

<style scoped>
    #gameCard {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        padding: 2rem;
    }
    #gameTitle {
        font-size: 36px;
        font-weight: bold;
        color: #1a2744;
        text-align: center;
        margin-bottom: 0.5rem;
        letter-spacing: 4px;
    }
    #guessDiv {
        text-align: center;
        margin-top: 1rem;
    }
    #showWord {
        font-size: 32px;
        color: #2980b9;
        letter-spacing: 6px;
    }
    #secretWord {
        font-size: 24px;
        color: #1a2744;
        text-align: center;
        margin-bottom: 0;
    }
    #rongLetters {
        font-size: 18px;
        text-align: center;
        color: #c0392b;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }
    #guess {
        height: 36px;
        width: 60px;
        text-align: center;
        font-size: 20px;
        border: 2px solid #ccc;
        border-radius: 6px;
        margin-right: 0.5rem;
    }
</style>
