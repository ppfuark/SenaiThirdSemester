// src/components/FooterIcons.jsx
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify, FaTiktok, FaSnapchatGhost, FaDiscord, FaPinterest } from "react-icons/fa";

export default function FooterIcons() {
  return (
    <div className="absolute bottom-6 right-6 flex space-x-4 text-white text-xl z-20">
      <FaInstagram />
      <FaFacebook />
      <FaYoutube />
      <FaSpotify />
      <FaTiktok />
      <FaSnapchatGhost />
      <FaDiscord />
      <FaPinterest />
    </div>
  );
}
