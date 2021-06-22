import { useState, useEffect } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const MainText = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 300);
  }, []);

  return (
    <div className="main-text">
      <h1 className="title">Capítulo Uno</h1>
      <CSSTransition in={inProp} timeout={1200} classNames="text">
        <p className="text-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          temporibus quis ratione saepe praesentium esse quisquam dolorem in,
          veniam tenetur ducimus dolore minus culpa magni vitae enim quia atque
          explicabo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Officia temporibus quis ratione saepe praesentium esse quisquam
          dolorem in, veniam tenetur ducimus dolore minus culpa magni vitae enim
          quia atque explicabo.
        </p>
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1300} classNames="text">
        <p className="text-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          temporibus quis ratione saepe praesentium esse quisquam dolorem in,
          veniam tenetur ducimus dolore minus culpa magni vitae enim quia atque
          explicabo.
        </p>
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1400} classNames="text">
        <p className="text-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          temporibus quis ratione saepe praesentium esse quisquam dolorem in,
          veniam tenetur ducimus dolore minus culpa magni vitae enim quia atque
          explicabo.
        </p>
      </CSSTransition>
    </div>
  );
};

export default MainText;
