
function App() {

  return (
    <>
      <MyComp value="흥민" address="신촌" />
      <MyComp value="강인" address="강남" />
    </>
  );
}

function MyComp({value, address}) {
  
  return (
    <div>
      <h1>{value}는 {address}에 산다.</h1>
    </div>
  )
}



// 리액트 라이브러리는 https://mui.com/

export default App;
