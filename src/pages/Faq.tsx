import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "How do I book a ride?",
      answer:
        "To book a ride, log in as a rider, enter your pickup and destination locations, choose your vehicle type, and confirm the booking.",
    },
    {
      id: 2,
      question: "How can I become a driver?",
      answer:
        "To become a driver, register through the driver registration page, submit required documents, and wait for admin approval.",
    },
    {
      id: 3,
      question: "What payment methods are supported?",
      answer:
        "We support multiple payment options including credit/debit cards, mobile wallets, and cash payments.",
    },
    {
      id: 4,
      question: "Can I cancel a ride?",
      answer:
        "Yes, you can cancel a ride before the driver arrives. Cancellation fees may apply depending on the timing.",
    },
    {
      id: 5,
      question: "How do I rate my driver?",
      answer:
        "After your ride is completed, go to your ride history and submit a rating and feedback for your driver.",
    },
    {
      id: 6,
      question: "Is there a support line for emergencies?",
      answer:
        "Yes, you can use the SOS/Emergency button in the app to contact emergency services or your trusted contacts instantly.",
    },
  ];

  // Filtered FAQs based on search
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for a question..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-500">No results found.</p>
          ) : (
            filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {expandedId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {expandedId === faq.id && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
