<template>
    <MDBContainer class="mt-0 pt-0 mb-0" fluid>
        <MDBRow
            class="justify-content-center align-items-center"
            style="background-color: #2c3e50; height: calc(100vh - 56px); overflow: hidden"
        >
            <MDBCol lg="3" sm="12" class="me-4">
                <MDBBtn size="lg" outline="light" @click="meModal = true" class="w-100">Me</MDBBtn>
                <MDBBtn size="lg" outline="light" @click="hobbiesModal = true" class="w-100 mt-4">Hobbies</MDBBtn>
                <MDBBtn size="lg" outline="light" @click="edModal = true" class="w-100 mt-4">Education</MDBBtn>
                <MDBBtn size="lg" outline="light" @click="workModal = true" class="w-100 mt-4">Work Experience</MDBBtn>
            </MDBCol>
            <MDBCol lg="4" sm="8">
                <img src="../assets/GoofyFamily.jpg" class="img-fluid rounded" />
            </MDBCol>
            <MDBModal centered v-model="meModal" info>
                <MDBModalHeader>
                    <MDBModalTitle>About Me</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    I'm a proud member of the LGBTQ+ community, married to the most incredible wife, and together we're
                    raising four amazing kids. Our kids keep us busy with all of their activities — band, choir,
                    orchestra, wrestling, swimming, soccer, and tennis — and we love every minute of it. When we're not
                    cheering them on, we're all together playing board games, going for bike rides, working out,
                    kayaking, hiking, or playing at the beach.</MDBModalBody
                >
                <MDBModalFooter>
                    <MDBBtn color="info" @click="meModal = false">Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBModal centered v-model="hobbiesModal" info>
                <MDBModalHeader>
                    <MDBModalTitle>My Hobbies</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    My hobbies include hunting, fishing, kayaking, hiking, biking, skiing, and anything else outdoors I
                    can do with my family. I also love to read, lift weights, and play video games with my
                    kids.</MDBModalBody
                >
                <MDBModalFooter>
                    <MDBBtn color="info" @click="hobbiesModal = false">Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBModal centered v-model="edModal" info>
                <MDBModalHeader>
                    <MDBModalTitle>My Education</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    <b>M.S., Software Engineering</b> — St. Cloud State University, 2023 <br />
                    <b>B.S., Mathematics; Minor in Computer Science</b> — Bemidji State University, 2020 <br /><br />
                    <b>Certifications:</b><br />
                    - PCEP Certified Python Programmer <br />
                    - Microsoft Azure Fundamentals <br />
                    - NestJS Certified: Fundamentals, Advanced Concepts, and Architecture Patterns
                    <br /><br />
                    My path to a career in software engineering wasn't a straight line — it wound through the Marine
                    Corps, raising a family, and years of balancing coursework with life. I finally earned my
                    long-sought-after math degree, then kept going and completed a master's in software engineering.
                    Every challenge along the way made me a more resilient and resourceful engineer.</MDBModalBody
                >
                <MDBModalFooter>
                    <MDBBtn color="info" @click="edModal = false">Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBModal centered v-model="workModal" info>
                <MDBModalHeader>
                    <MDBModalTitle>My Work Experience</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    <b>Software Engineer, TransImpact</b> (Feb 2020 – Present) <br />
                    Full-stack engineer building and maintaining a Stencil-based design system with 50+ reusable Web
                    Components, comprehensive Storybook documentation, and CI/CD pipelines for automated testing and
                    publishing. Architected a pnpm monorepo managing 15+ packages and achieved 85% code coverage.
                    <br /><br />
                    <b>Web Developer Intern, Big Rock Sports</b> (Feb 2018 – Nov 2018) <br />
                    Built responsive Angular interfaces following WCAG accessibility standards and practiced Git
                    workflows and code review. <br /><br />
                    <b>United States Marine Corps — Veteran</b> <br />
                    Completed two combat deployments to Iraq with additional service in Okinawa, Japan and the
                    Philippines. The discipline, adaptability, and leadership I developed in the Corps continue to shape
                    everything I do as an engineer and a person.
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="info" @click="workModal = false">Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter
    } from 'mdb-vue-ui-kit';
    export default {
        name: 'About',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBBtn,
            MDBModal,
            MDBModalHeader,
            MDBModalTitle,
            MDBModalBody,
            MDBModalFooter
        },
        data() {
            return {
                hobbiesModal: false,
                meModal: false,
                edModal: false,
                workModal: false
            };
        }
    };
</script>

<style scoped></style>
