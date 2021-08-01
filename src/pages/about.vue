<template>
  <mdb-container class="h-100 overflow-hidden m-0 p-0 mb-0" fluid>
    <mdb-row style="min-height: 100vh" class="justify-content-center align-items-center">
      <mdb-col col="5">
        <mdb-row class="justify-content-center text-center">
          <mdb-col col="12">
            <h2>Hello and welcome to my "About" page!</h2>
          </mdb-col>
        </mdb-row>
        <mdb-row class="justify-content-center mt-4">
          <mdb-col col="6">
            <p>My name is Melissa.  I am a mother to two amazing little girls, and a wife to the most wonderful husband a
              girl could ask for.  I am truly blessed in life!</p>
            <p>I grew up in a small town, graduated high school in 2001, and have been attending college ever since, with
              many adventures scattered throughout.  Shortly after high school, I moved to Wyoming to live the life of a
              cowgirl.  It was such an amazing experience and I miss the mountains every day!</p>
            <p>In 2003, I enlisted into the
              United States Marine Corps.  The following four years consisted of boot camp in South Carolina, training in
              North Carolina, schooling in Maryland, living in Okinawa for a year and North Carolina for three, and two
              eight-month deployments to Iraq.  Following the military, I moved back to Minnesota where I met my husband
              and had our kiddos.</p>
            <p>Currently, we live on a ten-acre hobby farm with ten chickens, two dogs, two cats, and a turtle.  We plan to
              expand into rabbits, goats, and horses in the near future as well.  We also garden and homeschool.</p>
            <p>My hobbies include hunting, fishing, kayaking, hiking, biking, and anything else outdoors I can do with my
              family.  I also love to read and lift weights.</p>
            <p>And that's about me in a nutshell!</p>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col col="4">
        <mdb-row style="min-height: 100vh" class="justify-content-center align-items-center">
          <mdb-col col="8">
        <img src="../assets/funFamily.jpg" class="img-fluid">
            </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  <!--<mdb-card id="card" class="card-image hero">
    <mdb-row id="row" class="align-items-start justify-content-end">
      <mdb-col col="4" class="mt-4 mr-4" style="font-size: 16px;line-height: 1.42857143; font-weight: bold">
        <h3>Hello and welcome to my "About" page!</h3>
        <p>My name is Melissa.  I am a mother to two amazing little girls, and a wife to the most wonderful husband a
        girl could ask for.  I am truly blessed in life!</p>
        <p>I grew up in a small town, graduated high school in 2001, and have been attending college ever since, with
        many adventures scattered throughout.  Shortly after high school, I moved to Wyoming to live the life of a
        cowgirl.  It was such an amazing experience and I miss the mountains every day!  In 2003, I enlisted into the
        United States Marine Corps.  The following four years consisted of boot camp in South Carolina, training in
        North Carolina, schooling in Maryland, living in Okinawa for a year and North Carolina for three, and two
        eight-month deployments to Iraq.  Following the military, I moved back to Minnesota where I met my husband
        and had my our kiddos.</p>
        <p>Currently, we live on a ten-acre hobby farm with ten chickens, two dogs, two cats, and a turtle.  We plan to
        expand into rabbits, goats, and horses in the near future as well.  We also garden and homeschool.</p>
        <p>My hobbies include hunting, fishing, kayaking, hiking, biking, and anything else outdoors I can do with my
        family.  I also love to read and lift weights.</p>
        <p>And that's about me in a nutshell!</p>
      </mdb-col>
    </mdb-row>
  </mdb-card>-->
</template>

<script>
export default {
  name: "About"
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