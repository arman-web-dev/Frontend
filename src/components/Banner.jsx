import React from "react";
import Container from "./Container";
import Hero from "../assets/hero1.png";
import { FaRegDotCircle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Banner = () => {
  let [subTitle, setSubtitle] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [buttonText, setButtonText] = useState("");

  let getData = () => {
    axios.get("http://localhost:8000/bannerItem").then((response) => {
      setSubtitle(response.data.subTitle);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setButtonText(response.data.buttonText);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="bg-[#fff6ea]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-3/5">
            <div className="flex gap-3 items-center">
              <FaRegDotCircle />
              <h3>{subTitle}</h3>
            </div>
            <div className="pb-[46px] pt-3">
              <h1 className="font-sans font-bold text-[70px] leading-[90px] text-[#101010]">
                {title}
              </h1>
            </div>
            <p className="font-sans font-normal text-[18px] leading-[30.6px] text-[#606060] pb-[65px]">
              {description}
            </p>
            <button className="font-sans font-medium text-[21px] leading-[20px] text-[#fff] bg-[#FF6B00] py-[15px] px-[32px] rounded-[6px]">
              {buttonText}
            </button>
          </div>
          <div className="w-2/5">
            <img src={Hero} alt="banner Img" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
