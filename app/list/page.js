import Link from 'next/link';

export default function List(){

    let users = [
        { name : '[프레시지] 블랙라벨 스테이크', money: '15,500원', sale : '35%', Salemoney: '9,900원'},
        { name : '[오마뎅] 매콤한 우리쌀 가래떡 국물 떡볶이',  money: '6,400원', sale : '10%' , Salemoney: '5,760원'},
        { name : '[서촌 영화루] 짜장면 2인분', money: '9,900원', sale: '10%' , Salemoney: '8,910원'},
        { name : '12월 제철과일 골라담기 (택1)', money: '13,900원', sale: '14%' , Salemoney: '11,900원'}
    ];

    return (
        <div className="grid grid-cols-4 gap-4 place-items-center pt-20">
          {users.map((user, i) => (
            <div key={i} className="p-2">
              <Link href={`/detail/${i}`} passHref>
                <button>
                  <img src={`/img${i}.png`} />
                </button>
              </Link>

              <Link href={`/detail/${i}`} passHref>
                <button className="font-bold pt-2">{user.name}</button>
              </Link>
              <div className="line-through">{user.money}</div>
              <div>
                <span className="font-bold text-red-600">{user.sale}</span>
                <span className="font-bold text-l p-2">{user.Salemoney}</span>
              </div>
              
            </div>
          ))}
        </div>
      );
}
