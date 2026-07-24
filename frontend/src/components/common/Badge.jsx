function Badge({ level }) {

    const colors = {

        Expert:
            "bg-emerald-500/15 text-emerald-400 border border-emerald-400/20",

        Advanced:
            "bg-cyan-500/15 text-cyan-400 border border-cyan-400/20",

        Intermediate:
            "bg-violet-500/15 text-violet-400 border border-violet-400/20",

        Learning:
            "bg-amber-500/15 text-amber-400 border border-amber-400/20",

    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[level]}`}
        >
            {level}
        </span>

    );

}

export default Badge;
