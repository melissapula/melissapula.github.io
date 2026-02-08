import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../pages/about.vue';
import Home from '../pages/home.vue';
import FishCreek from '../pages/fishCreek.vue';
import Resume from '../pages/resume.vue';
import Pacific from '../pages/pacific.vue';
import BugsGame from '../pages/bugsGame.vue';
import JavaJam from '../pages/javaJam.vue';
import Hangman from '../pages/hangman.vue';
import ParentingBlog from '../pages/parentingBlog.vue';
import FitnessBlog from '../pages/fitnessBlog.vue';
import TrainingSession from '../pages/trainingSession.vue';
import Midterm from '../pages/midterm.vue';
import VeteransHomePage from '../pages/VeteransHomePage.vue';
import FinalPractice from '../pages/finalPractice.vue';
import Final from '../pages/final.vue';
import KidsBook from '../pages/kidsBook.vue';
import Calculator from '../pages/calculator.vue';
import Macbeth from '../pages/macbeth.vue';
import BullsCows from '../pages/bullsCows.vue';
import Sticks from '../pages/sticks.vue';
import Pig from '../pages/pig.vue';
import Turtle from '../pages/turtle.vue';
import Pygame from '../pages/pygame.vue';
import verify from '../pages/verify.vue';
import LibraryHome from '../library-management-system/libraryHome.vue';
import LibraryBooks from '../library-management-system/libraryBooks.vue';
import LibraryCheckouts from '../library-management-system/libraryCheckouts.vue';
import LibraryReturns from '../library-management-system/libraryReturns.vue';
import LibraryUsers from '../library-management-system/libraryUsers.vue';
import TicTacToe from '../pages/ticTacToe.vue';
import WordCount from '../pages/wordcount.vue';
import ImageClustering from '../pages/imageClustering.vue';
import RandomForestClassifier from '../pages/randomForestClassifier.vue';
import Portfolio from '../pages/portfolio.vue';
import Blockly from '../pages/blockly.vue';
import Contact from '../pages/contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/fishcreek',
        name: 'FishCreek',
        component: FishCreek
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume
    },
    {
        path: '/pacific',
        name: 'Pacific',
        component: Pacific
    },
    {
        path: '/bugsGame',
        name: 'BugsGame',
        component: BugsGame
    },
    {
        path: '/javaJam',
        name: 'JavaJam',
        component: JavaJam
    },
    {
        path: '/hangman',
        name: 'Hangman',
        component: Hangman
    },
    {
        path: '/parentingBlog',
        name: 'ParentingBlog',
        component: ParentingBlog
    },
    {
        path: '/fitnessBlog',
        name: 'FitnessBlog',
        component: FitnessBlog
    },
    {
        path: '/trainingSession',
        name: 'trainingSession',
        component: TrainingSession
    },
    {
        path: '/midterm',
        name: 'Midterm',
        component: Midterm
    },
    {
        path: '/VeteransHomePage',
        name: 'VeteransHomePage',
        component: VeteransHomePage
    },
    {
        path: '/finalPractice',
        name: 'FinalPractice',
        component: FinalPractice
    },
    {
        path: '/final',
        name: 'Final',
        component: Final
    },
    {
        path: '/kidsBook',
        name: 'KidsBook',
        component: KidsBook
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator
    },
    {
        path: '/macbeth',
        name: 'Macbeth',
        component: Macbeth
    },
    {
        path: '/bullsCows',
        name: 'BullsCows',
        component: BullsCows
    },
    {
        path: '/sticks',
        name: 'Sticks',
        component: Sticks
    },
    {
        path: '/pig',
        name: 'Pig',
        component: Pig
    },
    {
        path: '/turtle',
        name: 'Turtle',
        component: Turtle
    },
    {
        path: '/pygame',
        name: 'Pygame',
        component: Pygame
    },
    {
        path: '/verify',
        name: 'verify',
        component: verify
    },
    {
        path: '/libraryhome',
        name: 'LibraryHome',
        component: LibraryHome
    },
    {
        path: '/librarybooks',
        name: 'LibraryBooks',
        component: LibraryBooks
    },
    {
        path: '/librarycheckouts',
        name: 'LibraryCheckouts',
        component: LibraryCheckouts
    },
    {
        path: '/libraryreturns',
        name: 'LibraryReturns',
        component: LibraryReturns
    },
    {
        path: '/libraryusers',
        name: 'LibraryUsers',
        component: LibraryUsers
    },
    {
        path: '/tictactoe',
        name: 'TicTacToe',
        component: TicTacToe
    },
    {
        path: '/wordcount',
        name: 'WordCount',
        component: WordCount
    },
    {
        path: '/imageclustering',
        name: 'ImageClustering',
        component: ImageClustering
    },
    {
        path: '/randomforestclassifier',
        name: 'RandomForestClassifier',
        component: RandomForestClassifier
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/blockly',
        name: 'Blockly',
        component: Blockly
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
