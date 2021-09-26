<template>
  <mdb-container class="mt-0 pt-0" fluid style="height: 100vh">
    <mdb-row style="background-color: #EFC9AF; min-height: 100vh">
      <mdb-col>
        <mdb-row class="justify-content-center">
        <p id="gameTitle">H A N G M A N</p>
        </mdb-row>
        <mdb-row class="justify-content-center">
          <img :src="images[wrongLetters.length]" class="img-fluid">
        </mdb-row>
        <mdb-row class="justify-content-center">
        <p id="rongLetters">Wrong Guesses: {{wrongLetters.toUpperCase()}}</p>
        </mdb-row>
        <mdb-row class="justify-content-center">
        <div id="guessDiv">
          <input ref="inputBox" type="text" id="guess" v-model="guess" @keyup.enter="btnClik_onclick('enter')">
          <mdb-btn id="button" type="button" @click.native="btnClik_onclick('click')">Guess</mdb-btn>
        </div>
        </mdb-row>
        <mdb-row class="justify-content-center">
        <p id="secretWord">Secret Word: <span id="showWord"></span></p>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import image0 from "../assets/H0.jpg"
import image1 from "../assets/H1.jpg"
import image2 from "../assets/H2.jpg"
import image3 from "../assets/H3.jpg"
import image4 from "../assets/H4.jpg"
import image5 from "../assets/H5.jpg"
import image6 from "../assets/H6.jpg"
import image7 from "../assets/H7.jpg"
import image8 from "../assets/H8.jpg"
import image9 from "../assets/H9.jpg"
import image10 from "../assets/H10.jpg"
import image11 from "../assets/H11.jpg"
import image12 from "../assets/H12.jpg"
import image13 from "../assets/H13.jpg"
import image14 from "../assets/H14.jpg"
export default {
  name: "Hangman",
  data() {
    return {
      secretWord: 'hangmanrox',
      shownWord: '',
      wrongLetters: '',
      rightLetters: '',
      guess: '',
      imageName: '',
      images: [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14],
    }
  },
  methods: {
    getInit() {
      this.wordBlendr(this.secretWord, this.guess);
      this.focusOnInbox();
    },
    btnClik_onclick(value) {
  if(value == 'click' || value == 'enter') {
    this.isValid();
  }
  this.guess = '';
  this.focusOnInbox();
},

isValid() {
  if(this.guess.length == 1 && /^[A-Za-z]+$/.test(this.guess)){
    if(this.rightLetters.includes(this.guess) || this.wrongLetters.includes(this.guess)) {
      alert("You have already guessed this letter");
    }
    else {
      if(this.secretWord.includes(this.guess)) {
        this.rightLetters += this.guess;
        this.wordBlendr(this.secretWord, this.rightLetters);
      }
      else{
        this.wrongLetters += this.guess;
        if(this.wrongLetters.length >= 14) {
          alert("You lose");
        }
      }
    }
    return true;
  }
  else {
    alert("Please enter a valid letter");
    return false;
  }
},

wordBlendr(wrd1, wrd2='') {
  let pos;
  let ary = new Array();
  let len2 = wrd2.length;
  let len1 = wrd1.length;
  this.shownWord = '';
  ary.length = len1;
  for (let i = 0; i < len1; i++) {
    ary[i] = "*";
  }
  for (let j = 0; j < len2; j++) {
    let char = wrd2.charAt(j);
    pos = wrd1.indexOf(char);
    while (pos != -1) {
      ary[pos] = char;
      pos = wrd1.indexOf(char, pos+1);
    }
  }

  for (let k = 0; k < len1; k++)  {
    this.shownWord += ary[k].toUpperCase();
    this.shownWord += ' ';
  }
  if(!ary.includes("*")) {
    alert("Congratulation, you win!")
  }
  document.getElementById("showWord").innerHTML = this.shownWord;
},

focusOnInbox() {
  const inputBoxRef = this.$refs.inputBox;
  inputBoxRef.focus();
},
  },
  mounted() {
    this.getInit();
  },
}
</script>

<style scoped>
#gameTitle {
  font-size: 40px;
  color: green;
  text-align: center;
  margin-top: 2px;
}
body {
  background-color: lightblue;
}
#guessDiv {
  text-align: center;
}
#showWord {
  font-size: 40px;
  color: yellow;
  text-align: center;
}
#secretWord {
  font-size: 40px;
  color: coral;
  text-align: center;
}
#rongLetters {
  font-size: 40px;
  text-align: center;
  color: red;
}
#guess {
  height: 20px;
  width: auto;
}
</style>