<template>
    <div class="container-fluid h-100 mt-0 pt-0 mb-0">
        <div
            class="row"
            style="background-color: #f8f9fa; color: #333; min-height: calc(100vh - var(--site-nav-height, 56px))"
        >
            <div class="col-12">
                <div class="fitness-hero">
                    <div class="row justify-content-center align-items-center pt-4 pb-4 mx-0">
                        <div class="col-3 col-lg-2">
                            <img src="../assets/backPhoto.jpg" class="img-fluid" alt="Back muscle pose" />
                        </div>
                        <div class="col-6 col-lg-4">
                            <div class="row justify-content-center align-items-center fitness-hero-text">
                                Believe It.<br />
                                Achieve It.
                            </div>
                        </div>
                        <div class="col-3 col-lg-2">
                            <img
                                src="../assets/meFitness.jpg"
                                class="img-fluid"
                                alt="Melissa flexing after a workout"
                            />
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center mt-4">
                    <div class="col-12 col-lg-9">
                        <div class="fitness-card-group">
                            <mfp-card class="fitness-card">
                                <h4 slot="header" class="fitness-card-header">My Routine</h4>
                                <h5 class="card-title"><b>I workout 6 days a week.</b></h5>
                                <p class="card-text">
                                    Monday - Chest and Delts<br />
                                    Tuesday - Back<br />
                                    Wednesday - Legs (Quads)<br />
                                    Thursday - Delts<br />
                                    Friday - Arms and Abs<br />
                                    Saturday - Legs (Hams/Glutes)
                                </p>
                            </mfp-card>
                            <mfp-card class="fitness-card">
                                <h4 slot="header" class="fitness-card-header">My Inspirations</h4>
                                <h5 class="card-title"><b>These women are fxing BEASTS!</b></h5>
                                <p class="card-text">
                                    <a href="https://danalinnbailey.com/" target="_blank">Dana Linn Bailey</a> —
                                    Professional Bodybuilder<br />
                                    <a href="https://www.nakedtraining.app/" target="_blank">Brooke Ence</a> —
                                    Professional Crossfit Trainer
                                </p>
                            </mfp-card>
                            <mfp-card class="fitness-card">
                                <h4 slot="header" class="fitness-card-header">My Gear</h4>
                                <h5 class="card-title"><b>Some of the gear I love.</b></h5>
                                <p class="card-text">
                                    <a href="https://www.repfitness.com/" target="_blank">Rep Fitness</a> — Rack<br />
                                    <a href="https://www.bowflex.com/" target="_blank">Bowflex</a> — Treadmill and
                                    Dumbbells<br />
                                    <a href="https://www.centurymartialarts.com/" target="_blank"
                                        >Century Martial Arts</a
                                    >
                                    — Punching Bag<br />
                                    <a href="https://flagnorfail.com/" target="_blank">Flag Nor Fail</a> — Clothing
                                </p>
                            </mfp-card>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center mt-4">
                    <div class="col-12 col-lg-8">
                        <mfp-card class="fitness-card">
                            <h4 slot="header" class="fitness-card-header">Family Fitness</h4>
                            <h5 class="card-title"><b>My kids and I often do our workouts together.</b></h5>
                            <div class="row">
                                <div class="col-lg-4">
                                    <img
                                        src="../assets/familyFitness.jpg"
                                        class="img-fluid"
                                        alt="Melissa working out with the family"
                                    />
                                </div>
                                <div class="col-lg-8">
                                    <div class="row mx-4 card-text">
                                        I absolutely love working out with my kiddos! It's so much fun and it is so good
                                        for them! Typically, we just do the workout that I would be doing for the day,
                                        and then I modify it as needed for their fitness levels. They love doing
                                        pull-ups (crazy kids) and anything with the cable machine.
                                    </div>
                                    <div class="row mx-4 mt-2 card-text">
                                        We homeschool, so it's very easy for me to work it into our daily schedule. They
                                        lift weights around 11:00am five days a week and then cardio around 2:30pm four
                                        days a week. We alternate between walking on the treadmill and doing a boxing
                                        workout with the punching bag.
                                    </div>
                                </div>
                            </div>
                        </mfp-card>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12">
                        <div
                            class="row justify-content-center mt-4"
                            style="font-size: 16px; background-color: #1a2744; color: white"
                        >
                            Sample Workouts
                        </div>
                        <div class="row mb-4 mt-4 justify-content-center" style="color: #333">
                            <div class="col-12 col-lg-4">
                                <mfp-accordion exclusive class="mb-4">
                                    <mfp-accordion-item
                                        v-for="(pane, i) in panesOne"
                                        :key="'p1-' + i"
                                        :label="pane.title"
                                    >
                                        <span v-html="pane.content"></span>
                                    </mfp-accordion-item>
                                </mfp-accordion>
                            </div>
                            <div class="col-12 col-lg-4">
                                <mfp-accordion exclusive>
                                    <mfp-accordion-item
                                        v-for="(pane, i) in panesTwo"
                                        :key="'p2-' + i"
                                        :label="pane.title"
                                    >
                                        <span v-html="pane.content"></span>
                                    </mfp-accordion-item>
                                </mfp-accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FitnessBlog',
        data() {
            return {
                panesOne: [
                    {
                        title: 'Mondays - Chest and Delts',
                        content:
                            '- BB Bench Press ss w/ DB Lat Raise <br>' +
                            '- Incline Dumbbell Bench Press ss w/ DB Front Raise <br>' +
                            '- Dumbbell Flat Bench Fly ss w/ BB Shoulder Press <br>' +
                            '- Decline Cable Fly <br>' +
                            '- Incline Cable Fly'
                    },
                    {
                        title: 'Tuesdays - Back',
                        content:
                            '- Cable Lat Pull-down <br>' +
                            '- Bent Over BB Rows <br>' +
                            '- Seated Cable Rows <br>' +
                            '- Straight Arm Cable Press-down <br>' +
                            '- Pull-ups'
                    },
                    {
                        title: 'Wednesdays - Legs',
                        content:
                            '- BB Front Squat <br>' +
                            '- DB Split Squats <br>' +
                            '- DB Goblet Squats <br>' +
                            '- Leg Extensions <br>' +
                            '- Lunges'
                    },
                    {
                        title: 'Thursday - Delts',
                        content:
                            '- DB Lat Raises <br>' +
                            '- DB Front Raises <br>' +
                            '- DB Shoulder Press <br>' +
                            '- DB Arnold Press <br>' +
                            '- Upright Row'
                    },
                    {
                        title: 'Friday - Arms and Abs',
                        content:
                            '- SkullCrushers ss w/ Tummy Tucks <br>' +
                            '- Cable V-Bar Press-down ss w/ Russian Twists <br>' +
                            '- Cable Reverse Grip Press-down ss w/ Side Bends <br>' +
                            '- BB Bicep Curl ss w/ Cable Crunches <br>' +
                            '- DB Incline Bicep Curls ss w/ Ab Wheel <br>' +
                            '- Cable Bicep Curl ss w/ Plank'
                    },
                    {
                        title: 'Saturday - Legs',
                        content:
                            '- Back Squats <br>' +
                            '- BB Straight Legged Deadlift <br>' +
                            '- BB Sumo Deadlift <br>' +
                            '- Cable Kickbacks <br>' +
                            '- BB Hip Thrusts'
                    }
                ],
                panesTwo: [
                    {
                        title: 'Mondays - Chest, Delts, and Triceps',
                        content:
                            '- BB Bench Press ss w/ DB Lat Raise <br>' +
                            '- Incline Dumbbell Bench Press ss w/ DB Front Raise <br>' +
                            '- Dumbbell Flat Bench Fly ss w/ BB Shoulder Press <br>' +
                            '- Decline Cable Fly ss w/ Cable V-Bar Press-down <br>' +
                            '- Incline Cable Fly ss w/ Skullcrushers'
                    },
                    {
                        title: 'Tuesdays - Back, Biceps, and Abs',
                        content:
                            '- Cable Lat Pull-down ss w/ Tummy Tucks <br>' +
                            '- Straight Arm Cable Press-down <br>' +
                            '- Bent Over BB Rows ss w/ Russian Twists <br>' +
                            '- Seated Cable Rows ss w/ Hanging Knee Raise <br>' +
                            '- BB Bicep Curl ss w/ Side Bends <br>' +
                            '- Incline DB Bicep Curl ss w/ Plank'
                    },
                    {
                        title: 'Wednesdays - Legs',
                        content:
                            '- BB Front Squat <br>' +
                            '- DB Split Squats <br>' +
                            '- DB Goblet Squats <br>' +
                            '- Leg Extensions <br>' +
                            '- Lunges'
                    },
                    {
                        title: 'Thursdays - Chest, Delts, and Triceps',
                        content:
                            '- DB Flat Bench Press ss w/ DB Lat Raise <br>' +
                            '- BB Incline Bench Press ss w/ DB Front Raise <br>' +
                            '- Dumbbell Flat Bench Fly ss w/ BB Shoulder Press <br>' +
                            '- Decline Cable Fly ss w/ Cable V-Bar Press-down <br>' +
                            '- Incline Cable Fly ss w/ Skullcrushers'
                    },
                    {
                        title: 'Fridays - Back, Biceps and Abs',
                        content:
                            '- Pull-ups ss w/ Tummy Tucks <br>' +
                            '- Single Arm Cable Lat Pull ss w/ Russian Twists <br>' +
                            '- Bent Over DB Rows ss w/ Hanging Knee Raise <br>' +
                            '- Seated Cable Rows ss w/ Side Bends <br>' +
                            '- Preacher Curl ss w/ Plank <br>' +
                            '- DB Hammer Curl'
                    },
                    {
                        title: 'Saturdays - Legs',
                        content:
                            '- Back Squats <br>' +
                            '- BB Straight Legged Deadlift <br>' +
                            '- BB Sumo Deadlift <br>' +
                            '- Cable Kickbacks <br>' +
                            '- BB Hip Thrusts'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .fitness-hero {
        background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
    }
    .fitness-hero-text {
        font-size: 80px;
        color: #fff;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .fitness-card-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
    }
    .fitness-card::part(header) {
        background-color: #2c3e50;
        color: white;
        padding: 0.75rem 1rem;
        margin: -1.25rem -1.25rem 0;
        border-radius: 0.75rem 0.75rem 0 0;
    }
    .fitness-card-header {
        margin: 0;
        font-size: 1.25rem;
    }
    .card-title {
        color: #1a2744;
    }
    .card-text {
        color: #333;
        font-size: 14px;
    }
</style>
