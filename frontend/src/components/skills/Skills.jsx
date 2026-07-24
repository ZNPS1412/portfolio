import SkillCategory from "./SkillCategory";
import SectionTitle from "../common/SectionTitle";

import {
    programmingLanguages,
    frameworks,
    backendTechnologies,
    databases,
    developmentTools,
    additionalSoftware,
} from "../data/skills";

function Skills() {

    return (

        <section
            id="skills"
            className="bg-slate-950 py-28"
        >

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    eyebrow="TECHNICAL EXPERTISE"
                    title="Technical Skills"
                    subtitle="Technologies, frameworks and tools I use to design, develop and deploy modern applications."
                />

                <div className="grid gap-8 lg:grid-cols-2">

                    <SkillCategory
                        title="Programming Languages"
                        icon="💻"
                        skills={programmingLanguages}
                    />

                    <SkillCategory
                        title="Frameworks & Libraries"
                        icon="📦"
                        skills={frameworks}
                    />

                    <SkillCategory
                        title="Backend Technologies"
                        icon="🛡️"
                        skills={backendTechnologies}
                    />

                    <SkillCategory
                        title="Databases"
                        icon="🗄️"
                        skills={databases}
                    />

                    <SkillCategory
                        title="Development Tools"
                        icon="🛠️"
                        skills={developmentTools}
                    />

                    <SkillCategory
                        title="Additional Software"
                        icon="🎨"
                        skills={additionalSoftware}
                    />

                </div>

            </div>

        </section>

    );

}

export default Skills;
