<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow style="min-height: 100vh; background-color: #f0f2f5">
            <MDBCol col="12">
                <!--CHARACTER BUILD -->

                <MDBRow class="justify-content-center mt-4" v-if="buildCharacterOptions != ''">
                    <h1>Welcome to the Wonderful World of Reading!</h1>
                </MDBRow>
                <MDBRow v-if="buildCharacterOptions == 'race'">
                    <MDBCol col="12">
                        <MDBRow class="justify-content-center mt-2">
                            <h2>Please choose your character:</h2>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-2 ms-2">
                            <MDBCol col="6">
                                <h3>RACE:</h3>
                                <div class="form-check ms-4 mt-2">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="race"
                                        id="humanRace"
                                        value="human"
                                        v-model="race"
                                        @change="race = 'human'"
                                    />
                                    <label class="form-check-label" for="humanRace">Human</label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="race"
                                        id="elfRace"
                                        value="elf"
                                        v-model="race"
                                        @change="race = 'elf'"
                                    />
                                    <label class="form-check-label" for="elfRace">Elf</label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="race"
                                        id="dwarfRace"
                                        value="dwarf"
                                        v-model="race"
                                        @change="race = 'dwarf'"
                                    />
                                    <label class="form-check-label" for="dwarfRace">Dwarf</label>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center">
                            <MDBCol col="6">
                                <div v-if="race == 'human'" class="mt-4 ms-4">
                                    <p>
                                        A Human is someone like you and me (unless you are an alien reading this!). They
                                        have rounded ears and are of average height.
                                    </p>
                                </div>
                                <div v-if="race == 'elf'" class="mt-4 ms-4">
                                    <p>An Elf is someone who has pointed ears and is of average height.</p>
                                </div>
                                <div v-if="race == 'dwarf'" class="mt-4 ms-4">
                                    <p>
                                        A Dwarf is someone who has rounded ears and is shorter than the average height.
                                    </p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-4">
                            <MDBCol col="6">
                                <MDBBtn class="float-end" color="success" @click="changeBuildPage('sex')">Next</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow v-if="buildCharacterOptions == 'sex'">
                    <MDBCol col="12">
                        <MDBRow class="justify-content-center mt-2">
                            <h2>Please choose whether you would like your character to be a Boy or a Girl:</h2>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-2 ms-2">
                            <MDBCol col="6">
                                <h3>BOY or GIRL:</h3>
                                <div class="form-check ms-4 mt-2">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="sex"
                                        id="sexGirl"
                                        value="girl"
                                        v-model="sex"
                                        @change="sex = 'girl'"
                                    />
                                    <label class="form-check-label" for="sexGirl">Girl</label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="sex"
                                        id="sexBoy"
                                        value="boy"
                                        v-model="sex"
                                        @change="sex = 'boy'"
                                    />
                                    <label class="form-check-label" for="sexBoy">Boy</label>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-4">
                            <MDBCol col="6">
                                <MDBBtn class="float-end" color="success" @click="changeBuildPage('class')"
                                    >Next</MDBBtn
                                >
                                <MDBBtn class="float-end" color="warning" @click="changeBuildPage('race')"
                                    >Previous</MDBBtn
                                >
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow v-if="buildCharacterOptions == 'class'">
                    <MDBCol col="12">
                        <MDBRow class="justify-content-center mt-2">
                            <h2>Please choose your character class:</h2>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-2 ms-2">
                            <MDBCol col="6">
                                <h3>Character Class:</h3>
                                <div class="form-check ms-4 mt-2">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="characterClass"
                                        id="warrior"
                                        value="warrior"
                                        v-model="characterClass"
                                        @change="characterClass = 'warrior'"
                                    />
                                    <label class="form-check-label" for="warrior">Warrior</label>
                                </div>
                                <div class="form-check ms-4">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="characterClass"
                                        id="mage"
                                        value="mage"
                                        v-model="characterClass"
                                        @change="characterClass = 'mage'"
                                    />
                                    <label class="form-check-label" for="mage">Mage</label>
                                </div>
                                <div class="form-check ms-4" v-if="sex == 'boy'">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="characterClass"
                                        id="prince"
                                        value="prince"
                                        v-model="characterClass"
                                        @change="characterClass = 'prince'"
                                    />
                                    <label class="form-check-label" for="prince">Prince</label>
                                </div>
                                <div class="form-check ms-4" v-if="sex == 'girl'">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        name="characterClass"
                                        id="princess"
                                        value="princess"
                                        v-model="characterClass"
                                        @change="characterClass = 'princess'"
                                    />
                                    <label class="form-check-label" for="princess">Princess</label>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center">
                            <MDBCol col="6">
                                <div v-if="characterClass == 'prince'" class="mt-4 ms-4">
                                    <p>
                                        A Prince is the son of a King and Queen. He helps make decisions on how the
                                        kingdom should be ruled. His starting gear is a crown, a cape, and a pair of
                                        boots.
                                    </p>
                                </div>
                                <div v-if="characterClass == 'princess'" class="mt-4 ms-4">
                                    <p>
                                        A Princess is the daughter of a King and Queen. She helps make decisions on how
                                        the kingdom should be ruled. Her starting gear is a tiara, a cape, and a pair of
                                        slippers.
                                    </p>
                                </div>
                                <div v-if="characterClass == 'warrior'" class="mt-4 ms-4">
                                    <p>
                                        A Warrior is strong and brave. They are protectors and battle the enemies of the
                                        kingdom. Their starting gear is a wooden sword, a wooden shield, and a pair of
                                        boots.
                                    </p>
                                </div>
                                <div v-if="characterClass == 'mage'" class="mt-4 ms-4">
                                    <p>
                                        A Mage is someone who is wise and uses magic. They create spells that help the
                                        kingdom in every way. Their starting gear is a walking stick, a hat, and a cape.
                                    </p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-4">
                            <MDBCol col="6">
                                <MDBBtn class="float-end" color="success" @click="changeBuildPage('name')">Next</MDBBtn>
                                <MDBBtn class="float-end" color="warning" @click="changeBuildPage('sex')"
                                    >Previous</MDBBtn
                                >
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow v-if="buildCharacterOptions == 'name'">
                    <MDBCol col="12">
                        <MDBRow class="justify-content-center mt-2">
                            <h2>Please select a name for your character:</h2>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-2 ms-2">
                            <MDBCol col="6">
                                <h3>Character Name:</h3>
                                <div class="form-group">
                                    <label for="characterName">Character Name</label>
                                    <input type="text" id="characterName" class="form-control" v-model="name" />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-4">
                            <MDBCol col="6">
                                <MDBBtn class="float-end" color="success" @click="changeBuildPage('final')"
                                    >Next</MDBBtn
                                >
                                <MDBBtn class="float-end" color="warning" @click="changeBuildPage('class')"
                                    >Previous</MDBBtn
                                >
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow v-if="buildCharacterOptions == 'final'">
                    <MDBCol col="12">
                        <MDBRow class="justify-content-center mt-2">
                            <h2>This is the character that you have chosen:</h2>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-2 ms-2">
                            <MDBCol col="6">
                                <h3 class="text-capitalize">Character Name: {{ name }}</h3>
                                <h3 class="text-capitalize">Character Race: {{ race }}</h3>
                                <h3 class="text-capitalize">Boy/Girl: {{ sex }}</h3>
                                <h3 class="text-capitalize">Character Class: {{ characterClass }}</h3>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow class="justify-content-center mt-4">
                            <MDBCol col="6">
                                <MDBBtn class="float-end" color="success" @click="changeBuildPage('firstPage')"
                                    >Accept</MDBBtn
                                >
                                <MDBBtn class="float-end" color="danger" @click="changeBuildPage('race')"
                                    >Restart</MDBBtn
                                >
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                <!-- PAGE ONE -->

                <MDBRow v-if="pageSelected == 'firstPage'"> this is the first page </MDBRow>

                <!-- HANGMAN PAGE -->

                <MDBRow v-if="pageSelected == 'hangmanPage'"> hangman game here </MDBRow>

                <!-- CROSSWORD PAGE -->

                <MDBRow v-if="pageSelected == 'crosswordPage'"> crossword puzzle here </MDBRow>

                <!-- MINDBENDER PUZZLE PAGE -->

                <MDBRow v-if="pageSelected == 'mindBenderPage'"> mind bender puzzle here </MDBRow>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-vue-ui-kit';
    export default {
        name: 'KidsBook',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBBtn
        },
        data() {
            return {
                race: 'human',
                sex: 'girl',
                characterClass: 'warrior',
                name: '',
                characterBuild: true,
                buildCharacterOptions: 'race',
                pageSelected: ''
            };
        },
        methods: {
            changeBuildPage(value) {
                if (value == 'firstPage') {
                    this.buildCharacterOptions = '';
                    this.pageSelected = value;
                } else {
                    this.buildCharacterOptions = value;
                }
            }
        }
    };
</script>

<style scoped></style>
