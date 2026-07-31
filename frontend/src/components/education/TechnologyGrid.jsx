import TechnologyCard from "./TechnologyCard";
import Reveal from "../common/Reveal";

function TechnologyGrid({ technologies }) {

    return (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {technologies.map((technology) => (
                <Reveal key={technology.id}>
                <TechnologyCard
                    key={technology.id}
                    technology={technology}
                />
                </Reveal>
            ))}

        </div>

    );

}

export default TechnologyGrid;
