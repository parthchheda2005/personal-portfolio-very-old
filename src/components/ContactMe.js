import React from "react";

export default function ContactMe() {
  function redirectToGitHub() {
    window.open("https://github.com/parthchheda2005", "_blank");
  }

  function redirectToEmail() {
    window.open("mailto:parth.h.chheda@gmail.com", "_blank");
  }

  function redirectToLinkedin() {
    window.open(
      "https://www.linkedin.com/in/parth-chheda-2a8805309/",
      "_blank"
    );
  }

  return (
    <div className="contact-me">
      <header>
        <h1>Contact me!</h1>
      </header>
      <div className="contacts-list">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/454/517/original/email-confirmation-app-icon-email-icon-free-png.png"
          alt="Email"
          onClick={redirectToEmail}
        />
        <img
          src="https://static-00.iconduck.com/assets.00/github-icon-1024x1024-q66rpdfp.png"
          alt="Github"
          onClick={redirectToGitHub}
        />
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          alt="Linkedin"
          onClick={redirectToLinkedin}
        />
      </div>
    </div>
  );
}
