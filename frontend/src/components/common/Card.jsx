function Card({ children, className = "" }) {

    return (

        <div
            className={`
                h-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:shadow-xl
                hover:shadow-cyan-500/10
                ${className}
            `}
        >
            {children}
        </div>

    );

}

export default Card;
