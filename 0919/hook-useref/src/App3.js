// import React from "react";

// let guest = 0;

// function Cup() {
//   console.log(`cup ${guest}`);
//   guest = guest + 1;
//   return <h2>{guest}번 손님을 위한 컵입니다.</h2>;
// }
// // 의도와 다른 렌더링이 일어난다. 왜? 컴포넌트를 잘못 사용했다 리액트는 컴포넌트가 순수하기를 바란다. 컵을 렌더링했으면 결과는 다 똑같았어야한다 일부러 렌더링을 두 번씩 해서 개발자가 순수한 컴포넌트를 사용하는지 파악시키기 위해 두 번 출력을 한다.
// export default function App3() {
//   return (
//     <div>
//       <Cup />
//       <Cup />
//       <Cup />
//       <Cup />
//     </div>
//   );
// }

import React from "react";

// let guest = 0;

function Cup({ guest }) {
  console.log(`cup ${guest}`);
  //   guest = guest + 1;
  return <h2>{guest}번 손님을 위한 컵입니다.</h2>;
}
// 올바른 컴포넌트 사용법
export default function App3() {
  return (
    <div>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
    </div>
  );
}
