import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=01707070330"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
