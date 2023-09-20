import { createContext } from "react";

// 파일이 분리되어 있을 경우 별도로 context.jsx 파일을 만들어 필요로 하는 곳에서 import 하게 만든다

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

export default UserInfo;
