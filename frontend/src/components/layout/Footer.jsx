function Footer() {

    return (

        <footer
            className="
                border-t
                border-white/10
                bg-slate-950
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    py-8
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-4
                        text-center
                        text-sm
                        text-slate-500
                        md:flex-row
                        md:text-left
                    "
                >

                    <p>
                        © {new Date().getFullYear()} Zarni Paing Sett
                    </p>

                    <p
                        className="
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-2
                        "
                    >
                        Built with Spring Boot 4, React & PostgreSQL
                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;
