import React, { useState } from "react";
import "./Testi.scss";

function Testi() {
  const [testimonials] = useState([
    {
      id: 0,
      name: "Anisha Li",
      img: "avatar-anisha.png",
      feedBack:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      id: 1,
      name: "Ali Bravo",
      img: "avatar-ali.png",
      feedBack:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      id: 2,
      name: " Richard Watts",
      img: "avatar-richard.png",
      feedBack:
        "“Manage allows us to provide structure and process. It keeps us organized   and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      id: 3,
      name: "Shanai Gough",
      img: "avatar-shanai.png",
      feedBack:
        "“Their software allows us to track, manage and collaborate on our projects   from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ]);

  const [active, setActive] = useState(0);

  const maping = testimonials.map((e) => {
    return (
      <div className="slide-item" key={e.id}>
        <div className="avatar">
          <img src={`images/${e.img}`} />
        </div>
        <span className="name">{e.name}</span>
        <blockquote className="feedBack">{e.feedBack}</blockquote>
      </div>
    );
  });

  const clickHandler = (target) => {
    setActive(target.getAttribute("id"));
  };
  return (
    <section className="testimonials">
      <h3 className="heading">What they've said</h3>
      <article className="slide-holder">
        <div className="slider">{maping}</div>
        <ul className="bullets">
          <li
            onClick={(e) => clickHandler(e.target)}
            id="0"
            className={`bullet ${active == 0 && "active"}`}
          ></li>
          <li
            onClick={(e) => clickHandler(e.target)}
            id="1"
            className={`bullet ${active == 1 && "active"}`}
          ></li>
        </ul>
        <button className="main">Get Started</button>
      </article>
    </section>
  );
}

export default Testi;
