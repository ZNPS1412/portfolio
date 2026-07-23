import { iconMap } from "../../utils/iconMap";

function SkillChip({ skill }) {

    const Icon = iconMap[skill.icon];

    return (

        <div

            className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-700
                bg-slate-800
                px-4
                py-2
                text-slate-200
                transition
                duration-300
                hover:border-cyan-400
                hover:bg-slate-700
            "

        >

            {Icon && <Icon size={18} />}

            {skill.name}

        </div>

    );

}

export default SkillChip;
