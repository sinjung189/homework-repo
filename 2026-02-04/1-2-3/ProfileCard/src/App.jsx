import ProfileCard from "./components/ProfileCard"
import "./components/ProfileCard.css"
import "./components/Post"
import "./App.css"
import Post from "./components/Post"


function App() {

  return (
    <>
      <div className="post-start">
        <span className="content">Card</span>
        <ProfileCard name = "김신중" age={26} job= "충격요법 코딩러"/>
      </div>

      <div className="post-end">
        <span className="content">Post</span>
        <Post name = "김신중" author= "잠은 죽어서 곱게 자라"/>
      </div>
    </>
  )
}

export default App
