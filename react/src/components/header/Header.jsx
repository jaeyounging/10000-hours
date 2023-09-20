import React from "react";
import "./Header.css";
import title from "../../imgs/title.png";
import txtSubTitle from "../../imgs/txt_subtitle.png";

export default function Header() {
  return (
    <header>
      <h1 className="title">
        <img className="title-img" src={title} alt="1만 시간의 법칙" />
      </h1>
      <img
        className="title-txt"
        src={txtSubTitle}
        alt="연습은 어제의 당신보다 당신을 더 낫게 만든다"
      />
      <p className="description">
        <strong className="description-strong">1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </header>
  );
}
