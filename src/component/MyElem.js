// 다른 파일에서 사용 가능하도록 export

 const country = "Korea";
 const text = "hello";
 const value = 77;

export function MyElem() {
    return (
      <div>
        <p>매우매우 긴 코드를 가진 컴포넌트</p>
      </div>
    )
  }

export function MyNavbar() {
  return null;
}

export function MyContent() {
  return null;
}

// export를 모아서 따로 해도 된다
export {country, text, value};