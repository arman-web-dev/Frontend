import React from 'react';
import Container from './Container';
import { FaRegDotCircle } from 'react-icons/fa';
import PortImg from '../assets/Placeholder.png'

const Portfolio = () => {
  return (
    <div className='py-[120px]'>
      <Container>
      <div className="pb-[50px]">
          <div className="flex gap-3 items-center justify-center pb-[10px]">
            <FaRegDotCircle />
            <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#101010]">
              My Portfolio
            </h3>
          </div>
          <div className="text-center">
            <h2 className="font-sans font-bold text-[44px] leading-[58px] text-[#101010]">
            VISIT MY PORTFOLIO
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-y-[24px]">
          <div className="w-[32%]">
          <img src={PortImg} alt="PortImg" className='w-full'/>
          </div>
          <div className="w-[32%]">
          <img src={PortImg} alt="PortImg" className='w-full'/>
          </div>
          <div className="w-[32%]">
          <img src={PortImg} alt="PortImg" className='w-full'/>
          </div>
          <div className="w-[32%]">
          <img src={PortImg} alt="PortImg" className='w-full'/>
          </div>
          <div className="w-[32%]">
          <img src={PortImg} alt="PortImg" className='w-full'/>
          </div>
          <div className="w-[32%]">
          <img src={PortImg} alt="PortImg" className='w-full'/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
