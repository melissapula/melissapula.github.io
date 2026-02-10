<template>
    <div class="h-100 m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #1a2744">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Melissa Freundschuh-Pula</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    @click="collapse = !collapse"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars" style="color: white; font-size: 1.25rem"></i>
                </button>
                <div class="collapse navbar-collapse" :class="{ show: collapse }">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" @click="closeAll">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link" @click="closeAll">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/resume" class="nav-link" @click="closeAll">Resume</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/portfolio" class="nav-link" @click="closeAll">Freelance</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/blockly" class="nav-link" @click="closeAll">Blockly</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                @click.prevent="toggleDrop('python')"
                            >
                                Python Code
                            </a>
                            <ul class="dropdown-menu" :class="{ show: pythonDrop }">
                                <li>
                                    <router-link to="/calculator" class="dropdown-item" @click="closeAll"
                                        >Calculator</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/macbeth" class="dropdown-item" @click="closeAll"
                                        >Macbeth Game</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/bullsCows" class="dropdown-item" @click="closeAll"
                                        >Bulls and Cows Game</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/sticks" class="dropdown-item" @click="closeAll"
                                        >Game of Sticks</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/pig" class="dropdown-item" @click="closeAll"
                                        >Game of Pig</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/turtle" class="dropdown-item" @click="closeAll"
                                        >Turtle Graphics</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/pygame" class="dropdown-item" @click="closeAll"
                                        >Pygame</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                @click.prevent="toggleDrop('data')"
                            >
                                Data Analysis
                            </a>
                            <ul class="dropdown-menu" :class="{ show: dataDrop }">
                                <li>
                                    <router-link to="/wordcount" class="dropdown-item" @click="closeAll"
                                        >Word Count</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/imageclustering" class="dropdown-item" @click="closeAll"
                                        >Image Clustering</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/randomforestclassifier" class="dropdown-item" @click="closeAll"
                                        >Random Forest Classifier</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                @click.prevent="toggleDrop('examples')"
                            >
                                Games
                            </a>
                            <ul class="dropdown-menu" :class="{ show: examplesDrop }">
                                <li>
                                    <router-link to="/hangman" class="dropdown-item" @click="closeAll"
                                        >Hangman</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/bugsGame" class="dropdown-item" @click="closeAll"
                                        >Bugs Game</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/verify" class="dropdown-item" @click="closeAll"
                                        >Simple Calculator</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                @click.prevent="toggleDrop('blog')"
                            >
                                Blog
                            </a>
                            <ul class="dropdown-menu" :class="{ show: blogDrop }">
                                <li>
                                    <router-link to="/parentingBlog" class="dropdown-item" @click="closeAll"
                                        >Parenting</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/fitnessBlog" class="dropdown-item" @click="closeAll"
                                        >Fitness</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link" @click="closeAll">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                collapse: false,
                pythonDrop: false,
                dataDrop: false,
                examplesDrop: false,
                blogDrop: false
            };
        },
        methods: {
            toggleDrop(name) {
                const wasOpen = this[name + 'Drop'];
                this.closeDropdowns();
                this[name + 'Drop'] = !wasOpen;
            },
            closeDropdowns() {
                this.pythonDrop = false;
                this.dataDrop = false;
                this.examplesDrop = false;
                this.blogDrop = false;
            },
            closeAll() {
                this.closeDropdowns();
                this.collapse = false;
            }
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

    html,
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
    }
    .white-text {
        color: white !important;
    }
    .navbar-toggler {
        border-color: rgba(255, 255, 255, 0.5);
    }
</style>
