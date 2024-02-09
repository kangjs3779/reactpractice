// export된 컴포넌트(변수, 함수, 객체)를 import해서 사용
// import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";

// 여러개의 컴포넌트를 가져올 때에는 아래와 같이 사용하면 된다
import {country, text, value, MyElem, MyNavbar, MyContent} from "./component/MyElem";

function App() {

  return (
    <>
      <MyElem />
      <MyComp />
    </>
  );
}

// 리액트 라이브러리는 https://mui.com/

export default App;
