function Button({
    children,
    type = "button",
    href,
    variant = "primary",
    className = "",
}) {

    const variants = {

        primary: `
            bg-cyan-500
            text-slate-950
            hover:bg-cyan-400
        `,

        secondary: `
            bg-white/5
            text-white
            border
            border-white/10
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
        `,

        outline: `
            border
            border-cyan-400/30
            text-cyan-300
            hover:bg-cyan-400/10
        `,

    };

    const styles = `
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-3
        font-medium
        transition-all
        duration-300
        hover:-translate-y-0.5
        ${variants[variant]}
        ${className}
    `;

    if (href) {

        return (

            <a
                href={href}
                className={styles}
                target="_blank"
                rel="noreferrer"
            >
                {children}
            </a>

        );

    }

    return (

        <button type={type} className={styles}>
            {children}
        </button>

    );

}

export default Button;
