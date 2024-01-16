import Image from "next/image";
import qwe from '/public/food0.png'

export default function List() {
  let stock = ["tomato", "past", "coconut", "asdf"];
  let array = [2, 3, 4];

  array.map((a, i) => {
    // a map한 array
    // i 증가하는 정수
    console.log(a + i);
  });

  let x = array.map((a) => {
    return 10;
  });

  console.log(x);

  return (
    <div>
      <h4>list</h4>
      {stock.map((a, i) => {
        return (
          <div key={i}>
            <img src={`/food${i}.png`} className="/food_img"></img>
            {/* next.config.js 셋팅 */}
            {/* <Image src="https://ssl.pstatic.net/melona/libs/1476/1476963/6e4ca550595061ec9ca2_20240115181032189.jpg" className="food_img" width={500} height={500}></Image> */}
            <p>{a}</p>
          </div>
        );
      })}
    </div>
  );
}
