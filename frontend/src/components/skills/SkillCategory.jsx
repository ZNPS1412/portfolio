import Card from "../common/Card";

function SkillCategory({
    title,
    subtitle,
    icon,
    children,
}) {

    return (

        <Card>

            <div className="mb-8 flex items-center gap-4">

                <div className="text-3xl">
                    {icon}
                </div>

                <div>

                    <h3 className="text-2xl font-bold text-white">
                        {title}
                    </h3>

                    {
                        subtitle && (
                            <p className="mt-1 text-sm text-slate-400">
                                {subtitle}
                            </p>

                        )
                    }

                </div>

            </div>

            <div className="space-y-4">
                {children}
            </div>

        </Card>

    );

}

export default SkillCategory;
