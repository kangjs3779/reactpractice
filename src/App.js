
function App() {

  return (
    <>
      <MyComp title="내 컴포넌트" name="흥민" />
      <MyComp title="I am 컴포넌트에요" name="강인" />
    </>
  );
}

//함수 인잘
// 사용한 곳에서 넘긴 property들이 객체 형태로 담김
// 예) title="내 콤포넌트" => {title: "내콤포넌트"}
function MyComp(property) {
  console.log(property);
  return (
    <div>
      <h1 title={property.title}>hello {property.name}</h1>
    </div>
  )
}



// 리액트 라이브러리는 https://mui.com/

export default App;
