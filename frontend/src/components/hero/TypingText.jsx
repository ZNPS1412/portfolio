import { useEffect, useState } from "react";

const words = [
    "Full-Stack Java Developer",
    "Spring Boot Specialist",
    "React Developer",
    "Graphic Design Enthusiast",
    "Godot Apprentice"
];

function TypingText() {

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        const currentWord = words[wordIndex];

        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {

            if (!isDeleting) {

                setText(currentWord.substring(0, text.length + 1));

                if (text === currentWord) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1200);
                }

            } else {

                setText(currentWord.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((previous) => (previous + 1) % words.length);
                }

            }

        }, speed);

        return () => clearTimeout(timeout);

    }, [text, isDeleting, wordIndex]);

    return (
        <h2 className="mt-6 text-3xl font-semibold text-blue-300">
            {text}
            <span className="animate-pulse">|</span>
        </h2>
    );
}

export default TypingText;
