import Navbar from "../Navbar/page";
import List from "../list/page";

export default function Shopping(){
    return (
        <div>
            <div className="p-12 pt-0 border-t">
                <div>
                    <img src="/page1.png" />
                    <div className="text-3xl text-center p-4 pt-20">
                        알뜰쇼핑
                    </div>
                    <div className="relative top-4">총 2,973건</div>
                    <div className="flex justify-end text-center">
                        <span>추선순 👍</span>
                        <span className="ml-2 text-gray-500">신상품순 |</span>
                        <span className="ml-2 text-gray-500">판매량순 |</span>
                        <span className="ml-2 text-gray-500">혜택순 |</span>
                        <span className="ml-2 text-gray-500">낮은 가격순 |</span>
                        <span className="ml-2 text-gray-500">높은 가격순</span>
                    </div>
                    <List />
                    <List />
                    <List />
                
                </div>
                
            </div>
        </div>
    )
}