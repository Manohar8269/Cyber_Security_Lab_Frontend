export const labs = [
  {
    id: "patient-records",
    category: "HEALTHCARE & VECTOR RAG",
    categoryColor: "red",
    icon: "🏥",
    title: "Patient Records Assistant",
    vulnerability: "OWASP LLM02: Sensitive Info Disclosure",
    description:
      "A patient-facing healthcare chatbot utilizing ChromaDB vector search. Exploit missing document-level tenant filtering to expose sensitive patient information.",
    buttonText: "Launch Patient Lab",
    path: "/labs/patient-records",
  },

  {
    id: "financial-adviser",
    category: "FINANCE & MULTI-TENANT AGENT",
    categoryColor: "purple",
    icon: "💼",
    title: "Financial Adviser Copilot",
    vulnerability: "Privilege Escalation & Token Extraction",
    description:
      "A wealth management copilot with role-based personas, handover delegation, and manager VIP clients. Explore authorization and delegation flaws.",
    buttonText: "Launch Adviser Lab",
    path: "/labs/financial-adviser",
  },

  {
    id: "shopbot",
    category: "RETAIL & TEXT-TO-SQL",
    categoryColor: "yellow",
    icon: "🛍️",
    title: "ShopBot Storefront",
    vulnerability: "Insecure Output & SQL Write Injection",
    description:
      "An e-commerce assistant translating natural language into direct SQL queries. Explore prompt injection and unsafe SQL generation.",
    buttonText: "Launch ShopBot Lab",
    path: "/labs/shopbot",
  },
];