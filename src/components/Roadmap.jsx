import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { useState } from "react"; // Add this import

// Create FAQ data
const faqData = [
  {
    id: "0",
    question: "What is ForReal and how does it work?",
    answer: "ForReal is an AI-powered WhatsApp bot that helps detect fake news, scams, and deepfake content. Simply forward any suspicious message, image, or video to our WhatsApp number, and our AI will analyze it instantly to verify its authenticity.",
  },
  {
    id: "1",
    question: "Is ForReal free to use?",
    answer: "Yes, ForReal is completely free to use. Just save our WhatsApp number and start forwarding suspicious content for verification.",
  },
  {
    id: "2",
    question: "What types of content can ForReal analyze?",
    answer: "ForReal can analyze text messages, images, videos, voice messages, links, and documents. This includes news articles, job offers, government schemes, and potential scam messages.",
  },
  {
    id: "3",
    question: "How accurate is ForReal's detection?",
    answer: "ForReal uses advanced AI and machine learning models, combined with verified databases to provide highly accurate results. We continuously update our systems to improve accuracy.",
  },
  {
    id: "4",
    question: "Is my data secure with ForReal?",
    answer: "Yes, we take privacy very seriously. All content shared with ForReal is analyzed securely and is not stored or shared with third parties.",
  },
];

const Roadmap = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="overflow-hidden" id="faq">
      <div className="container md:pb-10">
        <Heading 
          tag="Got questions?" 
          title="Frequently Asked Questions" 
          text="Everything you need to know about ForReal's scam detection service"
        />

        <div className="relative grid gap-6 max-w-[800px] mx-auto">
          {faqData.map((item, index) => (
            <div
              className="p-4 bg-n-8 rounded-[20px] border border-n-6 transition-all duration-300"
              key={item.id}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-semibold text-n-1">{item.question}</h4>
                <span className={`text-2xl transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              <div className={`grid overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'
              }`}>
                <p className="overflow-hidden text-n-3">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="https://wa.me/918700739666">Try it Now</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
