import styled from "styled-components";

// 변하는 부분과 변하지 않는 부분을 구분하여 추출하기

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const Card = (props) => {
  console.log(props.children);
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      {props.children}
    </CardDiv>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};
const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Card className="setting" value="챌린지 설정">
        <SettingCard />
      </Card>
      <Card className="share" value="서비스 공유하기">
        <shareCard />
      </Card>
    </>
  );
}

export default App;
