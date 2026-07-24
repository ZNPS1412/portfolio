import Badge from "../common/Badge";
import { iconMap } from "../../utils/iconMap";

function SkillItem({ skill }) {

    const Icon = iconMap[skill.icon];

    return (

        <div
            className="
                flex
                items-center
                justify-between
                rounded-xl
                p-3
                transition-all
                duration-300
                hover:bg-white/5
            "
        >

            <div className="flex items-center gap-4">

                {Icon && (
                    <Icon
                        size={28}
                        style={{
                            color: skill.color,
                        }}
                        className="transition-transform duration-300 group-hover:rotate-6"
                    />
                )}

                <span className="font-medium text-white">
                    {skill.name}
                </span>

            </div>

            <Badge level={skill.proficiency}/>

        </div>

    );

}

export default SkillItem;
