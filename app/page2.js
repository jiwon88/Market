import Link from 'next/link';
import Home from './page';

export default function Page2(){
    

    
    let 상품 = ['매일 오전 11시 OPEN!', '🎉 뷰컬페 일일특가', '✨ 최저가 도전!']
    

    return(
        <div>
            {
                상품.map((a, i) => {
                    return (
                        <div className="flex flex-col p-10" key={i}>
                            <span className="text-3xl text-gray-800 font-semibold">{a}</span>
                            <span className="text-xl text-gray-500">24시간 한정 일일특가</span>
                            <span className="text-gray-400 pt-10">망설이면 늦어요!</span>
                            <Link href={`/detail/${i}`} passHref>
                            <img src={`/png${i}.png`} className="ml-80" />
                            </Link>
                        </div>
                    )
                })
            }
            
        </div>
    )
    
}