import Link from "next/link";
import Category from "./category";
import { CiHeart, CiShoppingCart  } from "react-icons/ci";
import Close from "./close";
import Button from "./button";

export default function Navbar(){
    return(
        <div>
            <Close />
            <div className="flex justify-end text-sm p-2 pt-3">
                <Link href={'/join'} className="text-blue-500">회원가입  </Link>
                <Link href={'/login'} className="ml-2 text-gray-500">|  로그인  |</Link>
                <span className="ml-2 text-gray-500"> 고객센터 </span>
            </div>
            <div className="p-10 flex flex-col-4">
                <Link href={'/'} className="text-4xl text-blue-600 font-bold ml-14">Market</Link>
                <span className="p-4 text-xl text-blue-500 font-semibold">마켓</span>
                <input type="text" placeholder="검색어를 입력하세요" 
                    className="border-2 border-blue-500 rounded-xl p-4 ml-10 w-2/4" 
                />
                <span className="flex ml-48 pt-4 gap-6 text-4xl justify-end">
                    <Link href={'/heart'} className="text-gray-500 hover:text-red-500 transition duration-300">
                        <CiHeart />
                    </Link>
                    <Link href={'/cart'} className="text-gray-500 hover:text-red-500 transition duration-300">
                        <CiShoppingCart />
                    </Link>
                    
                </span> 
                
            </div>

            <div className="grid grid-cols-4 text-center p-2 text-gray-500 font-semibold">
                <Category />
                <Link href={'/best'}>베스트</Link>
                <Link href={'/shopping'}>알뜰쇼핑</Link>
                <Link href={'/sale'}>특가/혜택</Link>
            </div>
            <div className="border mt-4 border-gray-300"></div>
            
            
        </div>
    )
}