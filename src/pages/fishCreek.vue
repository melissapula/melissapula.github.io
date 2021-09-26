<template>
  <mdb-container class="h-100 mt-0 pt-0" id="fishCreek" fluid>
  <div id="wrapper">
    <h1 class="mb-0">Fish Creek Animal Hospital</h1>
    <mdb-row>
      <mdb-col lg="2" sm="12">
        <mdb-nav-item active @click.native="view = 'home'">Home</mdb-nav-item>
        <mdb-nav-item @click.native="view = 'services'">Services</mdb-nav-item>
        <mdb-nav-item @click.native="view = 'vet'">Ask the Vet</mdb-nav-item>
        <mdb-nav-item @click.native="view = 'contact'">Contact</mdb-nav-item>
      </mdb-col>
      <mdb-col col="10">
    <main class="mt-2 ml-4">
      <mdb-row v-if="view == 'home'">
        <mdb-col col="12">
          <mdb-row><p class="category mb-1">Full Service Facility</p></mdb-row>
          <mdb-row><p>Veterinarians and staff are on duty 24 hours a day, 7 days a week.</p></mdb-row>
          <mdb-row><p class="category mb-1">Years of Experience</p></mdb-row>
          <mdb-row><p>Fish Creek Veterinarians have provided quality, dependable care for your beloved animals since 1984.</p></mdb-row>
          <mdb-row><p class="category mb-1">Open Door Policy</p></mdb-row>
          <mdb-row><p>Our professionals welcome owners to stay with their pets during any medical procedure.</p></mdb-row>
          <mdb-row><a id="mobile" href="tel:800-555-5555">800-555-5555</a></mdb-row>
          <mdb-row><span id="desktop">800-555-5555</span></mdb-row>
          <mdb-row>1242 Grassy Lane</mdb-row>
          <mdb-row>Fish Creek, WI 55534</mdb-row>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="view == 'services'">
        <mdb-tbl class="mt-4">
          <tr>
            <th class="category">Medical Services</th>
            <td>We offer state-of-the-art equipment and technology.</td>
          </tr>
          <tr>
            <th class="category">Surgical Services</th>
            <td>Full range of surgical procedures including orthopedics and emergency surgeries.</td>
          </tr>
          <tr>
            <th class="category">Dental Care</th>
            <td>A dental exam can determine whether your pet needs preventive dental care such<br>as scaling and polishing</td>
          </tr>
          <tr>
            <th class="category">House Calls</th>
            <td>The elderly, physically challenged, and multiple pet households often find our in-<br>home veterinary service helpful and convenient.</td>
          </tr>
          <tr>
            <th class="category">Emergencies</th>
            <td>At least one of our doctors is on call every day and night.</td>
          </tr>
        </mdb-tbl>
      </mdb-row>
      <mdb-row v-if="view == 'vet'">
        <mdb-col col="9">
        <mdb-row class="mt-4"><p><a href="contact.html">Contact</a> us if you have a question that you would like answered here.</p></mdb-row>
        <mdb-row class="category">Question: Our dog, Sparky, likes to eat whatever the kids are snacking on.  Is it OK for the dog to eat chocolate?</mdb-row>
        <mdb-row>Answer: Chocolate is toxic to dogs.  Please do not feed your dog chocolate.  Try playing a game with your children - when you feed them people treats, they can feed Sparky dog treats.</mdb-row>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="view == 'contact'">
        <mdb-col col="12">
          <mdb-row><h2>Contact Fish Creek</h2></mdb-row>
          <mdb-row><p>Required fields are marked with an asterisk (*).</p></mdb-row>
        <form method="post" action="http://webdevbasics.net/scripts/fishcreek.php" onSubmit="return validateForm();">
          <label for="myName">Name:</label>
          <input id="myName" name="myName" class="mb-2">
          <label for="myEmail">*E-mail:</label>
          <input type="email" name="myEmail" id="myEmail" class="mb-2">
          <label for="myComments">Comments:</label>
          <textarea id="myComments" name="myComments" rows="2" cols="22" class="mb-2"></textarea>
          <input type="submit" id="mySubmit" value="Send Now">
        </form>
        </mdb-col>
      </mdb-row>
      <footer>
        <mdb-row>Copyright &copy; 2016 Fish Creek Animal Hospital</mdb-row>
        <mdb-row><a href="mailto:melissa_m_24@yahoo.com">Melissa Pula</a></mdb-row>
      </footer>
    </main>
      </mdb-col>
    </mdb-row>
  </div>
  </mdb-container>
