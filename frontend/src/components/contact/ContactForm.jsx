import Button from "../common/Button";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";
import { useState } from "react";
import { sendMessage } from "../../services/contactService";

const initialForm = {

    name: "",
    email: "",
    subject: "",
    message: "",

};

function ContactForm() {

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

    };

    const handleSubmit = async (event) => {

    event.preventDefault();

        try {

            setLoading(true);
            setSuccess("");
            setError("");

            await sendMessage(formData);

            setSuccess("Message sent successfully. I'll get back to you soon.");
            setFormData(initialForm);

        } catch (error) {

            console.error(error);
            setError("Failed to send message. Please try again.");

        } finally {

            setLoading(false);
        }

    };


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

            <form onSubmit={handleSubmit} className="space-y-5">

                <ContactInput
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                />

                <ContactInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                />

                <ContactInput
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <ContactTextarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />

                {
                    success && (

                        <p
                            className="
                                text-sm
                                text-green-400
                            "
                        >
                            {success}
                        </p>

                    )
                }

                {
                    error && (

                        <p
                            className="
                                text-sm
                                text-red-400
                            "
                        >
                            {error}
                        </p>

                    )
                }
                
                <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                >
                    {
                        loading
                            ? "Sending..."
                            : "Send Message →"
                    }
                </Button>

            </form>

        </div>

    );

}

export default ContactForm;
