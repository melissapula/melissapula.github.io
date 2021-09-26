<template>
  <mdb-container class="h-100 mt-0 pt-0 mb-0" fluid>
    <mdb-row style="background-color: darkred; color:white">
      <mdb-col col="12">
    <mdb-row class="justify-content-center align-items-center pt-4">
      <mdb-col lg="2" sm="3">
        <img src="../assets/backPhoto.png" class="img-fluid">
      </mdb-col>
      <mdb-col lg="4" sm="6">
        <mdb-row class="justify-content-center align-items-center" style="font-size: 80px">
          Believe It.<br>
          Acheive It.
        </mdb-row>
      </mdb-col>
      <mdb-col lg="2" sm="3">
        <img src="../assets/meFitness.jpg" class="img-fluid">
      </mdb-col>
    </mdb-row>
    <mdb-row class="justify-content-center mt-4">
      <mdb-col lg="9" sm="12">
        <mdb-card-group deck>
          <mdb-card>
            <mdb-card-header style="background-color: black"><h4>My Routine</h4></mdb-card-header>
            <mdb-card-body>
              <mdb-card-title tag="h5" style="color:darkred"><b>I workout 6 days a week.</b></mdb-card-title>
              <mdb-card-text style="color:black; font-size: 14px">
                Monday - Chest and Delts<br>
                Tuesday - Back<br>
                Wednesday - Legs (Quads)<br>
                Thursday - Delts<br>
                Friday - Arms and Abs<br>
                Saturday - Legs (Hams/Glutes)
              </mdb-card-text>
              <mdb-card-text small muted>Last updated Sept 26 2021</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
          <mdb-card>
            <mdb-card-header style="background-color: black"><h4>My Inspirations</h4></mdb-card-header>
            <mdb-card-body>
              <mdb-card-title tag="h5" style="color:darkred"><b>These women are fxing BEASTS!</b></mdb-card-title>
              <mdb-card-text style="color:darkred; font-size: 14px">
                <a href="https://danalinnbailey.com/" target="_blank">Dana Linn Bailey</a> - Professional Bodybuilder<br>
                <a href="https://www.nakedtraining.app/?utm_source=google&utm_medium=cpc&gclid=Cj0KCQjwtMCKBhDAARIsAG-2Eu-WtPfdvGdHI6L4CQcRtov4WCT4q3LYbIE6p-HoGvRdGRIDdOM8YCQaAh9pEALw_wcB" target="_blank">
                  Brooke Ence</a> - Professional Crossfit Trainer
              </mdb-card-text>
              <mdb-card-text small muted>Last updated Sept 26 2021</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
          <mdb-card>
            <mdb-card-header style="background-color: black"><h4>My Gear</h4></mdb-card-header>
            <mdb-card-body>
              <mdb-card-title tag="h5" style="color:darkred"><b>Some of the gear I love.</b></mdb-card-title>
              <mdb-card-text style="color:darkred; font-size: 14px">
                <a href="https://www.repfitness.com/" target="_blank">Rep Fitness</a> - Rack<br>
                <a href="https://www.bowflex.com/" target="_blank">Bowflex</a> - Treadmill and Dumbbells<br>
                <a href="https://www.centurymartialarts.com/" target="_blank">Century Martial Arts</a> - Punching Bag<br>
                <a href="https://flagnorfail.com/" target="_blank">Flag Nor Fail</a> - Clothing
              </mdb-card-text>
              <mdb-card-text small muted>Last updated Sept 26 2021</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-card-group>
      </mdb-col>
    </mdb-row>
    <mdb-row class="justify-content-center mt-4">
      <mdb-col lg="8" sm="12">
        <mdb-card>
          <mdb-card-header style="background-color: black"><h4>Family Fitness</h4></mdb-card-header>
          <mdb-card-body>
            <mdb-card-title tag="h5" style="color:darkred"><b>My girls and I often do our workouts together.</b></mdb-card-title>
            <mdb-row>
              <mdb-col lg="4">
                <img src="../assets/familyFitness.jpg" class="img-fluid">
              </mdb-col>
              <mdb-col lg="8">
                <mdb-row style="color: black; font-size: 14px" class="mx-4">I absolutely love working out with my kiddos!
                It's so much fun and it is so good for them!  Typically, we just do the workout that I would be doing
                for the day, and then I modify it as needed for their fitness levels.  They love doing pull-ups (crazy
                  kids) and anything with the cable machine.</mdb-row>
                  <mdb-row style="color: black; font-size: 14px" class="mx-4 mt-2">We homeschool, so it's very easy for me
                    to work it into our daily schedule.  They lift weights around 11:00am five days a week and then
                    cardio around 2:30pm four days a week.  We alternate between walking on the treadmill and doing a
                    boxing workout with the punching bag.</mdb-row>
              </mdb-col>
            </mdb-row>
            <mdb-card-text small muted>Last updated Sept 26 2021</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-row class="justify-content-center">
      <mdb-col col="12">
        <mdb-row class="justify-content-center mt-4" style="font-size: 16px; background-color: black; color: white">Sample Workouts</mdb-row>
          <mdb-row style="color: black" class="mb-4 mt-4 justify-content-center">
            <mdb-col lg="4" sm="12">
            <mdb-accordion :panes="panesOne" class="mb-4" style="width: 100%"></mdb-accordion>
            </mdb-col>
            <mdb-col lg="4" sm="12">
              <mdb-accordion :panes="panesTwo" style="width: 100%"></mdb-accordion>
            </mdb-col>
          </mdb-row>
      </mdb-col>
    </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
