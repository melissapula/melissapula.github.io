<template>
    <MDBContainer class="mt-0 pt-0" fluid>
        <MDBRow
            style="background-color: #f0f2f5; min-height: calc(100vh - 56px)"
            class="justify-content-center align-items-center"
        >
            <MDBCol md="6" lg="4">
                <div class="contact-card text-center">
                    <h2 class="mb-4" style="color: #1a2744; font-weight: bold">Get In Touch</h2>
                    <div class="contact-items">
                        <div class="contact-item">
                            <MDBIcon icon="phone" class="contact-icon" />
                            <a href="tel:2182095056">218-209-5056</a>
                        </div>
                        <div class="contact-item">
                            <MDBIcon icon="envelope" class="contact-icon" />
                            <a href="mailto:melissa_m_24@yahoo.com">melissa_m_24@yahoo.com</a>
                        </div>
                        <div class="contact-item">
                            <MDBIcon iconStyle="fab" icon="github" class="contact-icon" />
                            <a href="https://github.com/melissapula" target="_blank" rel="noopener"
                                >github.com/melissapula</a
                            >
                        </div>
                        <div class="contact-item">
                            <MDBIcon iconStyle="fab" icon="linkedin" class="contact-icon" />
                            <a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener"
                                >LinkedIn</a
                            >
                        </div>
                        <div class="contact-item">
                            <MDBIcon icon="map-marker-alt" class="contact-icon" />
                            <span>Bemidji, MN</span>
                        </div>
                    </div>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-vue-ui-kit';
    export default {
        name: 'Contact',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBIcon
        }
    };
</script>

<style scoped>
    .contact-card {
        background: white;
        border-radius: 12px;
        padding: 3rem 2.5rem;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    }
    .contact-items {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.1rem;
        color: #333;
    }
    .contact-icon {
        width: 24px;
        text-align: center;
        color: #2980b9;
        font-size: 1.2rem;
    }
    .contact-item a {
        color: #2980b9;
        text-decoration: none;
    }
    .contact-item a:hover {
        text-decoration: underline;
    }
</style>
