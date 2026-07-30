import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Skills from "../components/skills/Skills";
import Education from "../components/education/Education";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/common/ScrollProgress";

function Home() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
