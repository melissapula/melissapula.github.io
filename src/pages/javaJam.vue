<template>
    <MDBContainer class="h-100 mt-0 pt-0" fluid>
        <MDBRow id="javaJam">
            <MDBCol>
                <div id="wrapper">
                    <h1 class="mb-0">JavaJam Coffee House</h1>
                    <MDBRow>
                        <MDBCol col="2">
                            <a
                                href="#"
                                @click.prevent="view = 'home'"
                                class="noBullets"
                                style="
                                    color: #fcebb6;
                                    font-size: 1.5em;
                                    padding-top: 10px;
                                    text-align: center;
                                    font-weight: bold;
                                "
                                >Home</a
                            >
                            <a
                                href="#"
                                @click.prevent="view = 'menu'"
                                class="noBullets"
                                style="
                                    color: #fcebb6;
                                    font-size: 1.5em;
                                    padding-top: 10px;
                                    text-align: center;
                                    font-weight: bold;
                                "
                                >Menu</a
                            >
                            <a
                                href="#"
                                @click.prevent="view = 'music'"
                                class="noBullets"
                                style="
                                    color: #fcebb6;
                                    font-size: 1.5em;
                                    padding-top: 10px;
                                    text-align: center;
                                    font-weight: bold;
                                "
                                >Music</a
                            >
                            <a
                                href="#"
                                @click.prevent="view = 'jobs'"
                                class="noBullets"
                                style="
                                    color: #fcebb6;
                                    font-size: 1.5em;
                                    padding-top: 10px;
                                    text-align: center;
                                    font-weight: bold;
                                "
                                >Jobs</a
                            >
                        </MDBCol>
                        <MDBCol col="10" class="ps-0">
                            <main class="mt-2">
                                <MDBRow v-if="view == 'home'">
                                    <MDBCol col="12">
                                        <div id="heroroad"></div>
                                        <h2 class="pt-4">Follow the Winding Road to JavaJam</h2>
                                        <p class="pt-2">
                                            We're a little out of the way, but take a drive down Route 42 to JavaJam
                                            today! Indulge in our locally roasted free-trade coffee and home-made
                                            pastries. You'll feel right at home at JavaJam!
                                        </p>
                                        <h3 class="pt-2">JavaJam Coffee House features:</h3>
                                        <ul>
                                            <li>Specialty Coffee and Tea</li>
                                            <li>Bagels, Muffins, and Organic Snacks</li>
                                            <li>Music and Poetry Readings</li>
                                            <li>Open Mic Night</li>
                                        </ul>
                                        <p>
                                            54321 Route 42<br />
                                            Ellison Bay, WI 54210<br />
                                            <a id="mobile" href="tel:888-555-5555">888-555-5555</a>
                                            <span id="desktop">888-555-5555</span>
                                        </p>
                                        <br />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow v-if="view == 'menu'">
                                    <MDBCol col="12">
                                        <div id="heromugs"></div>
                                        <h2 class="pt-4">Coffee at JavaJam</h2>
                                        <p>
                                            Indulge in our locally roasted free-trade coffee and enjoy the aroma, the
                                            smooth tast, the caffeine! Join our Mug Club and get a 10% discount on each
                                            cup of coffee you purchase - ask the barista for details.
                                        </p>
                                        <table>
                                            <tr>
                                                <th><strong>Just Java</strong></th>
                                                <td>
                                                    Regular house blend, decaffeinated coffee, or flavor of the day.<br />Endless
                                                    Cup $2.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><strong>Cafe au Lait</strong></th>
                                                <td>
                                                    House blended coffee infused into a smoothe, steamed milk.<br />Single
                                                    $2.00 Double $3.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><strong>Iced Cappuccino</strong></th>
                                                <td>
                                                    Sweetened espresso blended with icy-cold milk and served in a
                                                    chilled glass.<br />Single $4.75 Double $5.75
                                                </td>
                                            </tr>
                                        </table>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow v-if="view == 'music'">
                                    <MDBCol col="12">
                                        <div id="heroguitar"></div>
                                        <h2 class="pt-4">Music at JavaJam</h2>
                                        <p>
                                            The first Friday night each month at JavaJam is a special night. Join us
                                            from 8 pm to 11 pm for some
                                            <a href="#" onmouseover="alert('Concerts sell out quickly so act fast!')"
                                                >music you won't want to miss!</a
                                            >
                                        </p>
                                        <h4>January</h4>
                                        <div class="details">
                                            <a href="melanie.jpg"
                                                ><img
                                                    src="../assets/melaniethumb.jpg"
                                                    alt="melanie thumb picture"
                                                    style="height: 10%; weight: 10%" /></a
                                            >Melanie Morris entertains with her melodic fold style.
                                        </div>
                                        <h4>February</h4>
                                        <div class="details">
                                            <a href="greg.jpg"
                                                ><img
                                                    src="../assets/gregthumb.jpg"
                                                    alt="greg thumb picture"
                                                    style="height: 10%; weight: 10%" /></a
                                            >Tahoe Greg is back from his tour. New songs. New stories.
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow v-if="view == 'jobs'">
                                    <MDBCol col="12">
                                        <h2 class="pt-4">Jobs at JavaJam</h2>
                                        <p>
                                            Want to work at JavaJam? Fill out the form below to start your application.
                                            Required fields are marked with an asterisk (*).
                                        </p>
                                        <form action="http://webdevbasics.net/scripts/javajam8.php" method="post">
                                            <label for="myName">*Name:</label>
                                            <input id="myName" name="myName" type="text" required />
                                            <label for="myEmail">*E-mail:</label>
                                            <input id="myEmail" type="email" name="myEmail" required />
                                            <label for="myExperience">*Experience:</label>
                                            <textarea
                                                id="myExperience"
                                                rows="2"
                                                cols="20"
                                                name="myExperience"
                                                type="text"
                                                required
                                            ></textarea>
                                            <input id="mySubmit" type="submit" value="Apply Now" />
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </main>
                        </MDBCol>
                    </MDBRow>
                    <footer>
                        Copyright &copy; 2016 JavaJam Coffee House<br />
                        <a href="mailto:melissa_m_24@yahoo.com">Melissa Pula</a>
                    </footer>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
    export default {
        name: 'JavaJam',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol
        },
        data() {
            return {
                view: 'home'
            };
        }
    };
