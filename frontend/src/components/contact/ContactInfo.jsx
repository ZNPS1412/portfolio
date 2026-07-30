import ContactItem from "./ContactItem";
import { contactInfo } from "../../data/contact";

function ContactInfo() {

    return (

        <div className="space-y-5">

            {contactInfo.map((item) => (

                <ContactItem
                    key={item.id}
                    item={item}
                />

            ))}

        </div>

    );

}

export default ContactInfo;
