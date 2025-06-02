import React from "react";
import Branding from "./Branding";
import SocialMediaIcons from "./SocialMediaIcons";
import LegalInfo from "./LegalInfo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      {/* Branding and Navigation Links */}
      <div className="border-b border-gray-700">
        <Branding />
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center py-4 bg-gray-900">
        <SocialMediaIcons />
      </div>
      {/* Legal and Policy Information */}
      <div className="bg-gray-800">
        <LegalInfo />
      </div>
    </footer>
  );
};

export default Footer;
