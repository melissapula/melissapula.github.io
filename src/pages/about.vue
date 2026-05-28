<template>
    <mfp-container size="xl" class="about-page">
        <section class="about-hero mb-xl">
            <div class="hero-image">
                <img
                    src="../assets/GoofyFamily.jpg"
                    class="img-fluid rounded shadow"
                    alt="Melissa with her wife and four kids, all making goofy faces"
                />
            </div>
            <div class="hero-text">
                <h1 class="page-heading">About Me</h1>
                <p class="lead mt-md" style="color: #2c3e50">
                    Full-stack software engineer, Marine Corps veteran, lifelong learner — and yes, the World's Okayest
                    Mom.
                </p>
                <p style="color: #555; line-height: 1.7">
                    I'm a proud member of the LGBTQ+ community, married to the most incredible wife, and together we're
                    raising four amazing kids. Between band, choir, orchestra, wrestling, swimming, soccer, and tennis,
                    our calendar stays full — and we love it. When we're not cheering them on, you'll find us playing
                    board games, biking, working out, kayaking, hiking, or down at the beach.
                </p>
            </div>
        </section>

        <section class="mb-xl">
            <h3 class="section-heading">My Path</h3>
            <p style="color: #555; line-height: 1.7">
                My route to software engineering wasn't a straight line — it wound through the Marine Corps, two combat
                deployments to Iraq, raising a family, and years of balancing coursework with life. I finally earned my
                long-sought-after math degree, then kept going and completed a master's in software engineering. Every
                challenge along the way made me a more resilient and resourceful engineer.
            </p>
        </section>

        <section class="two-col-grid mb-xl">
            <div>
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
            <div>
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
        </section>

        <section class="mb-xl">
            <h3 class="section-heading">Work</h3>
            <p class="mb-sm">
                <b>Software Engineer, TransImpact</b>
                <span class="muted"> — Feb 2020 to present</span>
            </p>
            <p style="color: #555; line-height: 1.7">
                I architect and ship the company-wide Ti design system — 58 framework-agnostic Stencil web components
                across four packages — and lead frontend on an Angular 19 enterprise supply-chain platform with 50+
                lazy-loaded feature modules, AG Grid Enterprise, and MSAL/Azure AD auth. I also led the Vue rebuild of
                eAudit, modernizing a legacy PHP shipping-audit app into a full-featured customer portal and admin suite
                as the primary frontend engineer through the main build-out.
            </p>
            <p class="mb-sm mt-lg">
                <b>Web Developer Intern, Big Rock Sports</b>
                <span class="muted"> — Feb 2018 to Nov 2018</span>
            </p>
            <p style="color: #555; line-height: 1.7">
                Built responsive Angular interfaces from designer wireframes, managed website content accuracy, and
                learned Git workflows and peer code review on a cross-functional team.
            </p>
            <p class="mb-sm mt-lg">
                <b>United States Marine Corps</b>
                <span class="muted"> — 2003 to 2007</span>
            </p>
            <p style="color: #555; line-height: 1.7">
                Two deployments to Iraq. Honorable discharge. The discipline, adaptability, and leadership I developed
                in the Corps still shape everything I do as an engineer.
            </p>
        </section>

        <section class="mb-xl">
            <h3 class="section-heading">Outside of Work</h3>
            <p style="color: #555; line-height: 1.7">
                Hunting, fishing, kayaking, hiking, biking, skiing — anything outdoors, ideally with the family along.
                Indoors I read, lift weights six days a week, and lose at video games to my kids.
            </p>
        </section>

        <div class="about-actions text-center mt-lg">
            <router-link to="/resume" custom v-slot="{ navigate }">
                <mfp-button variant="primary" @click="navigate">See Resume</mfp-button>
            </router-link>
            <router-link to="/portfolio" custom v-slot="{ navigate }">
                <mfp-button variant="primary" @click="navigate">See Projects</mfp-button>
            </router-link>
            <router-link to="/contact" custom v-slot="{ navigate }">
                <mfp-button variant="secondary" @click="navigate">Get In Touch</mfp-button>
            </router-link>
        </div>
    </mfp-container>
</template>

<script>
    export default {
        name: 'About'
    };
</script>

<style scoped>
    .about-page {
        background-color: #f0f2f5;
        min-height: calc(100vh - var(--site-nav-height, 56px));
        padding-top: var(--space-stack-xl);
        padding-bottom: var(--space-stack-xl);
    }
    .about-hero {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-stack-lg);
        align-items: center;
    }
    @media (min-width: 768px) {
        .about-hero {
            grid-template-columns: 5fr 7fr;
            gap: var(--space-stack-xl);
        }
    }
    .two-col-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-stack-lg);
    }
    @media (min-width: 768px) {
        .two-col-grid {
            grid-template-columns: 1fr 1fr;
        }
    }
    .page-heading {
        color: var(--color-brand-primary, #1a2744);
        font-weight: bold;
    }
    .section-heading {
        color: var(--color-brand-primary, #1a2744);
        font-weight: bold;
        border-bottom: 2px solid var(--color-brand-primary, #1a2744);
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
    .about-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }
</style>
