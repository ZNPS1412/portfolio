function ContactTextarea({
    name,
    placeholder,
    rows = 4,
    value,
    onChange,
}) {

    return (

        <textarea
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                transition-all
                duration-300
                focus:border-cyan-400/50
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500/20
            "
        />

    );

}

export default ContactTextarea;
