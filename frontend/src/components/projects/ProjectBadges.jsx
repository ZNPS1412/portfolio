import Reveal from "../common/Reveal";

function ProjectBadges({ technologies }) {

    const technologyList = Array.isArray(technologies)
        ? technologies
        : technologies
            ?.split(",")
            .map((technology) => technology.trim())
            .filter(Boolean) || [];

    return (

        <div className="mt-8 flex flex-wrap gap-3">

            {technologyList.map((technology) => (

                <Reveal key={technology}>

                    <span
                        className="
                            rounded-full
                            border
                            border-cyan-400/20
                            bg-cyan-400/10
                            px-3
                            py-1
                            text-sm
                            font-medium
                            text-cyan-300
                        "
                    >
                        {technology}
                    </span>

                </Reveal>

            ))}

        </div>

    );

}

export default ProjectBadges;
