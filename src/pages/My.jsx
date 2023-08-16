// import React from 'react'
import { genSection } from "../constants/styles";

const My = () => {
  return (
    <section id="my" className={`${genSection}`}>
      <div className={`flex sm:flex-row flex-col justify-start items-baseline`}>
      <div className="text-[75px] md:sm:text-[150px]">Rimi</div>
      <div className="font-['Cousine'] text-[30px] md:sm:font-[60px]">Full Stack Developer & Designer</div>
      </div>
    </section>
  );
};

export default My;
