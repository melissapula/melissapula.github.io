<template>
  <mdb-container class="mt-0 pt-0" fluid style="height: 100vh">
    <mdb-row id="pacific">
      <mdb-col>
    <div id="wrapper">
      <h1 class="mb-0">Pacific Trails Resort</h1>
      <mdb-row>
        <mdb-col lg="2" sm="12">
          <mdb-nav-item active @click.native="view = 'home'" class="noBullets">Home</mdb-nav-item>
          <mdb-nav-item @click.native="view = 'yurts'" class="noBullets">Yurts</mdb-nav-item>
          <mdb-nav-item @click.native="view = 'activities'" class="noBullets">Activities</mdb-nav-item>
          <mdb-nav-item @click.native="view = 'reservations'" class="noBullets">Reservations</mdb-nav-item>
        </mdb-col>
        <mdb-col>
      <main>
        <mdb-row v-if="view == 'home'" id="homehero">
          <mdb-col>
            <mdb-row><img :src="coast" class="img-fluid"></mdb-row>
            <mdb-row><h2>Enjoy Nature in Luxury</h2></mdb-row>
          <mdb-row>
            <p><span class="resort">Pacific Trails Resort</span> offers a special lodging experience on the California North<br>
              Coast.  Relax in serenity with panoramic views of the Pacific Ocean.</p>
          </mdb-row>
            <mdb-row>
          <ul>
            <li>Private yurts with decks overlooking the ocean</li>
            <li>Activities lodge with fireplace and gift shop</li>
            <li>Nightly fine dining at the Overlook Cafe</li>
            <li>Heated outdoor pool and whirlpool</li>
            <li>Guided hiking tours of the redwoods</li>
          </ul>
            </mdb-row>
          <mdb-row>
            <mdb-col col="12">
            <mdb-row><span class="resort">Pacific Trails Resort</span></mdb-row>
            <mdb-row>12010 Pacific Trails Resort</mdb-row>
              <mdb-row>Zephyr, CA 95555</mdb-row>
              <mdb-row><a id="mobile" href="tel:888-555-5555">888-555-5555</a></mdb-row>
              <mdb-row><span id="desktop">888-555-5555</span></mdb-row>
            </mdb-col>
          </mdb-row>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="view == 'yurts'">
          <mdb-col col="12">
            <mdb-row><img :src="yurt" class="img-fluid"></mdb-row>
          <mdb-row><h2>The Yurts at Pacific Trails</h2></mdb-row>
          <mdb-row><span>What is a Yurt?
          <p>Our luxury yurts are permanent structures four feet off the ground.<br>Each yurt has canvas walls, a wooden floor, and a roof dome that<br>
          can be opened.</p>
          </span>
          <span>How are the yurts furnished?
          <p>Each yurt is furnished with a queen-size bed with a down quilt and<br>gas-fired stove.  The luxury camping experience also includes<br>
            electricity and a sink with hot and cold running water.  Shower and<br>restroom facilities are located in the lodge.</p>
          </span>
          <span>What should I bring?
          <p>Bring a sense of adventure and some time to relax!  Most guests also<br>pack comforable walking shoes and plan to dress for changing<br>
            weather with layers of clothing.</p>
          </span><br>
            </mdb-row>
          <mdb-row><h3>Yurt Packages</h3>
          <p>A variety of lucury yurt packages are available.  Choose a package below and contact us to begin your reservation.  We're happy to build a custom package just for you!</p>
          <table>
            <tr>
              <th>Package Name</th>
              <th>Description</th>
              <th>Nights</th>
              <th>Cost per Person</th>
            </tr>
            <tr>
              <td>Weekend Escape</td>
              <td class="text">Two breakfasts, a trail map, a picnic snack</td>
              <td>2</td>
              <td>$450</td>
            </tr>
            <tr>
              <td>Zen Retreat</td>
              <td class="text">Four breakfasts, a trail map, a pass for daily yoga</td>
              <td>4</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Kayak Away</td>
              <td class="text">Two breakfasts, two hours of kayak rental daily, a trail map</td>
              <td>2</td>
              <td>$500</td>
            </tr>
          </table>
            </mdb-row>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="view == 'activities'">
          <mdb-col col="12">
            <mdb-row><img src="../assets/trail.jpg" class="img-fluid"></mdb-row>
          <h2>Activities at Pacific Trails</h2>
          <h3>Hiking</h3>
          <p><span class="resort">Pacific Trails Resort</span> has 5 miles of hiking trails and is adjacent to a state park.  Go it alone of join one of our guided hikes.</p>
          <h3>Kayaking</h3>
          <p>Ocean kayaks are available for guest use.</p>
          <h3>Bird Watching</h3>
          <p>While anytime is a good time for bird watching at Pacific Trails, we offer guided bird-watching trips at sunrise several times a week.</p><br>
          </mdb-col>
        </mdb-row>
        <mdb-row v-if="view == 'reservations'">
          <mdb-col col="12">
            <mdb-row><img src="../assets/coast.jpg" class="img-fluid"></mdb-row>
          <h2>Reservations at Pacific Trails</h2>
          <h3>Contact Us</h3>
          <p>Required information is marked with an asterisk (*).</p>
          <form method="post" action="http://webdevbasics.net/scripts/pacific.php">
            <label for="myFName">*First Name:</label>
            <input id="myFName" name="myFName" required>
            <label for="myLName">*Last Name:</label>
            <input id="myLName" name="myLName" required>
            <label for="myEmail">*E-mail:</label>
            <input id="myEmail" name="myEmail" type="email" required>
            <label for="myPhone">Phone:</label>
            <input id="myPhone" name="myPhone" type="tel">
            <label for="arrival">Arrival Date:</label>
            <input id="arrival" name="arrival" type="date">
            <label for="nights">Nights:</label>
            <input id="nights" name="nights" type="number" min="1" max="14">
            <label for="myComments">*Comments:</label>
            <textarea id="myComments" name="myComments" rows="2" cols="20" required></textarea>
            <input type="submit" id="mySubmit" value="Submit">
          </form>
          </mdb-col>
        </mdb-row>
        <footer>
          <mdb-row class="pl-2">Copyright &copy; 2016 Pacific Trails Resort</mdb-row>
          <mdb-row class="pl-2"><a href="mailto:melissa_m_24@yahoo.com">Melissa Pula</a></mdb-row>
        </footer>
      </main>
        </mdb-col>
      </mdb-row>
    </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import image1 from '../assets/coast.jpg';
