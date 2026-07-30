import Card from "../common/Card";
import { iconMap } from "../../utils/iconMap";

function TechnologyCard({ technology }) {

    const Icon = iconMap[technology.icon];

    return (

        <Card className="group p-5">

            <div className="flex items-center gap-4">

                <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                        backgroundColor: `${technology.color}20`,
                        color: technology.color,
                    }}
                >
                    <Icon size={26} />
                </div>

                <div>

                    <h4 className="font-semibold text-white">
                        {technology.name}
                    </h4>

                    <p className="text-sm text-slate-400">
                        {technology.category}
                    </p>

                </div>

            </div>

        </Card>

    );

}

export default TechnologyCard;
