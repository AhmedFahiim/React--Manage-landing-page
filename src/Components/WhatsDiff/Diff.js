import React, { useState } from "react";
import "./Diff.scss";
function Diff() {
  const [Different] = useState([
    {
      id: 1,
      head: "Track company-wide progress",
      details:
        "  See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: 2,
      head: "Advanced built-in reports",
      details:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: 3,
      head: "Everything you need in one place",
      details:
        "  Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ]);

  const maping = Different.map((e) => {
    return (
      <div className="answer" key={e.id}>
        <h2 className="answerHead">{e.head}</h2>
        <p className="answerDisc">{e.details}</p>
        <span className="number">0{e.id}</span>
      </div>
    );
  });

  return (
    <section className="diffrent">
      <div className="container">
        <div className="row">
          <article className="question col-lg-5">
            <h1 className="whatIs"> What’s different about Manage?</h1>
            <p className="disc">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </article>
          <article className="answer col-lg-6">{maping}</article>
        </div>
      </div>
      <img className="pattern" src="images/bg-tablet-pattern.svg" />
    </section>
  );
}

export default Diff;
