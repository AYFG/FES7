// import { Fragment } from "react";

// function Resume(props) {
//   return (
//     <div style={{ border: "1px solid black", width: "500px" }}>
//       <h1>{props.name} 자기소개서</h1>
//       <h2>{props.hello}</h2>
//       <h3>취미 : {props.hobby}</h3>
//       <h4>좋아하는 음식 : {props.food}</h4>
//       <h5>좋아하는 색 : {props.color}</h5>
//       <button onClick={clickLike}>
//         like <span>{like}</span>
//       </button>
//     </div>
//   );
// }
// export default Resume;

// export default React;
// export useState
// import React, { useState } from "react";

// function Resume(props) {
//   // let like = 0;

//   // console.log(useState(0));
//   // let [like, setLike] = useState(0);
//   let [like, setLike] = useState("");

//   function clickLike() {
//     // like += 1;
//     // setLike(like + 1);
//     // console.log(like);

//     if (like === "") {
//       setLike("Like");
//     } else {
//       setLike("");
//     }
//   }

//   const myColor = props.color;
//   const styleColor = { color: myColor };

//   return (
//     <div style={{ border: "solid 1px", width: "500px" }}>
//       <h1>{props.name} 자기소개서</h1>
//       <h1>{props.hello}</h1>
//       <h2>취미 : {props.hobby}</h2>
//       <h2>좋아하는 음식 : {props.food}</h2>
//       <h2>
//         좋아하는 색 : <span style={styleColor}>{myColor}</span>
//       </h2>
//       <button onClick={clickLike}>like</button>
//       <span>{like}</span>
//     </div>
//   );
// }

export default Resume;