</script>

<style scoped>
    .noBullets {
        list-style-type: none;
    }
    #javaJam {
        background-image: url('../assets/background.gif');
        background-color: #fcebb6;
        color: #221811;
        text-family: Verdana, Arial, sans-serif;
        min-height: 100vh;
    }
    h1 {
        height: 150px;
        background-image: url('../assets/javajamlogo.jpg');
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #d2b48c;
        margin-bottom: 0;
        padding-top: 45px;
        padding-left: 220px;
        font-size: 3em;
    }
    mbd-nav-item {
        float: left;
        width: 200px;
        font-size: 1.5em;
        padding-top: 10px;
        text-align: center;
        font-weight: bold;
        color: #fcebb6;
    }
    nav a {
        text-decoration: none;
    }
    footer {
        padding-bottom: 10px;
        border-top: solid #221811;
        background-color: #d2b48c;
        font-size: 0.6em;
        text-align: center;
        font-style: italic;
    }
    #wrapper {
        background-color: #231814;
        min-width: 900px;
        max-width: 1280px;
        box-shadow: 1px 1px 1px;
        margin-left: auto;
        margin-right: auto;
    }
    h4 {
        text-transform: uppercase;
        border-bottom: thin;
        padding-bottom: 0;
        clear: left;
        background-color: #d2b48c;
        font-size: 1.2em;
        padding-left: 10px;
    }
    main {
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        background-color: #fef6c2;
        padding-bottom: 1em;
        display: block;
    }
    .details {
        overflow: auto;
        padding-left: 20%;
        padding-right: 20%;
    }
    img {
        padding-left: 10px;
        padding-right: 10px;
    }
    * {
        box-sizing: border-box;
    }
    #heroroad {
        background-image: url('../assets/heroroad.jpg');
        background-size: 100%;
        height: 250px;
    }
    #heromugs {
        background-image: url('../assets/heromugs.jpg');
        background-size: 100%;
        height: 250px;
    }
    #heroguitar {
        background-image: url('../assets/heroguitar.jpg');
        background-size: 100%;
        height: 250px;
    }
    main h2,
    h3,
    h4,
    p,
    ul,
    dl {
        padding-left: 3em;
        padding-right: 2em;
    }
    nav a:link {
        color: #fef6c2;
    }
    nav a:visited {
        color: #d2b48c;
    }
    nav a:hover {
        color: #cc9933;
    }
    nav ul {
        padding-left: 2em;
        list-style-type: none;
    }
    .floatleft {
        float: left;
        padding-right: 20px;
        padding-bottom: 20px;
    }
    header,
    nav,
    main,
    footer {
        display: block;
    }
    #mobile {
        display: none;
    }
    #desktop {
        display: inline;
    }
    table {
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        border-spacing: 0;
        background-color: #ffffcc;
    }
    table td {
        padding: 10px;
    }
    table th {
        padding: 10px;
    }
    tr:nth-of-type(odd) {
        background-color: #d2b48c;
    }
    form {
        padding: 2em;
    }
    label {
        float: left;
        display: block;
        text-alignment: right;
        width: 8em;
        padding-right: 1em;
    }
    input,
    textarea {
        display: block;
        margin-bottom: 1em;
    }
    #mySubmit {
        margin-left: 9.5em;
    }
    @media only screen and (max-width: 1024px) {
        body {
            margin: 0;
            background-image: none;
        }
        #wrapper {
            width: auto;
            min-width: 0;
            margin: 0;
            padding: 0;
            box-shadow: none;
        }
        h1 {
            border-bottom: 5px solid #fef6c2;
            margin-top: 0;
            margin-bottom: 1em;
            padding-top: 1em;
            padding-bottom: 1em;
            font-size: 2.5em;
        }
        nav {
            float: none;
            width: auto;
            padding-top: 0;
            margin: 10px;
            font-size: 1.3em;
        }
        nav li {
            display: inline-block;
        }
        nav a {
            padding: 1em;
            width: 8em;
            font-weight: bold;
            border-style: none;
        }
        nav ul {
            padding: 0;
            margin: 0;
        }
        #heroroad,
        #heromugs,
        #heroguitar {
            margin: 0;
            padding: 0;
        }
        main {
            padding: 0;
            margin: 0;
            font-size: 90%;
        }
    }
    @media only screen and (max-width: 768px) {
        h1 {
            height: 128px;
            font-size: 2em;
            text-align: center;
            padding-left: 0;
        }
        nav {
            margin: 0;
        }
        nav a {
            display: block;
            padding: 0.2em;
            width: auto;
            border-bottom: 1px #fef6c2;
        }
        nav li {
            display: block;
        }
        main {
            padding-top: 1px;
        }
        h2 {
            padding-top: 0.5em;
            padding-right: 0;
            padding-bottom: 0;
            padding-left: 0.5em;
            margin-right: 0.5em;
        }
        .details {
            padding-right: 0;
            padding-left: 0;
        }
        #heroroad,
        #heromugs,
        #heroguitar {
            background-image: none;
            height: auto;
        }
        .floatleft {
            padding-right: 0.5em;
            padding-left: 0.5em;
        }
        #mobile {
            display: inline;
        }
        #desktop {
            display: none;
        }
    }
</style>
