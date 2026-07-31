import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Timeline from "./Timeline";
import CertificateCard from "./CertificateCard";
import TechnologyGrid from "./TechnologyGrid";
import Reveal from "../common/Reveal";

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

            <Reveal>
            <SectionTitle
                eyebrow="ACADEMIC JOURNEY"
                title="Education & Certifications"
                subtitle="Academic achievements, professional certifications, and continuous learning that have shaped my journey"
            />
            </Reveal>

            <Timeline
                items={education}
            />

            <div className="mt-24">

                <Reveal>
                <h3 className="mb-8 text-center text-2xl font-semibold text-white">
                    Professional Certifications
                </h3>
                </Reveal>
                
                <div className="grid gap-6 md:grid-cols-3">

                    {certifications.map((certificate) => (
                        <Reveal key={certificate.id}>
                        <CertificateCard
                            key={certificate.id}
                            certificate={certificate}
                        />
                        </Reveal>
                    ))}

                </div>

            </div>

            <div className="mt-24">

            <Reveal>
            <div className="mb-12 text-center">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
                    CONTINUOUS LEARNING
                </p>

                <h3 className="text-3xl font-bold text-white md:text-4xl">
                    Current Tech Stack
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    Technologies I am actively mastering and applying to build modern applications.
                </p>

            </div>
            </Reveal>

            <TechnologyGrid
                technologies={currentTechnologies}
            />

        </div>

        </Section>

    );

}

export default Education;
