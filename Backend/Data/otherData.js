const otherData = {
  about: {
    title: "About MDRConnects",
    mission:
      "Our mission is to connect every step of the medical device reprocessing cycle with clarity, compliance, and confidence.",
    vision:
      "We envision a world where every reprocessed medical device is safe, functional, and ready to protect patients.",
    values: [
      { id: 1, title: "Safety First", description: "Patient safety drives every decision we make." },
      { id: 2, title: "Compliance", description: "We follow international standards and regulations." },
      { id: 3, title: "Innovation", description: "We continuously improve our processes and tools." },
      { id: 4, title: "Integrity", description: "Transparency and honesty in everything we do." },
    ],
  },

  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you. Reach out for any questions or support.",
    email: "info@mdrconnects.com",
    phone: "+1 (800) MDR-SAFE",
    address: "123 MedTech Drive, Suite 400, Boston, MA 02101",
    formFields: [
      { id: "name", label: "Full Name", type: "text", placeholder: "Enter your name" },
      { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
      { id: "organization", label: "Organization", type: "text", placeholder: "Your hospital or clinic" },
      { id: "message", label: "Message", type: "textarea", placeholder: "How can we help you?" },
    ],
  },

  resources: {
    title: "Resources",
    subtitle: "Access the latest guides, whitepapers, and training materials on medical device reprocessing.",
    categories: [
      {
        id: 1,
        category: "Guidelines",
        items: [
          { id: 1, title: "FDA Reprocessing Guidelines 2024", type: "PDF", date: "Jan 2024" },
          { id: 2, title: "WHO Decontamination Standards", type: "PDF", date: "Mar 2024" },
        ],
      },
      {
        id: 2,
        category: "Training",
        items: [
          { id: 1, title: "Sterile Processing Technician Basics", type: "Video", date: "Feb 2024" },
          { id: 2, title: "Advanced Sterilization Techniques", type: "Webinar", date: "Apr 2024" },
        ],
      },
      {
        id: 3,
        category: "Whitepapers",
        items: [
          { id: 1, title: "Reducing HAIs Through Proper Reprocessing", type: "PDF", date: "Dec 2023" },
          { id: 2, title: "Cost-Benefit Analysis of MDR Compliance", type: "PDF", date: "Jun 2024" },
        ],
      },
    ],
  },

  standards: {
    title: "Standards & Compliance",
    subtitle:
      "MDRConnects aligns with the highest international standards to ensure every reprocessing cycle is compliant and patient-safe.",
    standards: [
      {
        id: 1,
        code: "ISO 17664",
        title: "Processing of Health Care Products",
        description: "Information to be provided by the medical device manufacturer for the processing of medical devices.",
      },
      {
        id: 2,
        code: "ANSI/AAMI ST79",
        title: "Steam Sterilization",
        description: "Comprehensive guide to steam sterilization and sterility assurance in health care facilities.",
      },
      {
        id: 3,
        code: "ISO 11135",
        title: "Ethylene Oxide Sterilization",
        description: "Requirements for the development, validation, and routine control of EO sterilization.",
      },
      {
        id: 4,
        code: "CDC Guidelines",
        title: "Disinfection & Sterilization",
        description: "Evidence-based guidelines for disinfection and sterilization of patient-care equipment.",
      },
    ],
  },
};

module.exports = otherData;