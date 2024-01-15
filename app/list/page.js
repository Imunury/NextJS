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
      {stock.map((i) => {
        return (
          <div>
            <p>{stock[i]}</p>
          </div>
        );
      })}
    </div>
  );
}
