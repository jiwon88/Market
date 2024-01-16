
import Navbar from "./Navbar/page";
import List from "./list/page";
import Page2 from "./page2";
import SwiperComponent from "./Navbar/swiperComponent";


export default function Home() {
  return (
    <div>
      <SwiperComponent />
      <div className="text-4xl text-center text-gray-700 font-semibold p-20">지금 가장 많이 담은 특가 👍</div>
      <div className="text-2xl text-center text-gray-600">마켓 추천 특가템 최대 50%</div>
        <List className="pt-4" />
      <div className="text-4xl text-center text-gray-700 font-semibold p-20">⭐️2023 뷰컬페 연말결산🎉</div>
      <div className="text-2xl text-center text-gray-600 p-10">최대 82%! 올해 마지막 뷰티 최대 혜택</div>
      <div className="pl-40 p-10 bg-red-500">
        <div className="text-4xl font-bold text-white">연말 아이템 최대 혜택</div>
        <button className="pt-2 text-white text-2xl">홀리데이 마켓 보러가기</button>
      </div>
      <Page2 />
      {/* <Home /> */}
    </div>

  )
}
