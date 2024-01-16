'use client'
import { FaRegCircle } from "react-icons/fa";
import { useState } from 'react';

// 클릭 가능한 원 모양의 컴포넌트
const ClickableCircle = ({ selected, onClick }) => {
    const circleStyle = selected ? "bg-blue-500" : "hover:bg-blue-300";
  
    return (
      <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center ${circleStyle} ml-40`} onClick={onClick}>
      </div>
    );
  };

export default function Join(){
    const [gender, setGender] = useState(null);

    return(
        <div>
            <div>
                <div className="pt-20 text-3xl text-center">회원가입</div>
                <div className=" pt-10 flex justify-end text-center p-4"><span className="text-orange-600">*</span> 필수입력사항</div>
                <div className="border-b-2 w-3/4 border-black mx-auto"></div>
                <div className="ml-72">
                    <div className="pt-10 grid grid-cols-3 gap-4">
                        <span>아이디<a className="text-orange-600">*</a></span>
                        <input placeholder="아이디를 입력해주세요"  />
                        <span className="border border-blue-500 w-28 text-center p-2 rounded-sm">중복확인</span>
                    </div>
                    <div className="pt-12 grid grid-cols-3 gap-4">
                        <span>비밀번호<a className="text-orange-600">*</a></span>
                        <input placeholder="비밀번호를 입력해주세요" />
                    </div>
                    <div className="pt-12 grid grid-cols-3 gap-4">
                        <span>비밀번호확인<a className="text-orange-600">*</a></span>
                        <input placeholder="비밀번호를 한번 더 입력해주세요"  />
                    </div>
                    <div className="pt-12 grid grid-cols-3 gap-4">
                        <span>이름<a className="text-orange-600">*</a></span>
                        <input placeholder="이름을 입력해주세요"  />
                    </div>
                    <div className="pt-10 grid grid-cols-3 gap-4">
                        <span>이메일<a className="text-orange-600">*</a></span>
                        <input placeholder="예 jiwon@market.com" />
                        <span className="border border-blue-500 w-28 text-center rounded-sm p-2">중복확인</span>
                    </div>
                    <div className="pt-10 grid grid-cols-3 gap-4">
                        <span>휴대폰<a className="text-orange-600">*</a></span>
                        <input placeholder="숫자만 입력해주세요."  />
                        <span className="border border-gray-300 w-28 text-center rounded-sm text-gray-300 p-2">인증번호 받기</span>
                    </div>
                    <div className="pt-10 grid grid-cols-3 gap-4">
                        <span>주소<a className="text-orange-600">*</a></span>
                        <span className="border border-blue-500 text-center rounded-sm text-blue-500 w-80 p-3">🔍 주소 검색</span>
                    </div>
                    <div className="text-center text-gray-600 font-light text-sm">배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
                    <div className="flex flex-cols pt-10">
                        <span>성별</span>
                        <ClickableCircle selected={gender === 'male'} onClick={() => setGender('male')} />
                        <span className="ml-2">남자</span>
                        <ClickableCircle selected={gender === 'female'} onClick={() => setGender('female')} />
                        <span className="ml-2">여자</span>
                        <ClickableCircle selected={gender === 'none'} onClick={() => setGender('none')} />
                        <span className="ml-2">선택안함</span>
                    </div>
                    <div className="pt-10">
                        <span>생년월일</span>
                        <input placeholder="  YYYY  /  MM   / DD  " className="border border-gray-400 rounded-md p-4 w-80 ml-72 text-center" />
                    </div>
                    <div className="pt-10 flex">
                        <span>추가입력 사항</span>
                            <ClickableCircle selected={gender === 'none'} onClick={() => setGender('none')} />
                        <span className="ml-2">친구초대 추천인 아이디</span>
                        <ClickableCircle selected={gender === 'none'} onClick={() => setGender('none')} />
                        <span className="ml-2">참여 이벤트명</span>
                    </div>
                </div>
                <div className="pt-32"></div>
                
            </div>
        </div>
    )
}