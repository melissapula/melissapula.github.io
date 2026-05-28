<template>
    <div class="fitness-page">
        <header class="fitness-hero">
            <div class="hero-row">
                <img src="../assets/backPhoto.jpg" class="hero-img" alt="Back muscle pose" />
                <div class="fitness-hero-text">
                    Believe It.<br />
                    Achieve It.
                </div>
                <img src="../assets/meFitness.jpg" class="hero-img" alt="Melissa flexing after a workout" />
            </div>
        </header>

        <mfp-container size="xl" class="mt-lg">
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
                        <a href="https://danalinnbailey.com/" target="_blank" rel="noopener">Dana Linn Bailey</a>
                        — Professional Bodybuilder<br />
                        <a href="https://www.nakedtraining.app/" target="_blank" rel="noopener">Brooke Ence</a>
                        — Professional Crossfit Trainer
                    </p>
                </mfp-card>
                <mfp-card class="fitness-card">
                    <h4 slot="header" class="fitness-card-header">My Gear</h4>
                    <h5 class="card-title"><b>Some of the gear I love.</b></h5>
                    <p class="card-text">
                        <a href="https://www.repfitness.com/" target="_blank" rel="noopener">Rep Fitness</a>
                        — Rack<br />
                        <a href="https://www.bowflex.com/" target="_blank" rel="noopener">Bowflex</a> — Treadmill and
                        Dumbbells<br />
                        <a href="https://www.centurymartialarts.com/" target="_blank" rel="noopener"
                            >Century Martial Arts</a
                        >
                        — Punching Bag<br />
                        <a href="https://flagnorfail.com/" target="_blank" rel="noopener">Flag Nor Fail</a>
                        — Clothing
                    </p>
                </mfp-card>
            </div>
        </mfp-container>

        <mfp-container size="lg" class="mt-lg">
            <mfp-card class="fitness-card">
                <h4 slot="header" class="fitness-card-header">Family Fitness</h4>
                <h5 class="card-title"><b>My kids and I often do our workouts together.</b></h5>
                <div class="family-grid">
                    <img
                        src="../assets/familyFitness.jpg"
                        class="img-fluid"
                        alt="Melissa working out with the family"
                    />
                    <div>
                        <p class="card-text">
                            I absolutely love working out with my kiddos! It's so much fun and it is so good for them!
                            Typically, we just do the workout that I would be doing for the day, and then I modify it as
                            needed for their fitness levels. They love doing pull-ups (crazy kids) and anything with the
                            cable machine.
                        </p>
                        <p class="card-text mt-sm">
                            We homeschool, so it's very easy for me to work it into our daily schedule. They lift
                            weights around 11:00am five days a week and then cardio around 2:30pm four days a week. We
                            alternate between walking on the treadmill and doing a boxing workout with the punching bag.
                        </p>
                    </div>
                </div>
            </mfp-card>
        </mfp-container>

        <section class="mt-lg">
            <div class="sample-workouts-banner text-center">Sample Workouts</div>
            <mfp-container size="lg" class="my-lg">
                <div class="workouts-grid">
                    <mfp-accordion exclusive>
                        <mfp-accordion-item v-for="(pane, i) in panesOne" :key="'p1-' + i" :label="pane.title">
                            <span v-html="pane.content"></span>
                        </mfp-accordion-item>
                    </mfp-accordion>
                    <mfp-accordion exclusive>
                        <mfp-accordion-item v-for="(pane, i) in panesTwo" :key="'p2-' + i" :label="pane.title">
                            <span v-html="pane.content"></span>
                        </mfp-accordion-item>
                    </mfp-accordion>
                </div>
            </mfp-container>
        </section>
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
    .fitness-page {
        background-color: #f8f9fa;
        color: #333;
        min-height: calc(100vh - var(--site-nav-height, 56px));
    }
    .fitness-hero {
        background-color: #7f1d1d;
        padding-block: var(--space-stack-lg);
    }
    .hero-row {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: var(--space-stack-md);
        align-items: center;
        justify-items: center;
        max-width: 900px;
        margin-inline: auto;
        padding-inline: var(--space-stack-md);
    }
    .hero-img {
        max-width: 100%;
        height: auto;
    }
    .fitness-hero-text {
        font-size: clamp(2rem, 6vw, 5rem);
        color: #fff;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 1.1;
    }
    .fitness-card-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: var(--space-stack-md);
    }
    .family-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-stack-md);
    }
    @media (min-width: 1024px) {
        .family-grid {
            grid-template-columns: 1fr 2fr;
            align-items: center;
        }
    }
    .workouts-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-stack-lg);
    }
    @media (min-width: 1024px) {
        .workouts-grid {
            grid-template-columns: 1fr 1fr;
        }
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
        color: var(--color-brand-primary, #1a2744);
    }
    .sample-workouts-banner {
        font-size: 16px;
        background-color: var(--color-brand-primary, #1a2744);
        color: var(--color-brand-primary-fg, #ffffff);
        padding: var(--space-stack-sm);
    }
    .card-text {
        color: #333;
        font-size: 14px;
    }
</style>
