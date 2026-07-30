import { iconMap } from "../../utils/iconMap";

function ContactItem({ item }) {

    const Icon = iconMap[item.icon];

    return (

        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:-translate-y-1
            "
        >

            <div className="flex items-center gap-4">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-cyan-500/10
                        text-cyan-400
                    "
                >
                    <Icon size={20} />
                </div>

                <div>

                    <p className="text-sm text-slate-400">
                        {item.label}
                    </p>

                    {
                        item.href ? (

                            <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    font-medium
                                    text-white
                                    hover:text-cyan-400
                                "
                            >
                                {item.value}
                            </a>

                        ) : (

                            <p className="font-medium text-white">
                                {item.value}
                            </p>

                        )
                    }

                </div>

            </div>

        </div>

    );

}

export default ContactItem;
