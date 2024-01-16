'use client'
import React, { useState } from 'react';
import { CiApple } from "react-icons/ci";
import { TbMeat,TbBread, TbMilk } from "react-icons/tb";
import { PiCookingPot } from "react-icons/pi";
import { GiHighGrass } from "react-icons/gi";
import { LuCookie } from "react-icons/lu";


const Category = () => {
  const [isSubcategoryVisible, setIsSubcategoryVisible] = useState(false);

  const handleMouseOver = () => {
    setIsSubcategoryVisible(true);
  };

  const handleMouseOut = () => {
    setIsSubcategoryVisible(false);
  };

  return (
    <div
      className="group relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span className="cursor-pointer">🟰 카테고리</span>
      {isSubcategoryVisible && (
    
        <div className="relative left-14">
            <div className="absolute bg-white border border-gray-200 font-normal text-gray-600 p-4 z-10 text-left">
            {/* 하위 카테고리 내용 */}
            <div className='flex flex-cols'><GiHighGrass />채소</div>
            <div className='pt-3 flex flex-cols'><CiApple /> 과일 • 견과 • 쌀</div>
            <div className='pt-3 flex flex-cols'><TbMeat /> 정육 • 가공육 • 계란</div>
            <div className='pt-3 flex flex-cols'><PiCookingPot /> 국 • 반찬 • 메인요리</div>
            <div className='pt-3 flex flex-cols'><LuCookie /> 간식 • 과자 • 떡</div>
            <div className='pt-3 flex flex-cols'><TbBread /> 베이커리</div>
            <div className='pt-3 flex flex-cols'><TbMilk /> 유제품</div>
            {/* 추가적인 하위 카테고리 항목들 */}
            </div>
        </div>  
      )}
    </div>
  );
};

export default Category;
