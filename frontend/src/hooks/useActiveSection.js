import { useEffect, useState } from "react";

function useActiveSection() {

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }

                });

            },

            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }

        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();

    }, []);

    return activeSection;

}

export default useActiveSection;
