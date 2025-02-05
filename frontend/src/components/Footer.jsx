import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <h5 className="font-bold mb-2">Seblak SyaSya</h5>
            <ul>
              <li>
                <a href="#">About Seblak</a>
              </li>
              <li>
                <a href="#">Buy Seblak</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Shop</h5>
            <ul>
              <li>
                <a href="#">Top Up</a>
              </li>
              <li>
                <a href="#">COD</a>
              </li>
              <li>
                <a href="#">Free Shipping</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Help & Guides</h5>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
