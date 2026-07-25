import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Timeline from "./Timeline";
import CertificateCard from "./CertificateCard";
import TechnologyGrid from "./TechnologyGrid";

import {
    education,
    certifications,
    currentTechnologies
} from "../../data/education";

function Education() {

    return (

        <Section
            id="education"
            variant="light"
            glow="blue"
        >

            <SectionTitle
                eyebrow="ACADEMIC JOURNEY"
                title="Education & Certifications"
                subtitle="Academic achievements, professional certifications, and continuous learning that have shaped my journey"
            />

            <Timeline
                items={education}
            />

            <div className="mt-24">

                <h3 className="mb-8 text-center text-2xl font-semibold text-white">
                    Professional Certifications
                </h3>

                
                <div className="grid gap-6 md:grid-cols-3">

                    {certifications.map((certificate) => (
                        <CertificateCard
                            key={certificate.id}
                            certificate={certificate}
                        />
                    ))}

                </div>

            </div>

            <div className="mt-24">

                <SectionTitle
                    eyebrow="CONTINUOUS LEARNING"
                    title="Current Tech Stack"
                    subtitle="Technologies I am actively mastering and applying to build modern applications."
                />

                <TechnologyGrid
                    technologies={currentTechnologies}
                />

            </div>

        </Section>

    );

}

export default Education;
