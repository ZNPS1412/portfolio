import { iconMap } from "../../utils/iconMap";

function SkillBar({ skill }) {

    const Icon = iconMap[skill.icon];

    return (

        <div className="mb-6">

            <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    {Icon && (
                        <Icon
                            size={22}
                            color={skill.color}
                        />
                    )}

                    <span className="font-medium text-white">

                        {skill.name}

                    </span>

                </div>

                <span className="text-slate-400">

                    {skill.level}%

                </span>

            </div>

            <div className="h-3 rounded-full bg-slate-700">

                <div

                    className="h-3 rounded-full transition-all duration-700"

                    style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                    }}

                />

            </div>

        </div>

    );

}

export default SkillBar;
