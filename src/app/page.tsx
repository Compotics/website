"use client";

const EMAIL = "info@compotics.com";

export default function Home() {
  return (
    <div className="app">
      <div className="bubble topRight"></div>
      <div className="bubble bottomLeft"></div>

      <div className="homePage">
        <div className="logo">compotics</div>
        <div className="tagline">
          <p className="tag1">revolutionizing the</p>
          <p className="tag2">automated drug compounding industry</p>
        </div>
        <div className="contact">
          interested? contact us at&nbsp;
          <span>
            <a
              href={"mailto:" + EMAIL}
              target="_blank"
              className="email"
              onClick={() => {
                navigator.clipboard.writeText(EMAIL);
              }}
            >
              {EMAIL}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
