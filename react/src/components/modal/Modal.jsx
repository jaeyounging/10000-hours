import React from "react";
import "./Modal.css";
import licat from "../../imgs/licat.png";

export default function Modal({ setModalShow }) {
  return (
    <article id="Modal">
      <div className="modal-wrap">
        <h2>화이팅!!&#9829;&#9829;&#9829;</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={licat} alt="라이켓 캐릭터" />
        <button className="close-btn" type="button" onClick={() => setModalShow(false)}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </div>
    </article>
  );
}
