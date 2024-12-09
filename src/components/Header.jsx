import React from "react";
import Container from "./Container";
import Logo from "../assets/Logo.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Header = () => {
  let [navItem, setNavItem] = useState([]);
  let [buttonText, setButtonText] = useState("");
  let [buttonShow, setButtonShow] = useState(false);

  let getData = () => {
    axios.get("http://localhost:8000/navItems").then((response) => {
      setNavItem(response.data.menuItems.split(","));
      setButtonText(response.data.buttonText);
      setButtonShow(response.data.buttonShow);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-[27px]">
          <div className="w-[20%]">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-[40%]">
            <div className="">
              <ul className="flex_pro">
                {navItem.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[20%]">
            {buttonShow && (
              <button className="py-[15px] px-[32px] bg-[#FF6B00] rounded-[6px] text-[#fff]">
                {buttonText}
              </button>
            )}
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
