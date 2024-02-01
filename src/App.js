// html 코드 = JSX
// html 코드를 감싸고 있는 function = component
function App() {
  const number = Math.ceil(Math.random() * 100);

  return (
    <div>
      <h1>난수 : {number}</h1>      
      <h1>{number > 50 ? "큰 수" : "작은 수"}</h1>
      <h1>{number > 50 ? <BigImage /> : <SmallImage />}</h1>
    </div>
  );
}

function BigImage() {
  return (
    <h1>큰 이미지</h1>
  )
}

function SmallImage() {
  return (
    <h1>작은 이미지</h1>
  )
}

// 브라우저에서 기본적으로 제공해주는 태그(built-id component) <div><h1>은 소문자로 시작
// 개발자가 만드는 태그는 대문자로 시작
// return문을 가져야 , 값은 보통 JSX임
function MyComp() {
  // return에 jsx코드 작성 가능
  // 꼭 하나의 root 태가 존재해야 한다 (상위 태그)
  // return 값이 여러줄이면 ()로 감싸기
  // root tag가 필요없다면 fragment로 감싸 <> </>
  return <h1>Hi component</h1>;
}

function MyComp2() {
  let name = "손흥민";
  let age = 33;

  return (
    <>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h1>{age} years</h1>
      <h1>{name + "선수"}</h1>
      <h1>{age + 5}</h1>
      {/* 주석은 이렇게 쓴다 */}
    </>
  );
}

export default App;
