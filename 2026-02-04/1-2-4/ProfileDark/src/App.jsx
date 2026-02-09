import Theme from "./components/Theme"
import "./App.css"

export default function App() {
  return (
    <>
    <div className="profile-Theme">
      <Theme/>
      <div className="profile-content">
        <span className="massage">이름 : </span>
        <input type="text" placeholder="이름 입력하시오" />

        <span className="massage">상태 메세지 : </span>
        <input type="text" placeholder="상태 메시지 입력하시오" />
      </div>
      <hr/>
      <button className="edit">편집</button>
    </div>
    </>
  )
}
