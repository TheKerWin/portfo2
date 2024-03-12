import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMediaButtons2: React.FC = () => {
    return (
        <div className="flex justify-center mr-1">
            <a href="https://github.com/TheKerWin" className="mr-4 hover:scale-105 hover:text-green-500">
                <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/kerwin-mercado-b00a55142/" className="mr-2 hover:scale-105 hover:text-blue-700">
                <FaLinkedin size={40} className="mx-4" />
            </a>
            <a href="https://www.instagram.com/pseudokoder/"  className="mx-2 hover:scale-105 hover:text-gradient-to-r from-cowboy-orange-dark via-cowboy-orange to-cowboy-skin">
                <FaInstagram size={40} />
            </a>
        </div>
    );
};

export default SocialMediaButtons2;