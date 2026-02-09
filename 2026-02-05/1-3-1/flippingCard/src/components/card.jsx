import { useState } from "react"
import assets from "../assets/도타지1.png"

export default function Card() {
  const [flipped, setFlipped] = useState(false)
  const [like, setLike] = useState(0)


  const handleFlip = () => {
    setFlipped(!flipped)
  }


  const handleLike = (e) => {
    e.stopPropagation()
    setLike(like + 1)
  }

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
    <div className="card-inner">
        {/* 앞면 */}
        <div className="card-front">
            <img src={assets} 
            alt="카드 이미지"
            width={180}
            className="profile-img" />
            <div className="text-all">
              <div className="text-box"><span className="text-content max">방구력 MAX</span></div>
              <div className="text-box"><span className="text-content">매력 ★★★☆☆</span></div>
              <div className="text-box"><span className="text-content">관종력 ★★★★☆</span></div>
            </div>
        </div>

        {/* 뒷면 */}
        <div className="card-back">
            {/* 좋아요(하트부부ㄴ) */}
            <button className="heart" onClick={handleLike}>
                💜 {like}
            </button>
        </div>
      </div>
    </div>
  )
}
