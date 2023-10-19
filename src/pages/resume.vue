<template>
  <mdb-container class="h-100 mt-0 pt-0" fluid>
    <mdb-row>
      <mdb-col lg="4" sm="12" id="pic">
        <mdb-row class="align-items-center my-4" id="picRow">
          <mdb-col col="12">
            <mdb-row class="text-center">
              <mdb-col col="12">
                <h1>Melissa M. Pula</h1>
                <h4>Application Developer</h4>
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center my-4 py-2">
              <mdb-col col="6">
                <img :src="profile" class="img-fluid z-depth-1 rounded-circle">
              </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center">
              <mdb-col lg="8" sm="8">
                <h4>Call: 218-209-5056</h4>
                <h4 class="text-nowrap">EMail: melissa_m_24@yahoo.com</h4>
                <h4>Web: <a href="https://melissapula.github.io">melissapula.github.io</a></h4>
                <h4>Home: Bemidji, MN</h4>
                <h4><a href="https://www.linkedin.com/in/melissa-pula-833748172">LinkedIn</a></h4>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col lg="8" sm="12" id="experience">
        <mdb-row class="align-items-center pb-4" id="experienceRow">
          <mdb-col col="12">
            <h4 class="cyan-text">EDUCATION</h4>
            <p class="mb-1">P.S.M. (PROFESSIONAL SCIENCE MASTERS) SOFTWARE ENGINEERING, ST CLOUD STATE UNIVERSITY (MAY 2023)</p>
            <p class="mb-1">B.S. MATHEMATICS, BEMIDJI STATE UNIVERSITY (JULY 2020)</p>
            <p class="mb-1">MINOR COMPUTER SCIENCE, BEMIDJI STATE UNIVERSITY (JULY 2020)</p>
            <p class="mb-1">B.S. CRIMINAL JUSTICE, BEMIDJI STATE UNIVERSITY (DECEMBER 2015)</p>
            <h4 class="cyan-text mt-4">WORK EXPERIENCE</h4>
            <p class="mb-1"><b>APPLICATION DEVELOPER (CONTRACT), TRANSIMPACT (FEB 2020 - PRESENT)</b></p>
            <ul>
              <li>Writing code in the VueJS, Angular, and NestJS framework to replicate current site behavior as well as implement new behaviors and features</li>
                <li>Writing unit tests to ensure features are working as intended</li>
                <li>Working with existing API calls, as well as creating new API endpoints, to recreate and develop site features and enhancements</li>
                  <li>Working in a source-controlled environment using a branching and merging strategy</li>
                  <li>Using Docker to containerize and deploy the application to cloud-based servers</li>
                  <li>Using a package manager to install and utilize open-source technologies</li>
                  <li>Working independently without input for several days at a time and presenting results to supervisor</li>
                  <li>Transitioning knowledge of the application design through demos and meetings</li>
            </ul>
            <p class="mb-1">REGISTRATION CLERK/COURSE SCHEDULER, BEMIDJI STATE UNIVERSITY (OCT 2019 - JUNE 2020)</p>
            <ul>
              <li>Served as the lead on phone call management with the office</li>
              <li>Trained and monitored all student workers hired, to include payroll and scheduling</li>
              <li>Organized, coordinated, and analyzed course set-up timeline, term course web application training, and course input</li>
              <li>Led instruction and training on the course input into the term course web application to departmental/divisional staff</li>
              <li>Identified, researched, corrected, and communicated any data problems in the student records system</li>
              <li>Recruited and trained staff, students, and other offices to assist with Commencement ceremony activities and act as main point of contact</li>
              <li>Maintained the Records Office website</li>
            </ul>
            <p class="mb-1">WEB DEVELOPER (INTERN), BIG ROCK SPORTS (FEB 2018 - NOV 2018)</p>
            <ul>
            <li>Designed, built, and maintained web sites using authoring or scripting languages, content creation tools, management tools, and digital media</li>
            <li>Performed and directed web site updates</li>
            <li>Wrote, designed, and edited web page content</li>
            <li>Learned required programming languages and libraries, to include HTML, CSS, JavaScript, TypeScript, Angular, JSON, Bootstrap, and JQuery</li>
            </ul>
            <h4 class="cyan-text">SKILLS</h4>
            <mdb-row>
              <mdb-col col="3">
                <ul>
                  <li>Full-stack Development</li>
                  <li>Testing and Debugging</li>
                </ul>
              </mdb-col>
              <mdb-col col="3">
                <ul>
                  <li>Git</li>
                  <li>Learning and openness to new technologies</li>
                </ul>
              </mdb-col>
              <mdb-col col="3">
                <ul>
                  <li>Communicating</li>
                  <li>Team Player</li>
                </ul>
              </mdb-col>
              <mdb-col col="3">
                <ul>
                  <li>Problem Solving</li>
                  <li>Analytical Thinking</li>
                </ul>
              </mdb-col>
            </mdb-row>
            <h4 class="cyan-text">ACTIVITIES</h4>
            <p>I enjoy reading, lifting weights, kayaking, camping, hunting, fishing, and doing anything with my husband and two daughters.  I live
            on a ten-acre hobby farm and love the outdoors.</p>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import image from '../assets/profilePic.jpg';
export default {
  name: "Resume",
  data() {
    return {
      profile: image,
    }
  },
}
</script>

<style scoped>
#pic{
  background-color: white;
  min-height: 100vh;
}
#picRow{
  min-height: 100vh;
}
#experience{
  background-color: slategrey;
  min-height: 100vh;
}
#experienceRow {
  min-height: 100vh;
}
.scrollable {
  overflow-y: scroll;
}
</style>