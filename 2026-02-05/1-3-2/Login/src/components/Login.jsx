import { useState } from "react";

export default function Login() {
  /* ================= state ================= */

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailCheckMessage, setEmailCheckMessage] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [usedEmails, setUsedEmails] = useState([]);

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [passwordCheckTouched, setPasswordCheckTouched] = useState(false);

  const [agree, setAgree] = useState(false);
  const [joined, setJoined] = useState(false);

  /* ================= 이메일 부분 ================= */

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setEmailCheckMessage("");
    setEmailChecked(false);
    setJoined(false); // 이메일 바꾸면 가입완료 해야해함
  };

  const handleEmailCheck = () => {
    if (email.trim() === "") {
      setEmailError("이메일을 입력해주세요");
      return;
    }

    if (usedEmails.includes(email)) {
      setEmailError("이미 사용한 이메일입니다")
      setEmailCheckMessage("");
      setEmailChecked(false);
    } else {
      setEmailCheckMessage("사용 가능한 이메일입니다");
      setEmailChecked(true);
    }
  };

  /* ================= 비밀번호 브분 ================= */

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (passwordCheckTouched && value !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다");
    } else {
      setPasswordCheckError("");
    }
  };

  const handlePasswordCheckChange = (e) => {
    const value = e.target.value;
    setPasswordCheck(value);

    if (!passwordCheckTouched) setPasswordCheckTouched(true);

    if (value !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다");
    } else {
      setPasswordCheckError("");
    }
  };

  /* ================= 가입ㅎㅏ는 부분 ================= */

  const handleJoin = () => {
    if (!emailChecked) {
      alert("이메일 중복검사를 해주세요");
      return;
    }

    if (password === "" || passwordCheckError) {
      alert("비밀번호를 확인해주세요");
      return;
    }

    if (!agree) {
      alert("이용약관에 동의해주세요");
      return;
    }
    
    alert("♣ 가입 완료되었습니다 ♣")
    setUsedEmails((prev) => [...prev, email]);
    setJoined(true);
  };


  return (
    <div className="box">
      {/* 이메일 */}
      <div className="email-box">
        <div className="email-error-box">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => {
              if (email.trim() === "") {
                setEmailError("이메일을 입력해주세요");
              }
            }}
            placeholder="이메일"
            className="email"
          />

            {/* 다른 스타일 주려고 삼항쓰기 */}
          <p className= {emailError ? "email-error" : "email-check"}>
            {emailError ? emailError : emailCheckMessage}
          </p>
        </div>

        <button
          type="button"
          className="prosecutor"
          onClick={handleEmailCheck}
        >
          중복검사
        </button>
      </div>

      {/* 비밀번호 */}
      <div className="password-box">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호"
          className="password-top"
        />

        <input
          type="password"
          value={passwordCheck}
          onChange={handlePasswordCheckChange}
          placeholder="비밀번호 확인"
          className="password"
        />

        <div className="error-box">
          {passwordCheckTouched && passwordCheckError && (
            <p className="error">{passwordCheckError}</p>
          )}
        </div>
      </div>


      {/* 약관 + 가입 */}
      <div className="join-box">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="checkmark" />
          <span className="consent-text">이용약관에 동의합니다</span>
        </label>

        <button className="join" onClick={handleJoin}>
          {joined ? "가입완료" : "가입하기"}
        </button>
      </div>
      
    </div>
  );
}