export default {
  name: "FitnessBlog",
  data() {
    return {
      panesOne: [
        {
          title: 'Mondays - Chest and Delts',
          content: '- BB Bench Press ss w/ DB Lat Raise <br>' +
            '- Incline Dumbbell Bench Press ss w/ DB Front Raise <br>' +
              '- Dumbbell Flat Bench Fly ss w/ BB Shoulder Press <br>' +
              '- Decline Cable Fly <br>' +
              '- Incline Cable Fly'
        },
        {
          title: 'Tuesdays - Back',
          content: '- Cable Lat Pull-down <br>' +
              '- Bent Over BB Rows <br>' +
              '- Seated Cable Rows <br>' +
              '- Straight Arm Cable Press-down <br>' +
              '- Pull-ups'
        },
        {
          title: 'Wednesdays - Legs',
          content: '- BB Front Squat <br>' +
              '- DB Split Squats <br>' +
              '- DB Goblet Squats <br>' +
              '- Leg Extensions <br>' +
              '- Lunges'
        },
        {
          title: 'Thursday - Delts',
          content: '- DB Lat Raises <br>' +
              '- DB Front Raises <br>' +
              '- DB Shoulder Press <br>' +
              '- DB Arnold Press <br>' +
              '- Upright Row'
        },
        {
          title: 'Friday - Arms and Abs',
          content: '- SkullCrushers ss w/ Tummy Tucks <br>' +
              '- Cable V-Bar Press-down ss w/ Russian Twists <br>' +
              '- Cable Reverse Grip Press-down ss w/ Side Bends <br>' +
              '- BB Bicep Curl ss w/ Cable Crunches <br>' +
              '- DB Incline Bicep Curls ss w/ Ab Wheel <br>' +
              '- Cable Bicep Curl ss w/ Plank'
        },
        {
          title: 'Saturday - Legs',
          content: '- Back Squats <br>' +
              '- BB Straight Legged Deadlift <br>' +
              '- BB Sumo Deadlift <br>' +
              '- Cable Kickbacks <br>' +
              '- BB Hip Thrusts'
        },
      ],
      panesTwo: [
        {
          title: 'Mondays - Chest, Delts, and Triceps',
          content: '- BB Bench Press ss w/ DB Lat Raise <br>' +
              '- Incline Dumbbell Bench Press ss w/ DB Front Raise <br>' +
              '- Dumbbell Flat Bench Fly ss w/ BB Shoulder Press <br>' +
              '- Decline Cable Fly ss w/ Cable V-Bar Press-down <br>' +
              '- Incline Cable Fly ss w/ Skullcrushers'
        },
        {
          title: 'Tuesdays - Back, Biceps, and Abs',
          content: '- Cable Lat Pull-down ss w/ Tummy Tucks <br>' +
              '- Straight Arm Cable Press-down <br>' +
              '- Bent Over BB Rows ss w/ Russian Twists <br>' +
              '- Seated Cable Rows ss w/ Hanging Knee Raise <br>' +
              '- BB Bicep Curl ss w/ Side Bends <br>' +
              '- Incline DB Bicep Curl ss w/ Plank'
        },
        {
          title: 'Wednesdays - Legs',
          content: '- BB Front Squat <br>' +
              '- DB Split Squats <br>' +
              '- DB Goblet Squats <br>' +
              '- Leg Extensions <br>' +
              '- Lunges'
        },
        {
          title: 'Thursdays - Chest, Delts, and Triceps',
          content: '- DB Flat Bench Press ss w/ DB Lat Raise <br>' +
              '- BB Incline Bench Press ss w/ DB Front Raise <br>' +
              '- Dumbbell Flat Bench Fly ss w/ BB Shoulder Press <br>' +
              '- Decline Cable Fly ss w/ Cable V-Bar Press-down <br>' +
              '- Incline Cable Fly ss w/ Skullcrushers'
        },
        {
          title: 'Fridays - Back, Biceps and Abs',
          content: '- Pull-ups ss w/ Tummy Tucks <br>' +
              '- Single Arm Cable Lat Pull ss w/ Russian Twists <br>' +
              '- Bent Over DB Rows ss w/ Hanging Knee Raise <br>' +
              '- Seated Cable Rows ss w/ Side Bends <br>' +
              '- Preacher Curl ss w/ Plank <br>' +
              '- DB Hammer Curl'
        },
        {
          title: 'Saturdays - Legs',
          content: '- Back Squats <br>' +
              '- BB Straight Legged Deadlift <br>' +
              '- BB Sumo Deadlift <br>' +
              '- Cable Kickbacks <br>' +
              '- BB Hip Thrusts'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>