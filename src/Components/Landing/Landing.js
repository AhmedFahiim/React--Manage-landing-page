import React from "react";
import Header from "../Header/Header";
import "./Landing.scss";

function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <Header />
        <article className="mainContent row">
          <div className="col-lg-6 mainBox">
            <h1 className="headWord">
              Bring everyone together to build better products.
            </h1>
            <p className="disc">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="main">Get Started</button>
          </div>
          <div className="col-lg-6 imgBox">
            <img src="images/illustration-intro.svg" />
          </div>
        </article>
      </div>
      <img className="pattern" src="images/bg-tablet-pattern.svg" />
    </section>
  );
}

export default Landing;
