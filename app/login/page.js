import Navbar from "../Navbar/page";

export default function Login(){
    return(
        <div className="text-center">
            <div className="pt-20 text-2xl font-semibold text-gray-700 py-8">로그인</div>
            <div>
                <input placeholder="아이디를 입력해주세요" className="border p-4 w-80" />
                
            </div>
            <div>
                <input placeholder="비밀번호를 입력해주세요" className="border p-4 mt-4 my-8 w-80" />
            </div>
            <span className="text-sm text-gray-600 ml-48">
                <span>아이디 찾기 | 비번 찾기</span>
            </span>
            <div className="flex flex-col justify-center items-center pt-6">
                <div className="bg-blue-600 text-white p-3 text-lg font-bold w-80">로그인</div>
                <div className="border border-blue-500 rounded-sm text-blue-600 p-3 mt-4 text-lg font-bold w-80">회원가입</div>
            </div>
        </div>
    )
}