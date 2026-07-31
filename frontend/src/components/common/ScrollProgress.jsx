import { useEffect, useState } from "react";

function ScrollProgress() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        const updateScroll = () => {

            const total =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                (window.scrollY / total) * 100;

            setScroll(progress);

        };

        window.addEventListener("scroll", updateScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                updateScroll
            );

    }, []);

    return (

        <div
            className="
                fixed
                left-0
                top-0
                z-9999
                h-1
                bg-cyan-400
            "
            style={{
                width: `${scroll}%`,
            }}
        />

    );

}

export default ScrollProgress;
