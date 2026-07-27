function ProjectWindow({ children }) {

    return (

        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-slate-900
                shadow-2xl
            "
        >

            <div
                className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/10
                    bg-slate-800
                    px-5
                    py-3
                "
            >

                <span className="h-3 w-3 rounded-full bg-red-400" />

                <span className="h-3 w-3 rounded-full bg-yellow-400" />

                <span className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            {children}

        </div>

    );

}

export default ProjectWindow;
