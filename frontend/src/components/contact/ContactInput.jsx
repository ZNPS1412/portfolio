function ContactInput({
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    autoComplete,
}) {

    return (

        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
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

export default ContactInput;
