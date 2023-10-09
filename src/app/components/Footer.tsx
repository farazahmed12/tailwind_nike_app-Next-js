import React from "react";
import { footerLogo } from "../../../public/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img className="" width={150} height={46} src={footerLogo} />
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get laced up for training, sport and lifestyle with the latest
            designs of men's shoes and sneakers from Nike.com
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia?.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img src={item.src} alt={item.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-between mt-8 lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item, i) => {
            return (
              <div key={i}>
                <h4 className="text-white mb-8">{item.title}</h4>
                <ul className="text-white font-montserrat text-2xl font-medium mb-6">
                  {item.links.map((item2, i) => {
                    return (
                      <li className="cursor-pointer mt-3 text-base font-montserrat text-slate-gray ">
                        <a>{item2.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
