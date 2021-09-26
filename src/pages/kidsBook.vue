<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row style="min-height: 100vh; background-color:#42a7f5">
      <mdb-col col="12">

        <!--CHARACTER BUILD -->

    <mdb-row class="justify-content-center mt-4" v-if="buildCharacterOptions != ''">
      <h1>Welcome to the Wonderful World of Reading!</h1>
    </mdb-row>
        <mdb-row v-if="buildCharacterOptions=='race'">
          <mdb-col col="12">
    <mdb-row class="justify-content-center mt-2">
      <h2>Please choose your character:</h2>
    </mdb-row>
    <mdb-row class="justify-content-center mt-2 ml-2">
      <mdb-col col="6">
        <h3>RACE:</h3>
        <div class="custom-control custom-radio ml-4 mt-2">
          <input type="radio" class="custom-control-input" name="race" id="humanRace" value="human" v-model="race" @change="race='human'">
          <label class="custom-control-label" for="humanRace">Human</label>
        </div>
        <div class="custom-control custom-radio ml-4">
          <input type="radio" class="custom-control-input" name="race" id="elfRace" value="elf" v-model="race" @change="race='elf'">
          <label class="custom-control-label" for="elfRace">Elf</label>
        </div>
        <div class="custom-control custom-radio ml-4">
          <input type="radio" class="custom-control-input" name="race" id="dwarfRace" value="dwarf" v-model="race" @change="race='dwarf'">
          <label class="custom-control-label" for="dwarfRace">Dwarf</label>
        </div>
      </mdb-col>
    </mdb-row>
    <mdb-row class="justify-content-center">
      <mdb-col col="6">
        <div v-if="race=='human'" class="mt-4 ml-4">
          <p>A Human is someone like you and me (unless you are an alien reading this!). They have rounded ears and are of average height.</p>
        </div>
        <div v-if="race=='elf'" class="mt-4 ml-4">
          <p>An Elf is someone who has pointed ears and is of average height.</p>
        </div>
        <div v-if="race=='dwarf'" class="mt-4 ml-4">
          <p>A Dwarf is someone who has rounded ears and is shorter than the average height.</p>
        </div>
      </mdb-col>
    </mdb-row>
        <mdb-row class="justify-content-center mt-4">
          <mdb-col col="6">
            <mdb-btn class="float-right" color="success" @click.native="changeBuildPage('sex')">Next</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
        <mdb-row v-if="buildCharacterOptions=='sex'">
          <mdb-col col="12">
            <mdb-row class="justify-content-center mt-2">
              <h2>Please choose whether you would like your character to be a Boy or a Girl:</h2>
            </mdb-row>
            <mdb-row class="justify-content-center mt-2 ml-2">
              <mdb-col col="6">
                <h3>BOY or GIRL:</h3>
                <div class="custom-control custom-radio ml-4 mt-2">
                  <input type="radio" class="custom-control-input" name="sex" id="sexGirl" value="girl" v-model="sex" @change="sex='girl'">
                  <label class="custom-control-label" for="sexGirl">Girl</label>
                </div>
                <div class="custom-control custom-radio ml-4">
                  <input type="radio" class="custom-control-input" name="sex" id="sexBoy" value="boy" v-model="sex" @change="sex='boy'">
                  <label class="custom-control-label" for="sexBoy">Boy</label>
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center mt-4">
              <mdb-col col="6">
                <mdb-btn class="float-right" color="success" @click.native="changeBuildPage('class')">Next</mdb-btn>
                <mdb-btn class="float-right" color="warning" @click.native="changeBuildPage('race')">Previous</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="buildCharacterOptions=='class'">
          <mdb-col col="12">
            <mdb-row class="justify-content-center mt-2">
              <h2>Please choose your character class:</h2>
            </mdb-row>
            <mdb-row class="justify-content-center mt-2 ml-2">
              <mdb-col col="6">
                <h3>Character Class:</h3>
                <div class="custom-control custom-radio ml-4 mt-2">
                  <input type="radio" class="custom-control-input" name="characterClass" id="warrior" value="warrior" v-model="characterClass" @change="characterClass='warrior'">
                  <label class="custom-control-label" for="warrior">Warrior</label>
                </div>
                <div class="custom-control custom-radio ml-4">
                  <input type="radio" class="custom-control-input" name="characterClass" id="mage" value="mage" v-model="characterClass" @change="characterClass='mage'">
                  <label class="custom-control-label" for="mage">Mage</label>
                </div>
                <div class="custom-control custom-radio ml-4" v-if="sex=='boy'">
                  <input type="radio" class="custom-control-input" name="characterClass" id="prince" value="prince" v-model="characterClass" @change="characterClass='prince'">
                  <label class="custom-control-label" for="prince">Prince</label>
                </div>
                <div class="custom-control custom-radio ml-4" v-if="sex=='girl'">
                  <input type="radio" class="custom-control-input" name="characterClass" id="princess" value="princess" v-model="characterClass" @change="characterClass='princess'">
                  <label class="custom-control-label" for="princess">Princess</label>
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center">
              <mdb-col col="6">
                <div v-if="characterClass=='prince'" class="mt-4 ml-4">
                  <p>A Prince is the son of a King and Queen.  He helps make decisions on how the kingdom should be ruled.  His starting gear is a crown,
                    a cape, and a pair of boots.
                  </p>
                </div>
                <div v-if="characterClass=='princess'" class="mt-4 ml-4">
                  <p>A Princess is the daughter of a King and Queen.  She helps make decisions on how the kingdom should be ruled.  Her starting gear is a tiara,
                    a cape, and a pair of slippers.
                  </p>
                </div>
                <div v-if="characterClass=='warrior'" class="mt-4 ml-4">
                  <p>A Warrior is strong and brave.  They are protectors and battle the enemies of the kingdom. Their starting gear is a wooden sword,
                    a wooden shield, and a pair of boots.
                  </p>
                </div>
                <div v-if="characterClass=='mage'" class="mt-4 ml-4">
                  <p>A Mage is someone who is wise and uses magic.  They create spells that help the kingdom in every way.  Their starting gear is a walking stick,
                    a hat, and a cape.
                  </p>
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center mt-4">
              <mdb-col col="6">
                <mdb-btn class="float-right" color="success" @click.native="changeBuildPage('name')">Next</mdb-btn>
                <mdb-btn class="float-right" color="warning" @click.native="changeBuildPage('sex')">Previous</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="buildCharacterOptions=='name'">
          <mdb-col col="12">
            <mdb-row class="justify-content-center mt-2">
              <h2>Please select a name for your character:</h2>
            </mdb-row>
            <mdb-row class="justify-content-center mt-2 ml-2">
              <mdb-col col="6">
                <h3>Character Name:</h3>
                <div class="form-group">
                  <label for="characterName">Character Name</label>
                  <input type="text" id="characterName" class="form-control" v-model="name">
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center mt-4">
              <mdb-col col="6">
                <mdb-btn class="float-right" color="success" @click.native="changeBuildPage('final')">Next</mdb-btn>
                <mdb-btn class="float-right" color="warning" @click.native="changeBuildPage('class')">Previous</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="buildCharacterOptions=='final'">
          <mdb-col col="12">
            <mdb-row class="justify-content-center mt-2">
              <h2>This is the character that you have chosen:</h2>
            </mdb-row>
            <mdb-row class="justify-content-center mt-2 ml-2">
              <mdb-col col="6">
                <h3 class="text-capitalize">Character Name: {{name}}</h3>
                <h3 class="text-capitalize">Character Race: {{race}}</h3>
                <h3 class="text-capitalize">Boy/Girl: {{sex}}</h3>
                <h3 class="text-capitalize">Character Class: {{characterClass}}</h3>
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center mt-4">
              <mdb-col col="6">
                <mdb-btn class="float-right" color="success" @click.native="changeBuildPage('firstPage')">Accept</mdb-btn>
                <mdb-btn class="float-right" color="danger" @click.native="changeBuildPage('race')">Restart</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>

        <!-- PAGE ONE -->

        <mdb-row v-if="pageSelected=='firstPage'">
          this is the first page
        </mdb-row>

        <!-- HANGMAN PAGE -->

        <mdb-row v-if="pageSelected=='hangmanPage'">
          hangman game here
        </mdb-row>

        <!-- CROSSWORD PAGE -->

        <mdb-row v-if="pageSelected=='crosswordPage'">
          crossword puzzle here
        </mdb-row>

        <!-- MINDBENDER PUZZLE PAGE -->

        <mdb-row v-if="pageSelected=='mindBenderPage'">
          mind bender puzzle here
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
export default {
  name: "KidsBook",
  data() {
    return {
      race: 'human',
      sex: 'girl',
      characterClass: 'warrior',
      name: '',
      characterBuild: true,
      buildCharacterOptions: 'race',
      pageSelected: '',
    }
  },
  methods: {
    changeBuildPage(value) {
      if(value == 'firstPage') {
        this.buildCharacterOptions = '';
        this.pageSelected = value;
      }
      else {
        this.buildCharacterOptions = value;
      }
    },
  }
}
</script>

<style scoped>

</style>