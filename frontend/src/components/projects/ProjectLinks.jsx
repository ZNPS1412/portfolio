import {
    FaGithub,
    FaArrowUpRightFromSquare,
    FaBookOpen,
} from "react-icons/fa6";

import Reveal from "../common/Reveal";

function ProjectLinks({ project }) {

    return (

        <div className="mt-8 flex flex-wrap gap-4">

            <Reveal>
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                    <FaGithub />

                    GitHub
                </a>
            )}
            </Reveal>

            <Reveal>
            {project.liveDemo && (
                <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                    <FaArrowUpRightFromSquare />

                    Live Demo
                </a>
            )}
            </Reveal>

            <Reveal>
            {project.apiDocs && (
                <a
                    href={project.apiDocs}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                    <FaBookOpen />

                    API Docs
                </a>
            )}
            </Reveal>

        </div>

    );

}

export default ProjectLinks;
