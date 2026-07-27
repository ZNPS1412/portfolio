import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";

import { projects } from "../../data/projects";

const featuredProject = projects.find((project) => project.featured);

const otherProjects = projects.filter((project) => !project.featured);

function Projects() {

    return (

        <Section
            id="projects"
            variant="dark"
            glow="purple"
        >

            <SectionTitle
                eyebrow="FEATURED WORK"
                title="Projects"
                subtitle="A collection of projects demonstrating my experience in backend development, full-stack applications and modern software engineering."
            />

            <FeaturedProject
                project={featuredProject}
            />

            <ProjectsGrid
                projects={otherProjects}
            />

        </Section>

    );

}

export default Projects;
