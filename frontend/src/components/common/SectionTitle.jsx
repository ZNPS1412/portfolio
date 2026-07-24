function SectionTitle({
    eyebrow,
    title,
    subtitle,
}) {

    return (

        <div className="mb-16 text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                {eyebrow}
            </p>

            <h2 className="text-5xl font-bold text-white">
                {title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                {subtitle}
            </p>

        </div>

    );

}

export default SectionTitle;
