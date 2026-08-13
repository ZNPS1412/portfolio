import { useEffect, useState } from "react";
import { uploadResume, getResume } from "../../services/resumeService";

function ResumeManager() {

    const [englishResume, setEnglishResume] = useState(null);

    const [japaneseResume, setJapaneseResume] = useState(null);

    const [englishResumeInfo, setEnglishResumeInfo] = useState(null);

    const [japaneseResumeInfo, setJapaneseResumeInfo] = useState(null);

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const handleUpload = async (language, file) => {

        if (!file) {
            return;
        }

        try {

            setSuccess("");
            setError("");

            await uploadResume(language, file);

            await loadResumes();

            setSuccess(`${language} resume uploaded successfully.`);

        } catch (error) {

            setError("Failed to upload resume.");

            console.error(error);
        }

    };

    const loadResumes = async () => {

        try {

            const englishResponse = await getResume("EN");

            setEnglishResumeInfo(englishResponse.data.data);

        } catch {

            setEnglishResumeInfo(null);
        }

        try {

            const japaneseResponse = await getResume("JP");

            setJapaneseResumeInfo(japaneseResponse.data.data);

        } catch {

            setJapaneseResumeInfo(null);
        }

    };

    useEffect(() => {

        loadResumes();

    }, []);


    return (

        <div
            className="
                mt-12
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
            "
        >

            <h2
                className="
                    mb-6
                    text-2xl
                    font-bold
                "
            >
                Resume Management
            </h2>

            <div className="space-y-8">

                <div>

                    <h3
                        className="
                            mb-3
                            font-semibold
                        "
                    >
                        English Resume
                    </h3>

                    {
                        englishResumeInfo && (

                            <p
                                className="
                                    mb-3
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Current:
                                {" "}
                                {englishResumeInfo.originalFileName}
                            </p>

                        )
                    }

                    <div>

                        <label
                            htmlFor="englishResume"
                            className="
                                flex
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-white/10
                                bg-slate-900
                                px-4
                                py-3
                                transition
                                hover:border-cyan-400
                            "
                        >
                            📄 Choose PDF Resume
                        </label>

                        <input
                            id="englishResume"
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            onChange={(e) =>
                                setEnglishResume(
                                    e.target.files[0]
                                )
                            }
                        />

                        {englishResume && (

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Selected: {englishResume.name}
                            </p>

                        )}

                    </div>

                    <button
                        onClick={() =>
                            handleUpload(
                                "EN",
                                englishResume
                            )
                        }
                        className="
                            mt-4
                            rounded-lg
                            bg-cyan-500
                            px-4
                            py-2
                            font-semibold
                            text-slate-950
                        "
                    >
                        Upload
                    </button>

                </div>

                <div>

                    <h3
                        className="
                            mb-3
                            font-semibold
                        "
                    >
                        Japanese Resume
                    </h3>

                    {
                        japaneseResumeInfo && (

                            <p
                                className="
                                    mb-3
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Current:
                                {" "}
                                {japaneseResumeInfo.originalFileName}
                            </p>

                        )
                    }

                    <div>

                        <label
                            htmlFor="japaneseResume"
                            className="
                                flex
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-white/10
                                bg-slate-900
                                px-4
                                py-3
                                transition
                                hover:border-cyan-400
                            "
                        >
                            📄 Choose PDF Resume
                        </label>

                        <input
                            id="japaneseResume"
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            onChange={(e) =>
                                setJapaneseResume(
                                    e.target.files[0]
                                )
                            }
                        />

                        {japaneseResume && (

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Selected: {japaneseResume.name}
                            </p>

                        )}

                    </div>

                    <button
                        onClick={() =>
                            handleUpload(
                                "JP",
                                japaneseResume
                            )
                        }
                        className="
                            mt-4
                            rounded-lg
                            bg-cyan-500
                            px-4
                            py-2
                            font-semibold
                            text-slate-950
                        "
                    >
                        Upload
                    </button>

                </div>

                {
                    success && (
                        <p className="text-green-400">
                            {success}
                        </p>
                    )
                }

                {
                    error && (
                        <p className="text-red-400">
                            {error}
                        </p>
                    )
                }

            </div>

        </div>

    );

}

export default ResumeManager;
