import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
          alt="Facebook"
          className="w-9 h-9"
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
          alt="Instagram"
          className="w-9 h-9"
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/?size=100&id=bG29Ckcdp6YP&format=png&color=000000"
          alt="Twitter"
          className="w-9 h-9"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
