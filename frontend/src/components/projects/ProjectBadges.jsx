import Reveal from "../common/Reveal";

function ProjectBadges({ technologies }) {

    return (

        <div className="mt-8 flex flex-wrap gap-3">

            {technologies.map((technology) => (
                <Reveal key={technology}>
                <span
                    key={technology}
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
