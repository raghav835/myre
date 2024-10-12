import React from 'react';
import { socials } from "../constants/index.jsx";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-red-600 w-full rounded-t-md mt-auto" // Add mt-auto to ensure it sticks to bottom if necessary
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          {/* Copyright Section */}
          <p className="text-white opacity-70">© 2024 ROYAL ENFIELD</p>
          
          {/* Legal Links Section */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="#"
              className="text-white hover:text-red-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-white hover:text-red-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Use
            </motion.a>
          </div>
          
          {/* Social Icons Section */}
          <ul className="flex items-center space-x-3">
            {socials.map(({ id, url, icon, title }) => (
              <motion.li key={id} whileHover={{ scale: 1.1 }}>
                <a href={url} className="block p-1 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300">
                  <img
                    src={icon}
                    alt={title}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
