function Cards() {
    const name = "성명 : 김신중"
    const currentYear = new Date().getFullYear(); //현재~
    const birthYear = 2000; // 저의 년도생
    const age = currentYear - birthYear;
    const hobby = ["큐브 ","운동 ","요리 "]
    const mbti = "MBTI : INFJ"
    
    return (
    
    <main className="books">
        <section className="bottom">
            <div className="name">{name} <span className="age">( {age} )</span></div>
            <span className="hobby">취미 : {hobby.join(",")}</span>
            <span className="mbti">{mbti}</span>
        </section>
    </main>
  )
}

export default Cards