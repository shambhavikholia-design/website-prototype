const homeData = {
  hero: {
    tagline: "CONNECTING EVERY STEP. PROTECTING EVERY PATIENT.",
    heading: "Medical Device Reprocessing Done Right.",
    subheading:
      "MDRConnects brings clarity, compliance, and confidence to every stage of the reprocessing cycle.",
    ctaText: "Explore the Process",
  },

  phases: {
    sectionLabel: "THE 4 PHASES OF",
    sectionTitle: "Medical Device Reprocessing",
    sectionSubtitle:
      "A standardized, science-based process that ensures every instrument is safe, functional, and ready for patient care.",
    items: [
      {
        id: 1,
        title: "DECONTAMINATION",
        description:
          "Thorough cleaning and disinfection to remove soil, bioburden, and contaminants.",
        icon: "droplet",
      },
      {
        id: 2,
        title: "ASSEMBLY",
        description:
          "Inspection, function check, and proper assembly to ensure performance and safety.",
        icon: "tools",
      },
      {
        id: 3,
        title: "STERILIZATION",
        description:
          "Validated sterilization process eliminates microorganisms and ensures sterility.",
        icon: "steam",
      },
      {
        id: 4,
        title: "STORAGE",
        description:
          "Proper packaging and controlled storage maintain sterility until point of use.",
        icon: "box",
      },
    ],
  },

  flow: {
    sectionTitle: "THE FLOW OF INSTRUMENTS",
    steps: [
      {
        id: 1,
        title: "Point of Use",
        description: "Used instruments at the patient site",
        icon: "scalpel",
      },
      {
        id: 2,
        title: "Transport",
        description: "Safe transfer to decontamination area",
        icon: "truck",
      },
      {
        id: 3,
        title: "Decontamination",
        description: "Cleaning & disinfection remove contaminants",
        icon: "droplet",
      },
      {
        id: 4,
        title: "Inspection",
        description: "Check for cleanliness and functionality",
        icon: "search",
      },
      {
        id: 5,
        title: "Assembly",
        description: "Assemble and prepare sets",
        icon: "tools",
      },
      {
        id: 6,
        title: "Sterilization",
        description: "Sterilize using validated methods",
        icon: "steam",
      },
      {
        id: 7,
        title: "Storage",
        description: "Store in a controlled environment",
        icon: "box",
      },
      {
        id: 8,
        title: "Ready for Use",
        description: "Safe & ready for patient care",
        icon: "shield",
      },
    ],
  },

  patientSafety: {
    heading: "PATIENT SAFETY",
    subheading: "IS OUR PRIMARY GOAL",
    body: "Every step. Every time. We are committed to excellence, compliance, and continuous improvement to protect what matters most.",
    ctaText: "Our Commitment",
    features: [
      {
        id: 1,
        title: "SAFE INSTRUMENTS",
        description: "Reduce risk of HAIs and protect patients.",
        icon: "shield-check",
      },
      {
        id: 2,
        title: "COMPLIANT PROCESSES",
        description: "Follow international standards and best practices.",
        icon: "check-circle",
      },
      {
        id: 3,
        title: "TRUSTED OUTCOMES",
        description: "Quality you can see. Safety you can trust.",
        icon: "user-check",
      },
    ],
  },

  stats: [
    { id: 1, value: "100%", label: "Patient Focused", icon: "shield" },
    { id: 2, value: "4", label: "Critical Phases", icon: "list" },
    { id: 3, value: "Standards", label: "Driven", icon: "award" },
    { id: 4, value: "Stronger Together", label: "Better Outcomes", icon: "users" },
  ],
};

module.exports = homeData;