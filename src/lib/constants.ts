export const COMPANY_NAME = "GRT Kariakoo Company Limited";
export const COMPANY_SHORT = "Generator Kariakoo Company Ltd";

export const PHONE_PRIMARY = "+255 753 575 555";
export const PHONE_SECONDARY = "+255 657 575 555";
export const PHONE_TEL_PRIMARY = "+255753575555";
export const PHONE_TEL_SECONDARY = "+255657575555";

export const EMAIL = "generatortkariakoocompanylimited@gmail.com";

export const ADDRESS_LINES = [
  "Wikicha Tower",
  "Plot No: 897–904, Mwaikibaki Road",
  "Mikocheni (Bonde la Mpunga)",
  "Dar es Salaam, Tanzania",
] as const;

export const ADDRESS_FULL = ADDRESS_LINES.join(", ");

export const WHATSAPP_MESSAGE =
  "Hello, I would like a quotation for a generator.";

export const WHATSAPP_URL = `https://wa.me/255753575555?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Google Maps embed — Mikocheni / Dar es Salaam area */
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.254!2d39.2636!3d-6.752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c5b8e8e8e8e8e%3A0x0!2sMikocheni%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1700000000000";

export const SEO_KEYWORDS =
  "generators Tanzania, Perkins generators Tanzania, Cummins generators Tanzania, industrial generators Dar es Salaam, mining generators Tanzania, mining equipment Tanzania, ATS installation Tanzania, generator installation Dar es Salaam, backup power Tanzania, generator rental Tanzania, diesel generators Tanzania";

export const SEO_HOME_TITLE =
  "GRT Kariakoo — Perkins & Industrial Generators Tanzania | Dar es Salaam";

export const SEO_HOME_DESCRIPTION =
  "Perkins & Cummins generators in Tanzania. Sales, installation, ATS, mining power systems, 3-year warranty, free delivery. Dar es Salaam, Geita, Mwanza, Zanzibar & nationwide.";

export const WORKING_HOURS = "Mon – Sat: 8:00 AM – 6:00 PM";
export const WORKING_HOURS_DETAIL = [
  "Monday – Friday: 8:00 AM – 6:00 PM",
  "Saturday: 8:00 AM – 4:00 PM",
  "Sunday: Emergency support only",
] as const;

export const INSTAGRAM_URL =
  "https://www.instagram.com/generator_kariakoo_company_ltd?igsh=OGM4aWZ2cXprazBo";
