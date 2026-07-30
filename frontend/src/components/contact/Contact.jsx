import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {

    return (

        <Section
            id="contact"
            variant="light"
            glow="cyan"
        >

            <SectionTitle
                eyebrow="GET IN TOUCH"
                title="Let's Work Together"
                subtitle="Interested in collaborating, discussing opportunities, or simply saying hello? Feel free to reach out."
            />

            <div className="grid gap-8 lg:grid-cols-2">

                <ContactInfo />

                <ContactForm />

            </div>

        </Section>

    );

}

export default Contact;
