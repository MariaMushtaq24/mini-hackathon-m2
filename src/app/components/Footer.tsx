import React from "react";
import Image from "next/image";
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube} from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-200 sm:px-12 md:px-28">
      <div className="mx-auto py-8">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col w-full  md:w-[320px] items-start">
          <div className="flex items-center space-x-2 size-16">
          <img src="https://toppng.com/uploads/preview/lets-adding-it-some-value-car-with-no-brand-11562979937rcamhaeaff.png" alt="Cars"  />
            <span className="w-full text-xl font-bold text-gray-400">The Car Shop</span>
          </div>
            <p className="mt-4 text-gray-300">
            Your trusted destination for high-quality cars, expert repairs, and reliable services.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaPinterestP />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Category Section */}
          <div className="w-full md:w-1/4 lg:w-[105px]">
            <h4 className="text-lg font-semibold text-gray-400">Category</h4>
            <ul className="mt-4 mb-4 text-gray-300 space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Buy a Car
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Rental Car
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Car Insurance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Car Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Car Loans
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/4 lg:w-[156px]">
            <h4 className="text-lg font-semibold text-gray-400">Support</h4>
            <ul className="mt-4 mb-4 text-gray-300 space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:underline hover:underline-offset-4"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 lg:w-[420px]">
            <h4 className="text-lg font-semibold text-gray-400">NEWSLETTER</h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-gray-400 text-black px-6 py-2 rounded-md hover:bg-blue-500">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-300">
            Follow us on social media for the latest updates, 
            exclusive deals, and automotive tips on Facebook, 
            Instagram, Twitter, YouTube, and LinkedIn. 
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 mb-2 flex justify-between items-center flex-wrap text-white border-t pt-4">
          <p>
            © 2024 TheCarShop. All Rights Reserved.
          </p>
          <div className="mt-2 mb-2 flex justify-center space-x-4">
            <FaCcMastercard size={40} />
            <FaPaypal size={40} />
            <FaCcAmex size={40} />
            <FaCcVisa size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}