import image2 from '../assets/yurt.jpg';
export default {
  name: "Pacific",
  data() {
    return {
      view: 'home',
      coast: image1,
      yurt: image2,
    }
  },
}
</script>

<style scoped>
.noBullets {
  list-style-type: none;
}
.sidebar {
  height: 100%;
  outline: none;
}
#pacific {
  background-image: url("../assets/background.jpg");
  background-color: #FFFFFF;
  color: #666666;
  font-family: Verdana, Arial, sans-serif;
  min-height: 100vh;
}
h1 {
  margin-bottom: 0;
  background-image: url("../assets/sunset.jpg");
  background-repeat: no-repeat;
  background-position: right;
  padding-left: 20px;
  height: 72px;
  background-color: #000033;
  color: #FFFFFF;
  font-family: Georgia, serif;
  line-height: 200%;
}
nav {
  padding: 5px;
  font-weight: bold;
  float: left;
  width: 160px;
  padding-top: 20px;
  padding-right: 5px;
  padding-bottom: 0px;
  padding-left: 20px;
  height: 100vh;
  outline: none;
}
h2 {
  color: mediumblue;
  font-family: Georgia, serif;
}
dt {
  color: darkblue;
  font-size: 1.2em;
}
footer {
  background-color: #FFFFFF;
  padding: 10px;
  font-size: .7em;
  font-style: italic;
  text-align: center;
}
.resort {
  color: darkblue;
  font-size: 1.2em;
}
#wrapper {
  background-color: #90C7E3;
  max-width: 1024px;
  box-shadow: 3px 3px 3px #333;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  min-height: 800px;
}
h3 {
  color: #000033;
}
main {
  background-color: #FFFFFF;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 20px;
  padding-right: 20px;
  display: block;
}
#homehero {
  min-height: 680px;
}
#reservationshero {
  margin-left: 170px;
  height: 300px;
  background-image: url("../assets/coast.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#yurthero {
  margin-left: 170px;
  height: 300px;
  background-image: url("../assets/yurt.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#trailhero {
  margin-left: 170px;
  height: 300px;
  background-image: url("../assets/trail.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
nav a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
nav a:link {
  color: #000033;
}
nav a:visited {
  color: #344873;
}
nav a:hover {
  color: #FFFFFF;
}
nav ul {
  list-style: none;
  margin: 0px;
  padding-left: 0px;
}
header, nav, main, footer {
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
  border: 1px solid blue;
  width: 90%;
  border-collapse: collapse;
}
td, th {
  padding: 5px;
  border: 1px solid blue;
}
td {
  text-align: center;
}
.text {
  text-align: left;
}
tr:nth-of-type(even) {
  background-color: lightblue;
}
label {
  float: left;
  display: block;
  width: 8em;
  padding-right: 1em;
}
input, textarea {
  display: block;
  margin-bottom: 1em;
}
#mySubmit {
  margin-left: 10em;
}
</style>