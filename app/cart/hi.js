export default function HiHi() {
  return (
    <div>
      <Hi></Hi>
    </div>
  );
}

// server component
function Hi() {
  return (
    <div>
      <h1>안녕하세요</h1>
    </div>
  );
}

// 'use client'
// client component - html에 자바스크립트 가능
// server component - 로딩속도 빠름, 검색엔진 노출 유리