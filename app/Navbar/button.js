'use client'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Button() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      // 스크롤 위치가 일정 이상 내려가면 버튼을 보이게 함
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되면 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 페이지 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 적용
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed right-10 bottom-6 text-5xl text-blue-300 shadow-lg rounded-full transition-colors duration-300 hover:text-blue-500 hover:bg-blue-100"
          onClick={scrollToTop}
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </>
  );
}
