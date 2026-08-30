import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";
import Reveal from "../common/Reveal";
import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

function Projects() {

    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {

        try {

            const response = await getProjects();

            setProjects(
                response.data.data.items
            );

        } catch (error) {

            console.error(
                "Failed to load projects:",
                error
            );

        }

    };

    useEffect(() => {

        loadProjects();

    }, []);

    const featuredProject = projects.find(
        (project) => project.featured
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    return (

        <Section
            id="projects"
            variant="dark"
            glow="purple"
        >

            <Reveal>
                <SectionTitle
                    eyebrow="FEATURED WORK"
                    title="Projects"
                    subtitle="A collection of projects demonstrating my experience in backend development, full-stack applications and modern software engineering."
                />
            </Reveal>

            {featuredProject && (

                <FeaturedProject
                    project={featuredProject}
                />

            )}

            <ProjectsGrid
                projects={otherProjects}
            />

        </Section>

    );

}

export default Projects;