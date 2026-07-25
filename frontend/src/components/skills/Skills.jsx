import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";

import {
    programmingLanguages,
    frameworks,
    backendTechnologies,
    databases,
    developmentTools,
    additionalSoftware,
} from "../../data/skills";

function Skills() {

    const categories = [

        {
            title: "Programming Languages",
            icon: "💻",
            skills: programmingLanguages,
        },

        {
            title: "Frameworks & Libraries",
            icon: "📦",
            skills: frameworks,
        },

        {
            title: "Backend Technologies",
            icon: "🛡️",
            skills: backendTechnologies,
        },

        {
            title: "Databases",
            icon: "🗄️",
            skills: databases,
        },

        {
            title: "Development Tools",
            icon: "🛠️",
            skills: developmentTools,
        },

        {
            title: "Additional Software",
            icon: "🎨",
            skills: additionalSoftware,
        },

    ];

    
    return (

        <Section
            id="skills"
            variant="dark"
            glow="cyan"
        >

            <SectionTitle
                eyebrow="TECHNICAL EXPERTISE"
                title="Technical Skills"
                subtitle="Technologies, frameworks and tools I use to design, develop and deploy modern applications."
            />

            <div className="grid gap-8 lg:grid-cols-2">

                {categories.map((category) => (
                    <SkillCategory
                        key={category.title}
                        title={category.title}
                        icon={category.icon}
                    >

                        {category.skills.map((skill) => (
                            <SkillItem
                                key={skill.id}
                                skill={skill}
                            />
                        ))}

                    </SkillCategory>

                ))}

            </div>

        </Section>

    );

}

export default Skills;
