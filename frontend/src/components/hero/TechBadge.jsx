function TechBadge({ name, animation }) {

    return (

        <div
            className={`
                ${animation}
                rounded-full
                border
                border-slate-700
                bg-slate-900/70
                px-4
                py-2
                text-sm
                text-slate-300
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-400
                hover:text-blue-400
                hover:shadow-xl
            `}
        >

            {name}

        </div>

    );

}

export default TechBadge;
