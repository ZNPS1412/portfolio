import Card from "../common/Card";
import { iconMap } from "../../utils/iconMap";

function TechnologyCard({ technology }) {

    const Icon = iconMap[technology.icon];

    return (

        <Card className="group p-5">

            <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                    backgroundColor: `${technology.color}20`,
                    color: technology.color,
                }}
            >
                <Icon size={26} />
            </div>

            <h4 className="font-semibold text-white">
                {technology.name}
            </h4>

            <p className="mt-1 text-sm text-slate-400">
                {technology.category}
            </p>

        </Card>

    );

}

export default TechnologyCard;
