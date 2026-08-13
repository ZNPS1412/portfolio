import { useEffect, useState } from "react";
import { getMessages, deleteMessage } from "../../services/contactService";

function ContactMessages() {

    const [messages, setMessages] = useState([]);

    const [selectedMessage, setSelectedMessage] = useState(null);

    const loadMessages = async () => {

        try {

            const response = await getMessages();

            setMessages(response.data.data);

        } catch (error) {

            console.error(error);
        }

    };

    useEffect(() => {

        loadMessages();

    }, []);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete message?")) {
            return;
        }

        try {

            await deleteMessage(id);

            loadMessages();

        } catch (error) {

            console.error(error);
        }

    };

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
                Contact Messages
            </h2>

            <div className="space-y-4">

                {messages.length === 0 && (

                    <p className="text-center text-slate-400">
                        No contact messages yet.
                    </p>

                )}

                {messages.map((message) => (

                    <div
                        key={message.id}
                        className="
                            rounded-lg
                            border
                            border-white/10
                            p-4
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-4
                                sm:flex-row
                                sm:justify-between
                            "
                        >

                            <div>

                                <h3 className="font-semibold break-all">
                                    {message.subject}
                                </h3>

                                <p className="text-slate-400 break-all">
                                    {message.name}
                                    {" • "}
                                    {message.email}
                                </p>

                                <p className="text-slate-500 text-sm">
                                    {new Date(message.createdAt).toLocaleString()}
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    gap-2
                                    sm:justify-end
                                "
                            >

                            <button
                                onClick={() => setSelectedMessage(message)}
                                className="
                                    flex-1
                                    rounded-lg
                                    bg-cyan-500
                                    px-3
                                    py-2
                                    text-sm
                                    font-semibold
                                    text-slate-950
                                    sm:flex-none
                                "
                            >
                                View
                            </button>

                            <button
                                onClick={() => handleDelete(message.id)}
                                className="
                                    flex-1
                                    rounded-lg
                                    bg-red-500
                                    px-3
                                    py-2
                                    text-sm
                                    font-semibold
                                    sm:flex-none
                                "
                            >
                                Delete
                            </button>

                        </div>

                        </div>

                        <p className="mt-4 text-slate-300 wrap-break-word">
                            {message.message.length > 150
                                ? `${message.message.substring(0, 150)}...`
                                : message.message}
                        </p>

                    </div>

                ))}

            </div>

            {selectedMessage && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/70
                        p-4
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-2xl
                            rounded-2xl
                            border
                            border-white/10
                            bg-slate-900
                            p-6
                        "
                    >

                        <div className="mb-6 flex items-start justify-between">

                            <div>

                                <h3 className="text-2xl font-bold break-all">
                                    {selectedMessage.subject}
                                </h3>

                                <p className="mt-2 text-slate-400 break-all">
                                    {selectedMessage.name}
                                    {" • "}
                                    {selectedMessage.email}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {new Date(
                                        selectedMessage.createdAt
                                    ).toLocaleString()}
                                </p>

                            </div>

                            <button
                                onClick={() =>
                                    setSelectedMessage(null)
                                }
                                className="
                                    text-2xl
                                    text-slate-400
                                    hover:text-white
                                "
                            >
                                ×
                            </button>

                        </div>

                        <div
                            className="
                                max-h-100
                                overflow-y-auto
                                rounded-lg
                                border
                                border-white/10
                                bg-slate-950
                                p-4
                            "
                        >

                            <p className="whitespace-pre-wrap text-slate-300 wrap-break-word">
                                {selectedMessage.message}
                            </p>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}

export default ContactMessages;
