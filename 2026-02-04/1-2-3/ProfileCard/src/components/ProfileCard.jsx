
export default function ProfileCard({name,age,job}) {
  return (
    <div className="card">
        <span className="name">성명 : {name}</span>
        <p className="text"> 나이 : {age}</p>
        <p className="text"> 직업 : {job}</p>
    </div>
  )
}
