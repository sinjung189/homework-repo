export default function Post({name,author}) {
  return (
    <div className="card">
        <span>성명 : {name}</span>
        <p>저자 : {author}</p>
    </div>
  )
}