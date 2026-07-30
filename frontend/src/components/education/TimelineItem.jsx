function TimelineItem({ item, index }) {

    const isLeft = index % 2 === 0;

    return (

        <div
            className={`relative flex items-center ${
                isLeft ? "justify-start" : "justify-end"
            }`}
        >

            {/* Desktop Dot */}
            <div
                className="
                    absolute
                    left-1/2
                    z-20
                    hidden
                    h-6
                    w-6
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-slate-900
                    bg-cyan-400
                    shadow-[0_0_20px_rgba(34,211,238,.8)]
                    lg:block
                "
            />

            {/* Card */}
            <div
                className={`w-full lg:w-[45%] rounded-2xl
                border border-slate-800
                bg-slate-900/70
                backdrop-blur-sm
                p-6
                transition-all duration-300

                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(34,211,238,.18)]`}
            >

                <span className="text-sm text-cyan-400">
                    {item.period}
                </span>

                <div className="mt-5 text-5xl">
                    {item.icon}
                </div>

                <h3
                    className="mt-2
                    text-2xl
                    font-bold
                    text-white"
                >
                    {item.degree}
                </h3>

                <p className="mt-2 text-slate-300">
                    {item.institution}
                </p>

                {item.achievement && (
                    <div
                        className="mt-5
                        inline-flex
                        rounded-full
                        bg-cyan-500/10
                        px-4
                        py-2
                        text-cyan-300"
                    >
                        {item.achievement}
                    </div>
                )}

            </div>

        </div>

    );

}

export default TimelineItem;
