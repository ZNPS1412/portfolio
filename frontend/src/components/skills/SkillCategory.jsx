function SkillCategory({ title, icon, children }) {
    
    return (
        <div
            className="
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                backdrop-blur-md
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-xl
            "
        >
            <h3 className="mb-8 text-2xl font-bold text-white">
                {icon} {title}
            </h3>

            {children}
        </div>
    );
}

export default SkillCategory;
