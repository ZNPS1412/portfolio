import { useEffect, useRef, useState } from "react";

function Reveal({ children }) {

    const ref = useRef(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {
                    setVisible(true);
                }

            },

            {
                threshold: 0.25,
            }

        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    }, []);

    return (

        <div
            ref={ref}
            className={`
                transition-all
                duration-700

                ${
                    visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                }
            `}
        >
            {children}
        </div>

    );

}

export default Reveal;
