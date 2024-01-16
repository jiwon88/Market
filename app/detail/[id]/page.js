import Image from "next/image"
import 이미지 from '../../../public/img0.png'
import { FaBell } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function Detail(){
    return(
        <div>
            <div  className="p-28 pt-12 border-t">
            
                <Image src={이미지} className="w-1/3 h-auto absolute p-2" />
                <div className="flex flex-col ml-80 p-48 pt-10">
                    <span className="text-gray-400 font-semibold">샛별배송</span>
                    <span className="text-2xl pt-2">[서촌 영화루]짜장면 2인분</span>
                    <span className="text-gray-400 pt-2">집에서도 간편히 중식</span>
                    <span className="text-3xl font-bold pt-4"><span className="text-orange-500 -ml-1">10%</span>  8,910원</span>
                    <span className="line-through text-gray-400 text-xl pt-2">9,900</span>
                    <span className="text-2xl pt-4">원산지: 상품설명/상세정보 참조</span>
                    <span className="text-blue-800 font-semibold pt-2">로그인 후, 적립 혜택이 제공됩니다.</span>
                    <div className="pt-2 bg-blue-200 p-2">
                        <span className="text-blue-800">2,000원</span> 
                        적립금 + 할인 쿠폰 받고 구매하기
                    </div>
                    <div>
                        <div className="flex flex-col text-gray-500 font-semibold pt-6">
                            <span className="pt-6 p-4 border-b border-t">배송</span>
                            <span className="pt-6 p-4 border-b">판매자</span>
                            <span className="pt-6 p-4 border-b">포장타임</span>
                            <span className="pt-6 p-4 border-b">판매단위</span>
                            <span className="pt-6 p-4 border-b">중량/용량</span>
                            <span className="pt-6 p-4 border-b">알레르기정보</span>
                            <span className="pt-6 p-4 border-b">유통기한</span>
                            <span className="pt-6 p-4 border-b">상품선택</span>
                        </div>
                        
                    </div>
                    <div className="pt-20 flex justify-end">
                        <span className="p-3">총 상품금액: </span>
                        <span className="ml-2 text-3xl font-bold">8,910원</span>
                    </div>
                    <div className="pt-2 flex justify-end">
                        <span className="bg-yellow-400 rounded-full p-2 text-white font-bold">적립</span>
                        <span className="p-2 text-gray-600">로그인 후, 적립 헤택 제공</span>
                    </div>
                    <div className="flex pt-6 text-2xl p-2">
                        <div className="text-blue-700 p-6 border border-gray-200 rounded-lg"><CiHeart /></div>
                        <div className="ml-4 text-gray-400 p-6 border border-gray-200 rounded-lg"><FaBell /></div>
                        <div className="ml-4 bg-blue-700 text-white rounded-lg w-4/5 text-center p-6">장바구니 담기</div>
                    </div>
                    </div>
                
            </div>
        </div>
    )
}