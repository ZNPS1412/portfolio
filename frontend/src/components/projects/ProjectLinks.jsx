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
            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                    <FaGithub />

                    GitHub
                </a>
            )}
            </Reveal>

            <Reveal>
            {project.liveDemoUrl && (
                <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                    <FaArrowUpRightFromSquare />

                    Live Demo
                </a>
            )}
            </Reveal>

            <Reveal>
            {project.apiDocsUrl && (
                <a
                    href={project.apiDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
