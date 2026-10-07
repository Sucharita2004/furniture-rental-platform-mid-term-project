import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ContactInfo } from "../../types/interface/ContactInfo.interface";



const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@furnirent.com",
    description: "Send us your questions anytime.",
  },

  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Talk to our support team.",
  },

  {
    icon: MapPin,
    title: "Our Studio",
    value: "Kolkata, India",
    description: "Come and talk furniture with us.",
  },

  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat",
    description: "10:00 AM - 7:00 PM",
  },
];

export default contactInfo;