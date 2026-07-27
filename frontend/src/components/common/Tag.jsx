function Tag({
    children,
    className = "",
}) {

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-3
                py-1
                text-sm
                font-medium
                text-cyan-300
                ${className}
            `}
        >
            {children}
        </span>

    );

}

export default Tag;
