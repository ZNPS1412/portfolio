import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies }) {

    return (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {technologies.map((technology) => (
                <TechnologyCard
                    key={technology.id}
                    technology={technology}
                />
            ))}

        </div>

    );

}

export default TechnologyGrid;
