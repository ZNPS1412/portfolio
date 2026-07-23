import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/skills/Skills";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;
