import {age, name} from './data.js'
import HiHi from './hi.js';

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <HiHi></HiHi>
    </div>
  );
}

// server component
function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명 {age} {name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

// 'use client'
// client component - html에 자바스크립트 가능
// server component - 로딩속도 빠름, 검색엔진 노출 유리