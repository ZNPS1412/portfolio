import Container from "./Container";

const variants = {
    dark: "bg-slate-950",
    light: "bg-slate-900",
};

const glowColors = {
    cyan: "bg-cyan-500/10",
    violet: "bg-violet-500/10",
    emerald: "bg-emerald-500/10",
    blue: "bg-blue-500/10",
    none: "",
};


function Section({
    id,
    variant = "dark",
    glow = "none",
    children,
}) {

    return (

        <section
            id={id}
            className={`relative overflow-hidden py-28 text-white ${variants[variant]}`}
        >

            {glow !== "none" && (

                <>

                    <div
                        className={`absolute -left-44 -top-44 h-128 w-lg rounded-full blur-3xl ${glowColors[glow]}`}
                    />

                    <div
                        className={`absolute -bottom-44 -right-44 h-128 w-lg rounded-full blur-3xl ${glowColors[glow]}`}
                    />

                </>

            )}

            <Container>
                {children}
            </Container>

        </section>

    );

}

export default Section;
