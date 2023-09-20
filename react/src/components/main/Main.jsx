import React, { useState } from "react";
import "./Main.css";

export default function Main({ setModalShow }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [days, setDays] = useState(0);

  console.log(time, text);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDays(Math.ceil(10000 / parseInt(time))); // Math.ceil: 올림
  };

  return (
    <main>
      <form className="input-container" onSubmit={handleSubmit}>
        <p className="input-txt">
          나는{" "}
          <input
            type="text"
            placeholder="예) 프로그래밍"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />{" "}
          전문가가 될 것이다.
        </p>
        <p className="input-num">
          그래서 앞으로 매일 하루에{" "}
          <input
            type="number"
            placeholder="예) 5시간"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />{" "}
          시간씩 훈련할 것이다.
        </p>
        <button className="input-btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
      </form>
      {days === 0 ? (
        ""
      ) : (
        <section className="result-container">
          <h2 className="a11y-hidden">결과 확인</h2>
          <p>
            당신은<strong>{text}</strong>전문가가 되기 위해서
            <br />
            대략<strong>{days}</strong>일 이상 훈련하셔야 됩니다! :)
          </p>
          <button className="go-btn" onClick={() => setModalShow(true)}>
            훈련하러 가기 GO!GO!
          </button>
          <button className="share-btn">공유하기</button>
        </section>
      )}
    </main>
  );
}
