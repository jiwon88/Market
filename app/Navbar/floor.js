import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaBlogger } from "react-icons/fa";

export default function Floor(){
    return(
        <div>
            <div className="pt-10 border border-gray-100 flex my-20">
                <div>
                    <div className="pt-10 text-2xl ml-20">
                        고객센터
                    </div>
                    <div className="ml-20 text-3xl font-bold mt-4">1234-5678<span className="text-base font-medium ml-4 text-gray-700"> 월~토요일 오전 7시 - 오후 6시</span></div>
                    <div className="flex">
                        <div className="border ml-20 p-2 w-32 text-xl mr-4 mt-4 text-gray-600 text-center">카카오톡 문의</div>
                        <div className="flex flex-col mt-4 text-gray-500 text-sm">
                            <span>월~토요일 | 오전7시 - 오후6시</span>
                            <span>일/공휴일 | 오전7시 - 오후1시</span>
                        </div>
                        
                    </div>
                    <div className="flex">
                        <div className="border ml-20 p-2 w-32 text-xl mr-4 mt-4 text-gray-600 text-center">1:1 문의</div>
                        <div className="flex flex-col mt-4 text-gray-500 text-sm">
                            <span>365일</span>
                            <span>고객센터 운영시간에 순차적으로 답변드리겠습니다.</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="border ml-20 p-2 w-32 text-xl mr-4 mt-4 text-gray-600 text-center">대량주문 문의</div>
                        <div className="flex flex-col mt-4 text-gray-500 text-sm">
                            <span>월~금요일 | 오전9시 - 오후6시</span>
                            <span>점심시간 | 낮12시 - 오후1시</span>
                        </div>
                    </div>
                    <div className="text-sm ml-20 mt-4 text-gray-400">비회원 문의 : jiwon@market.com</div>
                </div>
                <div>
                    <div className="pt-10 text-sm ml-40 gap-6 flex tet-gray-700">
                        <span>마켓소개</span>
                        <span>마켓소개영상</span>
                        <span>투자정보</span>
                        <span>인재채용</span>
                        <span>이용약관</span>
                        <span>이용안내</span>
                        <span className="text-semibold text-base">개인정보처리방침</span>
                    </div>
                    <div className="ml-40 mt-4 text-sm text-gray-500">
                        법인명(상호): 주식회사 지원 | 사업자등록번호 : 123-45-67890 <span className="text-blue-500">사업자정보확인</span><br />
                        통신판매업 : 제 2018-서울-12345호<br />주소 : 서울00시 00구 ----로, 1층(00동) | 대표이사 : 박지원 <br />
                        채용문의<span className="text-blue-500">jiwon@market.com</span><br />
                        팩스 : 123 - 456 -7890
                    </div>
                    <div className="ml-40 flex gap-4 text-3xl pt-10">
                        
                        <FaInstagram className="bg-rose-500 rounded-full text-white p-1" />
                    
                        
                        <FaFacebook className="text-blue-500" />
                        <FaYoutube className="text-white bg-red-500 p-1 rounded-full" />
                        <FaGithub />
                        <FaBlogger className="text-green-500" />
                    </div>
                </div>
                
            </div>
            <div className="bg-gray-100 text-center text-xs text-gray-400 pt-4 py-4">
                마켓에서 판매되는 상품 중에는 마켓에 입점한 개별 판매자가 판매하는 마켓플레이스 상품이 포함되어 있습니다. <br />
                마켓플레이스 상품의 경우 마켓은 통신판매중개자로서 통신판매의 당사자가 아닙니다. 마켓은 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.<br />
                @MARKET.ALL RIGHTS RESERVED
            </div>
        </div>
    )
}