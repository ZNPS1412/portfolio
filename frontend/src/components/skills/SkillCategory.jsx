import Card from "../common/Card";
import SkillItem from "./SkillItem";

function SkillCategory({ title, icon, skills }) {

    return (

        <Card>

            <div className="mb-8 flex items-center gap-3">

                <span className="text-2xl">
                    {icon}
                </span>

                <h3 className="text-xl font-semibold text-white">
                    {title}
                </h3>

            </div>

            <div className="space-y-2">

                {skills.map((skill) => (
                    <SkillItem
                        key={skill.id}
                        skill={skill}
                    />
                ))}

            </div>

        </Card>

    );

}

export default SkillCategory;
