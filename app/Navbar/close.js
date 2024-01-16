'use client'
import React, { useState } from 'react';

export default function Close() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDivClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
        <div className="bg-blue-600 text-center text-white p-2" onClick={handleDivClick}>
          지금 가입하고, <span className="font-bold">1만원 할인 쿠폰</span> 받아가세요!
        </div>
      )}
    </div>
  );
}