</template>

<script>
export default {
  name: "FishCreek",
  data() {
    return {
      view: 'home',
    }
  },
    validateForm() {
  if(document.forms[0].myEmail.value == "") {
    alert("Please enter an e-mail address.");
    return false;
  }
  return true;
},
}
</script>

<style scoped>
li {
  list-style-type: none;
}
.sidebar {
  min-height: 352px;
  outline: none;
}
#fishCreek {
  background-image: url("../assets/gradientblue.jpg");
  background-color: #6699FF;
  color: #D5E3FF;
  text-family: Verdana, Arial, sans-serif;
}
h1 {
  background-image: url("../assets/bigfish.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000066;
  color: #FFFFFF;
  text-align: center;
  font-size: 3em;
  padding: 10px;
  line-height: 150%;
  text-shadow: #CCCCCC;
}
nav {
  float: left;
  width: 150px;
  font-weight: bold;
}
.category {
  text-shadow: 1px 1px 1px #667;
  font-weight: bold;
  background-color: #FFFFFF;
  color: #003366;
  font-size: 1.1em;
}
footer {
  padding: 10px;
  font-size: .7em;
  font-style: italic;
}
#wrapper {
  background-color: #FFFFFF;
  color: #000066;
  min-width: 700px;
  max-width: 1024px;
  min-height: 450px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
img {
  border: none;
}
footer nav {
  text-align: left;
}
* {
  box-sizing: border-box;
}
nav ul {
  list-style: none;
}
nav a {
  text-decoration: none;
}
nav a:link {
  color: #3262A3;
}
nav a:visited {
  color: #6699FF;
}
nav a:hover {
  color: #CCCCCC;
}
main {
  padding-right: 20px;
  padding-bottom: 20px;
}
header, nave, main, footer {
  display: block;
}
#mobile {
  display: none;
}
#desktop {
  display: inline;
}
table {
  border: 2px solid darkblue;
  border-collapse: collapse;
}
table td {
  padding: 0.5em;
  border: 1px solid darkblue;
}
table th {
  padding: 0.5em;
  border: 1px solid darkblue;
}
label {
  float: left;
  display: block;
  text-align: right;
  width: 8em;
  padding-right: 1em;
}
input, textarea {
  display: block;
  margin-bottom: 1em;
}
#mySubmit {
  margin-left: 9.5em;
}
@media only screen and (max-width: 1024px) {
  body {
    margin: 0;
    padding: 0;
    background-color: white;
    background-image: none;
  }
  #wrapper {
    width: auto;
    min-width: 0;
    margin: 0;
  }
  h1 {
    margin: 0;
    font-size: 1.8em;
    line-height: 200%;
  }
  nav {
    float: none;
    width: auto;
  }
  nav li {
    display: inline-block;
  }
  nav a {
    padding: 1em;
    font-size: 1.2em;
  }
  nav ul {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  main {
    font-size: 90%;
    margin: 0;
    padding-left: 2em;
  }
  footer {
    margin: 0;
  }
}
@media only screen and (max-width: 768px) {
  h1 {
    background-repeat: no-repeat;
    background-position: center;
    font-size: 1.5em;
    line-height: 120%;
  }

  nav a {
    display: block;
    padding: 0.2em;
    font-size: 1.3em;
    border-bottom: 1px #330000;
  }

  nav li {
    display: block;
  }

  nav ul {
    text-align: left;
  }

  main {
    padding-left: 1em;
  }

  .category {
    text-shadow: none;
  }

  #mobile {
    display: inline;
  }

  #desktop {
    display: none;
  }
}

</style>