import { iconMap } from "../../utils/iconMap";
import Card from "../common/Card";

function CertificateCard({ certificate }) {

    const Icon = iconMap[certificate.icon];

    return (

        <Card className="group">

            <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl"
                style={{
                    backgroundColor: `${certificate.color}20`,
                    color: certificate.color,
                }}
            >
                <Icon />
            </div>

            <h4 className="text-xl font-bold text-white">
                {certificate.title}
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {certificate.subtitle}
            </p>

            <div className="mt-6">

                <span
                    className="rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                        backgroundColor: `${certificate.color}20`,
                        color: certificate.color,
                    }}
                >
                    {certificate.issuer}
                </span>

            </div>

        </Card>

    );

}

export default CertificateCard;
