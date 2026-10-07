import ContactFAQ from "../../../components/Contact/ContactFAQ";
import ContactForm from "../../../components/Contact/ContactForm";
import ContactHero from "../../../components/Contact/ContactHero";
import ContactInfo from "../../../components/Contact/ContactInfo";
import ContactVisit from "../../../components/Contact/ContactVisit";


const Contact = () => {
  return (
    <div className="w-full">

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactVisit />

      <ContactFAQ />

    </div>
  );
};

export default Contact;