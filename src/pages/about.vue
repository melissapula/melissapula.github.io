<template>
    <div class="container-fluid mt-0 pt-0">
        <div
            class="row justify-content-center pt-5 pb-5"
            style="background-color: #f0f2f5; min-height: calc(100vh - 56px)"
        >
            <div class="col-md-11 col-lg-10">
                <div class="row align-items-center mb-5">
                    <div class="col-md-5 mb-4 mb-md-0">
                        <img
                            src="../assets/GoofyFamily.jpg"
                            class="img-fluid rounded shadow"
                            alt="Melissa with her wife and four kids, all making goofy faces"
                        />
                    </div>
                    <div class="col-md-7 ps-md-5">
                        <h1 style="color: #1a2744; font-weight: bold">About Me</h1>
                        <p class="lead mt-3" style="color: #2c3e50">
                            Full-stack software engineer, Marine Corps veteran, lifelong learner — and yes, the World's
                            Okayest Mom.
                        </p>
                        <p style="color: #555; line-height: 1.7">
                            I'm a proud member of the LGBTQ+ community, married to the most incredible wife, and
                            together we're raising four amazing kids. Between band, choir, orchestra, wrestling,
                            swimming, soccer, and tennis, our calendar stays full — and we love it. When we're not
                            cheering them on, you'll find us playing board games, biking, working out, kayaking, hiking,
                            or down at the beach.
                        </p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <h3 class="section-heading">My Path</h3>
                        <p style="color: #555; line-height: 1.7">
                            My route to software engineering wasn't a straight line — it wound through the Marine Corps,
                            two combat deployments to Iraq, raising a family, and years of balancing coursework with
                            life. I finally earned my long-sought-after math degree, then kept going and completed a
                            master's in software engineering. Every challenge along the way made me a more resilient and
                            resourceful engineer.
                        </p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <h3 class="section-heading">Education</h3>
                        <ul class="clean-list">
                            <li>
                                <b>M.S., Software Engineering</b><br />
                                <span class="muted">St. Cloud State University, 2023</span>
                            </li>
                            <li>
                                <b>B.S., Mathematics</b> (Minor in Computer Science)<br />
                                <span class="muted">Bemidji State University, 2020</span>
                            </li>
                            <li>
                                <b>B.S., Criminal Justice</b><br />
                                <span class="muted">Bemidji State University, 2015</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h3 class="section-heading">Certifications</h3>
                        <ul class="clean-list">
                            <li>
                                Microsoft Certified: Azure Fundamentals (AZ-900)
                                <span class="muted"> — Mar 2025</span>
                            </li>
                            <li>
                                PCEP — Certified Entry-Level Python Programmer
                                <span class="muted"> — Apr 2025</span>
                            </li>
                            <li>
                                NestJS Fundamentals and Advanced Concepts
                                <span class="muted"> — Mar 2025</span>
                            </li>
                            <li>
                                NestJS Architecture and Advanced Patterns
                                <span class="muted"> — Apr 2025</span>
                            </li>
                            <li>
                                SQL Basics, HackerRank
                                <span class="muted"> — Jan 2026</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <h3 class="section-heading">Work</h3>
                        <p class="mb-2">
                            <b>Software Engineer, TransImpact</b>
                            <span class="muted"> — Feb 2020 to present</span>
                        </p>
                        <p style="color: #555; line-height: 1.7">
                            I architect and ship the company-wide Ti design system — 58 framework-agnostic Stencil web
                            components across four packages — and lead frontend on an Angular 19 enterprise supply-chain
                            platform with 50+ lazy-loaded feature modules, AG Grid Enterprise, and MSAL/Azure AD auth. I
                            also led the Vue rebuild of eAudit, modernizing a legacy PHP shipping-audit app into a
                            full-featured customer portal and admin suite as the primary frontend engineer through the
                            main build-out.
                        </p>
                        <p class="mb-2 mt-4">
                            <b>Web Developer Intern, Big Rock Sports</b>
                            <span class="muted"> — Feb 2018 to Nov 2018</span>
                        </p>
                        <p style="color: #555; line-height: 1.7">
                            Built responsive Angular interfaces from designer wireframes, managed website content
                            accuracy, and learned Git workflows and peer code review on a cross-functional team.
                        </p>
                        <p class="mb-2 mt-4">
                            <b>United States Marine Corps</b>
                            <span class="muted"> — 2003 to 2007</span>
                        </p>
                        <p style="color: #555; line-height: 1.7">
                            Two deployments to Iraq. Honorable discharge. The discipline, adaptability, and leadership I
                            developed in the Corps still shape everything I do as an engineer.
                        </p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <h3 class="section-heading">Outside of Work</h3>
                        <p style="color: #555; line-height: 1.7">
                            Hunting, fishing, kayaking, hiking, biking, skiing — anything outdoors, ideally with the
                            family along. Indoors I read, lift weights six days a week, and lose at video games to my
                            kids.
                        </p>
                    </div>
                </div>

                <div class="row justify-content-center mt-4">
                    <div class="col-md-auto text-center">
                        <router-link to="/resume" class="btn me-2 mb-2" style="background-color: #1a2744; color: white">
                            See Resume
                        </router-link>
                        <router-link
                            to="/portfolio"
                            class="btn me-2 mb-2"
                            style="background-color: #1a2744; color: white"
                        >
                            See Projects
                        </router-link>
                        <router-link
                            to="/contact"
                            class="btn mb-2"
                            style="background-color: #fff; color: #1a2744; border: 2px solid #1a2744"
                        >
                            Get In Touch
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About'
    };
</script>

<style scoped>
    .section-heading {
        color: #1a2744;
        font-weight: bold;
        border-bottom: 2px solid #1a2744;
        padding-bottom: 8px;
        margin-bottom: 1rem;
    }
    .clean-list {
        list-style: none;
        padding-left: 0;
    }
    .clean-list li {
        color: #333;
        margin-bottom: 0.85rem;
        line-height: 1.5;
    }
    .muted {
        color: #6c757d;
        font-size: 0.9em;
    }
    .lead {
        font-size: 1.15rem;
        font-weight: 500;
    }
</style>
