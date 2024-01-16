
import List from "../list/page";


export default function Best(){
    
    return (
        <div>
            <div className="p-6 pt-12 border-t">
                <div className="text-4xl font-semibold text-center p-12">베스트</div>
                <div className="border border-gray-300 p-10 flex flex-cols-4">
                    <span className="p-4 ml-28 text-blue-800 font-bold">TOP300</span>
                    <span className="p-4 ml-28">새해식단</span>
                    <span className="p-4 ml-28">인기급상승</span>
                    <span className="p-4 ml-28">제철신선</span>
                    <span className="p-4 ml-28">직원추천상품</span>
                </div>
                <div className="font-semibold pt-10">총 300건</div>
                <div className="flex justify-end text-center">
                    <span>추선순 👍</span>
                    <span className="ml-2 text-gray-500">신상품순 |</span>
                    <span className="ml-2 text-gray-500">판매량순 |</span>
                    <span className="ml-2 text-gray-500">혜택순 |</span>
                    <span className="ml-2 text-gray-500">낮은 가격순 |</span>
                    <span className="ml-2 text-gray-500">높은 가격순</span>
                </div>
                <span className="relative top-32 left-4 bg-blue-400 text-white rounded-lg p-2">마감세일</span>
                <span className="relative top-32 left-72 bg-blue-400 text-white rounded-lg p-2">+5천원쿠폰</span>
                <List /> 
                <span className="relative top-32 left-4 bg-blue-400 text-white rounded-lg p-2">+5천원쿠폰</span>
                <List /> 
                <List /> 
            </div>
        </div>
        
    )
}