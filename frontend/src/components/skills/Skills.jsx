import SkillCategory from "./SkillCategory";
import SkillBar from "./SkillBar";
import SkillChip from "./SkillChip";

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
        <section id="skills" className="bg-slate-950 py-28">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-16 text-center text-5xl font-bold text-white">

                    Technical Skills

                </h2>

                <div className="grid gap-8 lg:grid-cols-2">
                    <SkillCategory
                        title="Programming Languages"
                        icon="💻"
                    >
                        {programmingLanguages.map((skill) => (
                            <SkillBar
                                key={skill.id}
                                skill={skill}
                            />
                        ))}
                    </SkillCategory>
                </div>
                
                <div className="grid gap-8 lg:grid-cols-2">
                    <SkillCategory
                        title="Frameworks"
                        icon="🛠️"
                    >
                        {frameworks.map((skill) => (
                            <SkillBar
                                key={skill.id}
                                skill={skill}
                            />
                        ))}
                    </SkillCategory>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <SkillCategory
                        title="Backend Technologies"
                        icon="🗄️"
                    >
                        {backendTechnologies.map((skill) => (
                            <SkillBar
                                key={skill.id}
                                skill={skill}
                            />
                        ))}
                    </SkillCategory>
                </div>

                <div className="flex flex-wrap gap-3">
                    {databases.map((database) => (
                        <SkillChip
                            key={database.id}
                            skill={database}
                        />
                    ))}
                </div>

                <div className="flex flex-wrap gap-3">
                    {developmentTools.map((tool) => (
                        <SkillChip
                            key={tool.id}
                            skill={tool}
                        />
                    ))}
                </div>  

                <div className="flex flex-wrap gap-3">
                    {additionalSoftware.map((software) => (
                        <SkillChip
                            key={software.id}
                            skill={software}
                        />
                    ))}
                </div>

            </div>

        </section>
    );

}

export default Skills;
