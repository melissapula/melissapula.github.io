<template>
  <mdb-container class="mt-0 pt-0 mb-0" fluid style="height: 100vh">
    <mdb-row class="justify-content-center align-items-center" style="background-color:white; color: #104C91; height: 100px">
      <h1>ABOUT</h1>
    </mdb-row>
    <mdb-row class="justify-content-center pt-4" style="background-color: #104C91; min-height: 100vh">
      <mdb-col col="12">
        <mdb-row class="justify-content-center align-items-center">
      <mdb-col lg="3" sm="12" class="mr-4">
      <mdb-btn size="lg" outline="white" @click.native="meModal = true" class="w-100">Me</mdb-btn>
        <mdb-btn size="lg" outline="white" @click.native="hobbiesModal = true" class="w-100 mt-4">Hobbies</mdb-btn>
        <mdb-btn size="lg" outline="white" @click.native="edModal = true" class="w-100 mt-4">Education</mdb-btn>
        <mdb-btn size="lg" outline="white" @click.native="workModal = true" class="w-100 mt-4">Work Experience</mdb-btn>
        </mdb-col>
      <mdb-col lg="2" sm="8">
        <img src="../assets/funFamily.jpg" class="img-fluid">
      </mdb-col>
          </mdb-row>
      </mdb-col>
      <mdb-modal centered :show="meModal" @close="meModal = false" info>
        <mdb-modal-header>
          <mdb-modal-title>About Me</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          I grew up in a small town, have three sisters, and am {{age}} years old.  Currently, I live on a ten-acre hobby
          farm with my husband and two children.  We have ten chickens, three dogs, one cat (and four kittens), and a turtle.
            We also garden and homeschool.</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="info" @click.native="meModal = false">Close</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
        <mdb-modal centered :show="hobbiesModal" @close="hobbiesModal = false" info>
          <mdb-modal-header>
            <mdb-modal-title>My Hobbies</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
            My hobbies include hunting, fishing, kayaking, hiking, biking, skiing, and anything else outdoors I can do
            with my family.  I also love to read, lift weights, and play video games with my kids.</mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="info" @click.native="hobbiesModal = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
        <mdb-modal centered :show="edModal" @close="edModal = false" info>
          <mdb-modal-header>
            <mdb-modal-title>My Education</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
              - P.S.M. (Professional Science Masters) in Software Engineering <br>
          - B.S. in Mathematics <br>
          - Minor in Computer Science <br>
          -B.S. in Criminal Justice <br><br>
          Funny story; I have always wanted a degree in mathematics and had been working toward it for almost 20 years.
            Because of the Marine Corps, having a full-time job, and having babies though, it was difficult to achieve.
          Then, in order for me to be able to take full advantage of the GI Bill, I was required to take a certain amount
          of credits.  It was too hard finding math courses offered at a time in which I could attend, so I decided to
          take some criminal justice courses to make up for those required credits, especially since I was working in
          the law enforcement field anyway.  Long story short, I accidentally obtained my Criminal Justice Degree first.
          Then finally, five years and two kids later, I obtained my long-sought-after Math degree, as well as a minor in computer science.  And since I still
            hadn't had enough, I decided to obtain a Professional Science Masters in Software Engineering as well.</mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="info" @click.native="edModal = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
        <mdb-modal centered :show="workModal" @close="workModal = false" info>
          <mdb-modal-header>
            <mdb-modal-title>My Work Experience</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
            - TransImpact (Application Developer, contract) <br>
            - Bemidji State University (Registration Clerk) <br>
            - Big Rock Sports (Web Developer, intern) <br>
            - Beltrami County Sheriff's Office (Bailiff) <br>
            - United States Marine Corps (Small Arms Repairer) <br><br>
            I have been extremely fortunate in my work history and experiences.  Through the Marine Corps, I have lived
            in North Carolina, South Carolina, Maryland, and Okinawa, as well as been deployed to Iraq and the
            Philippines.  I have twice worn a uniform in which I felt pride in serving my country and community.  And
            I have been given opportunities to grow in the programming field through internship and contract work.  I have
            met and kept in contact with many amazing individuals and cherish so much of what I have lived, and I take
            that with me in everything I do.
            </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="info" @click.native="workModal = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
    </mdb-row>
  </mdb-container>
</template>

<script>
import moment from 'moment';
export default {
  name: "About",
  data() {
    return {
      hobbiesModal: false,
      meModal: false,
      edModal: false,
      workModal: false,
        age: 0
    }
  },
  mounted() {
      this.age = (moment().year() - 1983);
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: "";
  background-image: url('../assets/family.jpg');
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.5;
}
body, html {
  height: 100%;
}
#row {
  min-height: 100vh;
  width: 100%;
}

</style>